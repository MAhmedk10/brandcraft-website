import { createAuthServerClient } from '@/lib/supabase/server'
import { Badge } from '@/components/ui/badge'
import { SignOutButton } from './_components/sign-out-button'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createAuthServerClient()

  // Get the current user session
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // If no user, render children only (login page)
  if (!user) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 border-b bg-card">
        <div className="flex h-14 items-center justify-between px-4 sm:px-6">
          {/* Left side - Logo and Admin badge */}
          <div className="flex items-center gap-3">
            <span className="font-serif text-lg font-semibold tracking-tight">
              BrandCraft Co.
            </span>
            <Badge variant="secondary" className="text-xs">
              Admin
            </Badge>
          </div>

          {/* Right side - User email and sign out */}
          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-muted-foreground sm:inline">
              {user.email}
            </span>
            <SignOutButton />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="p-4 sm:p-6">{children}</main>
    </div>
  )
}
