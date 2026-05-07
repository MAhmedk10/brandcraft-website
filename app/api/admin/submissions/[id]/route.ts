import { createServerClient } from '@/lib/supabase/server'
import { createServerClient as createSupabaseServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  // Verify authentication using cookie-based session
  const cookieStore = await cookies()
  const authClient = createSupabaseServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll() {
          // Not needed for reading session
        },
      },
    }
  )

  const {
    data: { user },
  } = await authClient.auth.getUser()

  if (!user) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Parse request body
  const body = await request.json()
  const { status, adminNotes } = body

  // Build update object with only provided fields
  const updates: Record<string, any> = {}

  if (status !== undefined) {
    const validStatuses = ['new', 'reviewed', 'quoted', 'closed']
    if (!validStatuses.includes(status)) {
      return Response.json({ error: 'Invalid status value' }, { status: 400 })
    }
    updates.status = status
  }

  if (adminNotes !== undefined) {
    // Sanitize HTML tags from notes
    updates.admin_notes = adminNotes.replace(/<[^>]*>/g, '').trim()
  }

  if (Object.keys(updates).length === 0) {
    return Response.json(
      { error: 'No valid fields to update' },
      { status: 400 }
    )
  }

  // Use service role client to bypass RLS for admin operations
  const supabase = createServerClient()

  const { error } = await supabase
    .from('form_submissions')
    .update(updates)
    .eq('id', id)

  if (error) {
    console.error('Update error:', error)
    return Response.json({ error: 'Update failed' }, { status: 500 })
  }

  return Response.json({ success: true })
}
