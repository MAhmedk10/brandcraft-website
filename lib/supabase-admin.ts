import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error("Missing Supabase environment variables")
}

/**
 * Server-side Supabase client with service-role privileges.
 * Only use in API routes / server actions — never expose to the browser.
 */
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)

/** Name of the storage bucket for uploaded design files */
export const UPLOAD_BUCKET = "uploads"

/**
 * Upload a file to Supabase Storage and return the public URL.
 * Creates the bucket automatically if it does not exist yet.
 */
export async function uploadFile(file: File): Promise<string> {
  // Ensure bucket exists (idempotent)
  const { data: buckets } = await supabaseAdmin.storage.listBuckets()
  const bucketExists = buckets?.some((b) => b.name === UPLOAD_BUCKET)
  if (!bucketExists) {
    await supabaseAdmin.storage.createBucket(UPLOAD_BUCKET, {
      public: true,
      fileSizeLimit: 25 * 1024 * 1024, // 25 MB
    })
  }

  const timestamp = Date.now()
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_")
  const filePath = `${timestamp}-${safeName}`

  const arrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  const { error } = await supabaseAdmin.storage
    .from(UPLOAD_BUCKET)
    .upload(filePath, buffer, {
      contentType: file.type || "application/octet-stream",
      upsert: false,
    })

  if (error) {
    throw new Error(`File upload failed: ${error.message}`)
  }

  const { data: urlData } = supabaseAdmin.storage
    .from(UPLOAD_BUCKET)
    .getPublicUrl(filePath)

  return urlData.publicUrl
}
