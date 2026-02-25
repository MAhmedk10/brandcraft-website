import { Resend } from "resend"

if (!process.env.RESEND_API_KEY) {
  throw new Error("Missing RESEND_API_KEY environment variable")
}

export const resend = new Resend(process.env.RESEND_API_KEY)

/**
 * The "from" address for all outbound emails.
 * Uses Resend's default domain until a custom domain is verified.
 */
export const FROM_EMAIL = "BrandCraft Co. <onboarding@resend.dev>"

/**
 * The inbox that receives form submissions.
 * Change this to your real business email.
 */
export const TO_EMAIL = "delivered@resend.dev"
