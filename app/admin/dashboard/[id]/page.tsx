import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { createServerClient } from '@/lib/supabase/server'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, FileText, ExternalLink } from 'lucide-react'
import { SubmissionActions } from './_components/submission-actions'

export const dynamic = 'force-dynamic'

type FormType = 'quick_quote' | 'product_quote' | 'contact'
type Status = 'new' | 'reviewed' | 'quoted' | 'closed'

interface FormSubmission {
  id: string
  created_at: string
  form_type: FormType
  status: Status
  full_name: string
  email: string
  phone: string | null
  product_name: string | null
  product_slug: string | null
  quantity: number | null
  description: string | null
  extra_fields: Record<string, any> | null
  subject: string | null
  message: string | null
  attachment_urls: string[] | null
  admin_notes: string | null
  is_read: boolean
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function getFormTypeBadge(formType: FormType) {
  const styles: Record<FormType, string> = {
    quick_quote: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
    product_quote:
      'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300',
    contact: 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300',
  }

  const labels: Record<FormType, string> = {
    quick_quote: 'Quick Quote',
    product_quote: 'Product Quote',
    contact: 'Contact',
  }

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${styles[formType]}`}
    >
      {labels[formType]}
    </span>
  )
}

function getStatusBadge(status: Status) {
  const styles: Record<Status, string> = {
    new: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
    reviewed:
      'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
    quoted:
      'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300',
    closed: 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300',
  }

  const labels: Record<Status, string> = {
    new: 'New',
    reviewed: 'Reviewed',
    quoted: 'Quoted',
    closed: 'Closed',
  }

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${styles[status]}`}
    >
      {labels[status]}
    </span>
  )
}

function isImageFile(path: string): boolean {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp']
  const lowerPath = path.toLowerCase()
  return imageExtensions.some((ext) => lowerPath.endsWith(ext))
}

function getFileName(path: string): string {
  return path.split('/').pop() || path
}

interface SignedAttachment {
  path: string
  url: string | null
  error?: string
}

