import { NextResponse } from "next/server"
import { resend, FROM_EMAIL, TO_EMAIL } from "@/lib/resend"
import { uploadFile } from "@/lib/supabase-admin"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    // Extract fields
    const name = formData.get("name") as string | null
    const email = formData.get("email") as string | null
    const phone = formData.get("phone") as string | null
    const width = formData.get("width") as string | null
    const height = formData.get("height") as string | null
    const quantity = formData.get("quantity") as string | null
    const service = formData.get("service") as string | null
    const backing = formData.get("backing") as string | null
    const message = formData.get("message") as string | null
    const file = formData.get("file") as File | null

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required." },
        { status: 400 }
      )
    }

    // Upload file if provided
    let fileUrl: string | null = null
    if (file && file.size > 0) {
      fileUrl = await uploadFile(file)
    }

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New Quote Request — ${service || "General"} — ${name}`,
      html: `
        <h2>New Quote Request</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600">Name</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${name}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600">Email</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${email}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600">Phone</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${phone}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600">Service</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${service || "—"}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600">Backing</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${backing || "—"}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600">Dimensions</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${width || "—"}" x ${height || "—"}"</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600">Quantity</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${quantity || "—"}</td></tr>
          ${fileUrl ? `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600">Design File</td><td style="padding:8px 12px;border:1px solid #e5e7eb"><a href="${fileUrl}">View Uploaded File</a></td></tr>` : ""}
          ${message ? `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600">Project Description</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${message}</td></tr>` : ""}
        </table>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Quote API error:", err)
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}