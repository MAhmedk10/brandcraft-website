import { createServerClient } from "@/lib/supabase/server"
import { quickQuoteSchema } from "@/lib/validations/quick-quote"
import { productQuoteSchema } from "@/lib/validations/product-quote"
import { resend } from "@/lib/resend"

const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

export async function POST(request: Request) {
  // 1. RATE LIMITING
  const ip = request.headers.get("x-forwarded-for") || "unknown"
  const now = Date.now()
  const windowMs = 60 * 60 * 1000 // 1 hour
  const limit = 5

  const record = rateLimitMap.get(ip)
  if (record && now < record.resetTime) {
    if (record.count >= limit) {
      return Response.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      )
    }
    record.count++
  } else {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs })
  }

  // 2. PARSE FORM DATA
  const formData = await request.formData()

  const fullName = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = (formData.get("phone") as string) || null
  const productName = formData.get("service") as string
  const productSlug = (formData.get("productSlug") as string) || null
  const width = (formData.get("width") as string) || null
  const height = (formData.get("height") as string) || null
  const quantity = (formData.get("quantity") as string) || null
  const backingType = (formData.get("backing") as string) || null
  const description = formData.get("message") as string
  const files = formData.getAll("file") as File[]

  // Determine form type
  const formType = productSlug ? "product_quote" : "quick_quote"

  // 3. VALIDATE
  const schema = formType === "product_quote" ? productQuoteSchema : quickQuoteSchema
  const validation = schema.safeParse({
    fullName,
    email,
    phone,
    productName,
    productSlug,
    width,
    height,
    quantity,
    backingType: backingType,
    description,
  })

  if (!validation.success) {
    return Response.json(
      { error: "Validation failed", details: validation.error.errors },
      { status: 400 }
    )
  }

  // 4. SANITISE TEXT
  const sanitise = (str: string | null) =>
    str ? str.replace(/<[^>]*>/g, "").trim() : null

  // 5. UPLOAD FILES TO SUPABASE STORAGE
  const supabase = createServerClient()
  const attachmentPaths: string[] = []
  const allowedMimeTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "application/pdf",
  ]
  const maxFileSize = 10 * 1024 * 1024 // 10MB

  for (const file of files) {
    if (!allowedMimeTypes.includes(file.type)) {
      console.error(`Rejected file with type: ${file.type}`)
      continue
    }
    if (file.size > maxFileSize) {
      console.error(`Rejected file over size limit: ${file.size}`)
      continue
    }

    const ext = file.name.split(".").pop()
    const filename = `${crypto.randomUUID()}.${ext}`
    const buffer = Buffer.from(await file.arrayBuffer())

    const { error: uploadError } = await supabase.storage
      .from("form-attachments")
      .upload(filename, buffer, { contentType: file.type })

    if (uploadError) {
      console.error("File upload error:", uploadError)
      continue
    }

    attachmentPaths.push(filename)
  }

  // 6. SAVE TO DATABASE
  const { error: dbError } = await supabase
    .from("form_submissions")
    .insert({
      form_type: formType,
      status: "new",
      is_read: false,
      full_name: sanitise(fullName),
      email: email.trim().toLowerCase(),
      phone: sanitise(phone),
      product_name: sanitise(productName),
      product_slug: productSlug,
      quantity: quantity ? parseInt(quantity) : null,
      description: sanitise(description),
      extra_fields: { width, height, backingType },
      attachment_urls: attachmentPaths,
    })

  if (dbError) {
    console.error("Database insert error:", dbError)
    return Response.json(
      { error: "Submission failed. Please try again." },
      { status: 500 }
    )
  }

  // 7. SEND RESEND NOTIFICATION
  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.RESEND_TO_EMAIL!,
      subject: `New ${formType === "product_quote" ? "Product" : "Quick"} Quote from ${sanitise(fullName)}`,
      html: `
        <p>A new quote request has been submitted on the website.</p>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600">Name:</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${sanitise(fullName)}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600">Email:</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${email}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600">Product:</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${sanitise(productName)}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600">Submitted:</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${new Date().toLocaleString("en-GB")}</td></tr>
        </table>
        <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/admin/dashboard">View full details in the admin dashboard →</a></p>
        <p><small>Do not reply to this email. All submission details are in the dashboard.</small></p>
      `,
    })
  } catch (resendError) {
    console.error("Resend notification error:", resendError)
  }

  // 8. RETURN SUCCESS
  return Response.json({
    success: true,
    message:
      "Your quote request has been submitted. We will be in touch within 24 hours.",
  })
}