export default async function SubmissionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = createServerClient()

  // Fetch the submission
  const { data: submission, error } = await supabase
    .from('form_submissions')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !submission) {
    notFound()
  }

  // Mark as read if not already
  if (!submission.is_read) {
    await supabase
      .from('form_submissions')
      .update({ is_read: true })
      .eq('id', id)
  }

  // Generate signed URLs for attachments
  const attachments: SignedAttachment[] = []
  if (submission.attachment_urls && submission.attachment_urls.length > 0) {
    for (const path of submission.attachment_urls) {
      const { data, error: signError } = await supabase.storage
        .from('form-attachments')
        .createSignedUrl(path, 3600) // 1 hour expiry

      attachments.push({
        path,
        url: data?.signedUrl || null,
        error: signError?.message,
      })
    }
  }

  const typedSubmission = submission as FormSubmission

  return (
    <div className="flex flex-col gap-6">
      {/* Top Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/admin/dashboard"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to Dashboard
        </Link>
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-sm text-muted-foreground">
            ID: {typedSubmission.id.slice(0, 8)}
          </span>
          <span className="text-sm text-muted-foreground">
            {formatDate(typedSubmission.created_at)}
          </span>
          {getFormTypeBadge(typedSubmission.form_type)}
          {getStatusBadge(typedSubmission.status)}
        </div>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column - Submission Details */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Submission Details</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-0">
              {/* Common Fields */}
              <DetailRow label="Full Name" value={typedSubmission.full_name} />
              <DetailRow label="Email Address" value={typedSubmission.email} />
              <DetailRow
                label="Phone"
                value={typedSubmission.phone || 'Not provided'}
              />
              <DetailRow
                label="Form Type"
                value={
                  typedSubmission.form_type === 'quick_quote'
                    ? 'Quick Quote'
                    : typedSubmission.form_type === 'product_quote'
                      ? 'Product Quote'
                      : 'Contact'
                }
              />
              <DetailRow
                label="Submitted"
                value={formatDate(typedSubmission.created_at)}
              />
              <DetailRow
                label="Status"
                value={
                  typedSubmission.status.charAt(0).toUpperCase() +
                  typedSubmission.status.slice(1)
                }
              />

              {/* Quote-specific Fields */}
              {(typedSubmission.form_type === 'quick_quote' ||
                typedSubmission.form_type === 'product_quote') && (
                <>
                  <DetailRow
                    label="Product"
                    value={typedSubmission.product_name || 'Not specified'}
                  />
                  {typedSubmission.product_slug && (
                    <DetailRow
                      label="Product Page"
                      value={
                        <Link
                          href={`/products/${typedSubmission.product_slug}`}
                          target="_blank"
                          className="flex items-center gap-1 text-accent hover:underline"
                        >
                          View Product
                          <ExternalLink className="size-3" />
                        </Link>
                      }
                    />
                  )}
                  <DetailRow
                    label="Quantity"
                    value={
                      typedSubmission.quantity?.toString() || 'Not specified'
                    }
                  />
                  {typedSubmission.extra_fields?.width &&
                    typedSubmission.extra_fields?.height && (
                      <DetailRow
                        label="Dimensions"
                        value={`${typedSubmission.extra_fields.width} x ${typedSubmission.extra_fields.height}`}
                      />
                    )}
                  {typedSubmission.extra_fields?.backingType && (
                    <DetailRow
                      label="Backing Type"
                      value={typedSubmission.extra_fields.backingType}
                    />
                  )}
                  {typedSubmission.description && (
                    <DetailRow
                      label="Description"
                      value={typedSubmission.description}
                      multiline
                    />
                  )}
                </>
              )}

              {/* Contact-specific Fields */}
              {typedSubmission.form_type === 'contact' && (
                <>
                  <DetailRow
                    label="Subject"
                    value={typedSubmission.subject || 'No subject'}
                  />
                  {typedSubmission.message && (
                    <DetailRow
                      label="Message"
                      value={typedSubmission.message}
                      multiline
                    />
                  )}
                </>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Attachments and Actions */}
        <div className="flex flex-col gap-6">
          {/* File Attachments Card */}
          <Card>
            <CardHeader>
              <CardTitle>File Attachments</CardTitle>
            </CardHeader>
            <CardContent>
              {attachments.length > 0 ? (
                <div className="grid grid-cols-2 gap-3">
                  {attachments.map((attachment) => (
                    <a
                      key={attachment.path}
                      href={attachment.url || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex flex-col overflow-hidden rounded-lg border transition-colors ${
                        attachment.url
                          ? 'hover:border-accent'
                          : 'cursor-not-allowed opacity-50'
                      }`}
                    >
                      <div className="flex aspect-square items-center justify-center bg-muted">
                        {attachment.url && isImageFile(attachment.path) ? (
                          <Image
                            src={attachment.url}
                            alt={getFileName(attachment.path)}
                            width={200}
                            height={200}
                            className="size-full object-cover"
                          />
                        ) : (
                          <FileText className="size-8 text-muted-foreground" />
                        )}
                      </div>
                      <div className="truncate p-2 text-xs text-muted-foreground">
                        {getFileName(attachment.path)}
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  No files attached
                </p>
              )}
            </CardContent>
          </Card>

          {/* Admin Actions Card */}
          <Card>
            <CardHeader>
              <CardTitle>Admin Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <SubmissionActions
                submissionId={typedSubmission.id}
                currentStatus={typedSubmission.status}
                currentNotes={typedSubmission.admin_notes}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function DetailRow({
  label,
  value,
  multiline = false,
}: {
  label: string
  value: React.ReactNode
  multiline?: boolean
}) {
  return (
    <div
      className={`flex border-b py-3 last:border-b-0 ${multiline ? 'flex-col gap-1' : 'items-center justify-between gap-4'}`}
    >
      <span className="shrink-0 text-sm font-medium text-muted-foreground">
        {label}
      </span>
      <span
        className={`text-sm ${multiline ? 'whitespace-pre-wrap' : 'text-right'}`}
      >
        {value}
      </span>
    </div>
  )
}
