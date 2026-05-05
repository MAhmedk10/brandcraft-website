'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import { LogOut } from 'lucide-react'

export function SignOutButton() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleSignOut = async () => {
    setIsLoading(true)
    await supabase.auth.signOut()
    router.push('/admin/login')
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleSignOut}
      disabled={isLoading}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <LogOut className="size-4" />
          <span className="hidden sm:inline">Sign Out</span>
        </>
      )}
    </Button>
  )
}
