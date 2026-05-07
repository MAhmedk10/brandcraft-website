import Link from 'next/link'
import { createServerClient } from '@/lib/supabase/server'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Inbox, ChevronLeft, ChevronRight, Search } from 'lucide-react'

export const dynamic = 'force-dynamic'

const ITEMS_PER_PAGE = 25

type FormType = 'quick_quote' | 'product_quote' | 'contact'
type Status = 'new' | 'reviewed' | 'quoted' | 'closed'

interface FormSubmission {
  id: string
  created_at: string
  form_type: FormType
  status: Status
  full_name: string
  email: string
  product_name: string | null
  subject: string | null
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

export default async function AdminDashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams
  const formType = (params.formType as string) || 'all'
  const status = (params.status as string) || 'all'
  const search = (params.search as string) || ''
  const page = parseInt((params.page as string) || '1', 10)

  const supabase = createServerClient()

  // Fetch summary counts
  const now = new Date()
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString()
  const monthAgo = new Date(
    now.getTime() - 30 * 24 * 60 * 60 * 1000
  ).toISOString()

  const [totalResult, unreadResult, weekResult, monthResult] = await Promise.all(
    [
      supabase.from('form_submissions').select('*', { count: 'exact', head: true }),
      supabase
        .from('form_submissions')
        .select('*', { count: 'exact', head: true })
        .eq('is_read', false),
      supabase
        .from('form_submissions')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', weekAgo),
      supabase
        .from('form_submissions')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', monthAgo),
    ]
  )

  const totalCount = totalResult.count || 0
  const unreadCount = unreadResult.count || 0
  const weekCount = weekResult.count || 0
  const monthCount = monthResult.count || 0

  // Build filtered query
  let query = supabase
    .from('form_submissions')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })

  if (formType && formType !== 'all') {
    query = query.eq('form_type', formType)
  }
  if (status && status !== 'all') {
    query = query.eq('status', status)
  }
  if (search) {
    query = query.or(`full_name.ilike.%${search}%,email.ilike.%${search}%`)
  }

  // Pagination
  const from = (page - 1) * ITEMS_PER_PAGE
  const to = from + ITEMS_PER_PAGE - 1
  query = query.range(from, to)

  const { data: submissions, count: filteredCount } = await query

  const totalPages = Math.ceil((filteredCount || 0) / ITEMS_PER_PAGE)

  // Build URL with search params
  function buildUrl(newParams: Record<string, string>) {
    const urlParams = new URLSearchParams()
    const merged = {
      formType,
      status,
      search,
      page: String(page),
      ...newParams,
    }
    Object.entries(merged).forEach(([key, value]) => {
      if (value && value !== 'all' && value !== '1' && value !== '') {
        urlParams.set(key, value)
      }
    })
    const queryString = urlParams.toString()
    return `/admin/dashboard${queryString ? `?${queryString}` : ''}`
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-serif text-2xl font-semibold">Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Card>
          <CardContent className="flex flex-col gap-1 pt-0">
            <span className="font-serif text-3xl font-semibold text-accent">
              {totalCount}
            </span>
            <span className="text-sm text-muted-foreground">Total</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col gap-1 pt-0">
            <span className="font-serif text-3xl font-semibold text-accent">
              {unreadCount}
            </span>
            <span className="text-sm text-muted-foreground">New / Unread</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col gap-1 pt-0">
            <span className="font-serif text-3xl font-semibold text-accent">
              {weekCount}
            </span>
            <span className="text-sm text-muted-foreground">This Week</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col gap-1 pt-0">
            <span className="font-serif text-3xl font-semibold text-accent">
              {monthCount}
            </span>
            <span className="text-sm text-muted-foreground">This Month</span>
          </CardContent>
        </Card>
      </div>

      {/* Filter Bar */}
      <Card>
        <CardContent className="pt-0">
          <form
            action="/admin/dashboard"
            method="GET"
            className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
          >
            {/* Form Type Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { value: 'all', label: 'All' },
                { value: 'quick_quote', label: 'Quick Quote' },
                { value: 'product_quote', label: 'Product Quote' },
                { value: 'contact', label: 'Contact' },
              ].map((tab) => (
                <Link
                  key={tab.value}
                  href={buildUrl({ formType: tab.value, page: '1' })}
                  className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                    formType === tab.value
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  {tab.label}
                </Link>
              ))}
            </div>

            {/* Status and Search */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <Select name="status" defaultValue={status}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="reviewed">Reviewed</SelectItem>
                  <SelectItem value="quoted">Quoted</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  name="search"
                  type="text"
                  placeholder="Search name or email..."
                  defaultValue={search}
                  className="pl-9"
                />
              </div>
              <input type="hidden" name="formType" value={formType} />
              <Button type="submit" variant="secondary">
                Filter
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Submissions Table */}
      <Card>
        <CardContent className="pt-0">
          {submissions && submissions.length > 0 ? (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead className="hidden sm:table-cell">Email</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Product/Subject
                    </TableHead>
                    <TableHead className="hidden lg:table-cell">Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissions.map((submission: FormSubmission) => (
                    <TableRow
                      key={submission.id}
                      className="group cursor-pointer"
                    >
                      <TableCell>
                        <Link
                          href={`/admin/dashboard/${submission.id}`}
                          className="flex items-center gap-2"
                        >
                          {!submission.is_read && (
                            <span className="size-2 shrink-0 rounded-full bg-accent" />
                          )}
                          <span className="font-medium">
                            {submission.full_name}
                          </span>
                        </Link>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Link href={`/admin/dashboard/${submission.id}`}>
                          {submission.email}
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Link href={`/admin/dashboard/${submission.id}`}>
                          {getFormTypeBadge(submission.form_type)}
                        </Link>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <Link href={`/admin/dashboard/${submission.id}`}>
                          {submission.product_name || submission.subject || '—'}
                        </Link>
                      </TableCell>
                      <TableCell className="hidden lg:table-cell">
                        <Link href={`/admin/dashboard/${submission.id}`}>
                          {formatDate(submission.created_at)}
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Link href={`/admin/dashboard/${submission.id}`}>
                          {getStatusBadge(submission.status)}
                        </Link>
                      </TableCell>
                      <TableCell className="text-right">
                        <Link
                          href={`/admin/dashboard/${submission.id}`}
                          className="text-sm font-medium text-accent hover:underline"
                        >
                          View &rarr;
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Pagination */}
              <div className="flex items-center justify-between border-t pt-4">
                <span className="text-sm text-muted-foreground">
                  Page {page} of {totalPages || 1}
                </span>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={page <= 1}
                    asChild={page > 1}
                  >
                    {page > 1 ? (
                      <Link href={buildUrl({ page: String(page - 1) })}>
                        <ChevronLeft className="size-4" />
                        Previous
                      </Link>
                    ) : (
                      <span>
                        <ChevronLeft className="size-4" />
                        Previous
                      </span>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={page >= totalPages}
                    asChild={page < totalPages}
                  >
                    {page < totalPages ? (
                      <Link href={buildUrl({ page: String(page + 1) })}>
                        Next
                        <ChevronRight className="size-4" />
                      </Link>
                    ) : (
                      <span>
                        Next
                        <ChevronRight className="size-4" />
                      </span>
                    )}
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Inbox className="mb-4 size-12 text-muted-foreground" />
              <p className="text-lg font-medium">No submissions found</p>
              <p className="text-sm text-muted-foreground">
                Try adjusting your filters
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
