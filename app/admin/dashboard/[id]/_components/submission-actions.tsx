'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Spinner } from '@/components/ui/spinner'
import { Check, AlertCircle } from 'lucide-react'

interface SubmissionActionsProps {
  submissionId: string
  currentStatus: string
  currentNotes: string | null
}

export function SubmissionActions({
  submissionId,
  currentStatus,
  currentNotes,
}: SubmissionActionsProps) {
  const [status, setStatus] = useState(currentStatus)
  const [notes, setNotes] = useState(currentNotes || '')
  const [isStatusLoading, setIsStatusLoading] = useState(false)
  const [isNotesLoading, setIsNotesLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error'
    text: string
  } | null>(null)
  const [notesMessage, setNotesMessage] = useState<{
    type: 'success' | 'error'
    text: string
  } | null>(null)
  const router = useRouter()

  const handleStatusUpdate = async () => {
    setIsStatusLoading(true)
    setStatusMessage(null)

    try {
      const response = await fetch(`/api/admin/submissions/${submissionId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      })

      if (!response.ok) {
        throw new Error('Failed to update status')
      }

      setStatusMessage({ type: 'success', text: 'Status updated' })
      router.refresh()
    } catch {
      setStatusMessage({ type: 'error', text: 'Failed to update status' })
    } finally {
      setIsStatusLoading(false)
    }
  }

  const handleNotesUpdate = async () => {
    setIsNotesLoading(true)
    setNotesMessage(null)

    try {
      const response = await fetch(`/api/admin/submissions/${submissionId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ adminNotes: notes }),
      })

      if (!response.ok) {
        throw new Error('Failed to save notes')
      }

      setNotesMessage({ type: 'success', text: 'Notes saved' })
      router.refresh()
    } catch {
      setNotesMessage({ type: 'error', text: 'Failed to save notes' })
    } finally {
      setIsNotesLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Update Status Section */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium">Update Status</label>
        <div className="flex gap-2">
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="flex-1">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="reviewed">Reviewed</SelectItem>
              <SelectItem value="quoted">Quoted</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
          <Button
            onClick={handleStatusUpdate}
            disabled={isStatusLoading || status === currentStatus}
          >
            {isStatusLoading ? <Spinner /> : 'Update'}
          </Button>
        </div>
        {statusMessage && (
          <div
            className={`flex items-center gap-2 text-sm ${
              statusMessage.type === 'success'
                ? 'text-green-600 dark:text-green-400'
                : 'text-destructive'
            }`}
          >
            {statusMessage.type === 'success' ? (
              <Check className="size-4" />
            ) : (
              <AlertCircle className="size-4" />
            )}
            {statusMessage.text}
          </div>
        )}
      </div>

      {/* Internal Notes Section */}
      <div className="flex flex-col gap-3">
        <div>
          <label className="text-sm font-medium">Internal Notes</label>
          <p className="text-xs text-muted-foreground">
            Only visible to admins — not shown to clients
          </p>
        </div>
        <Textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add internal notes about this submission..."
          rows={4}
        />
        <div className="flex items-center gap-3">
          <Button onClick={handleNotesUpdate} disabled={isNotesLoading}>
            {isNotesLoading ? <Spinner /> : 'Save Notes'}
          </Button>
          {notesMessage && (
            <div
              className={`flex items-center gap-2 text-sm ${
                notesMessage.type === 'success'
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-destructive'
              }`}
            >
              {notesMessage.type === 'success' ? (
                <Check className="size-4" />
              ) : (
                <AlertCircle className="size-4" />
              )}
              {notesMessage.text}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
