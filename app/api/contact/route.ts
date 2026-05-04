import { createServerClient } from "@/lib/supabase/server"
import { contactSchema } from "@/lib/validations/contact"
import { resend } from "@/lib/resend"

const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

export async function POST(request: Request) {
  // 1. RATE LIMITING
  const ip = request.headers.get("x-forwarded-for") || "unknown"
  const now = Date.now()
  const windowMs = 60 * 60 * 1000
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

  // 2. PARSE JSON BODY
  const body = await request.json()
  const { fullName, email, phone, subject, message } = body

  // 3. VALIDATE WITH ZOD
  const validation = contactSchema.safeParse({
    fullName,
    email,
    phone,
    subject,
    message,
  })

  if (!validation.success) {
    return Response.json(
      { error: "Validation failed", details: validation.error.errors },
      { status: 400 }
    )
  }

  // 4. SANITISE
  const sanitise = (str: string | null) =>
    str ? str.replace(/<[^>]*>/g, "").trim() : null

  // 5. SAVE TO DATABASE
  const supabase = createServerClient()
  const { error: dbError } = await supabase
    .from("form_submissions")
    .insert({
      form_type: "contact",
      status: "new",
      is_read: false,
      full_name: sanitise(fullName),
      email: email.trim().toLowerCase(),
      phone: sanitise(phone) || null,
      subject: sanitise(subject),
      message: sanitise(message),
    })

  if (dbError) {
    console.error("Database insert error:", dbError)
    return Response.json(
      { error: "Submission failed. Please try again." },
      { status: 500 }
    )
  }

  // 6. SEND RESEND NOTIFICATION
  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.RESEND_TO_EMAIL!,
      subject: `New Contact Message from ${sanitise(fullName)}`,
      html: `
        <p>A new contact form message has been submitted.</p>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600">Name:</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${sanitise(fullName)}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600">Email:</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${email}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600">Subject:</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${sanitise(subject)}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600">Submitted:</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${new Date().toLocaleString("en-GB")}</td></tr>
        </table>
        <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/admin/dashboard">View full details in the admin dashboard →</a></p>
      `,
    })
  } catch (resendError) {
    console.error("Resend notification error:", resendError)
  }

  // 7. RETURN SUCCESS
  return Response.json({
    success: true,
    message: "Your message has been sent. We will be in touch within 24 hours.",
  })
}
