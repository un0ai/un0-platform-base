"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/utils/supabase/client"
import { LoginForm } from "@/app/(auth)/login/components/LoginForm"
import { LockKeyhole } from "lucide-react"

interface RequireAuthProps {
  children: React.ReactNode
}

export function RequireAuth({ children }: RequireAuthProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const supabase = createClient()

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setIsAuthenticated(!!session)
    }

    // Initial check
    checkAuth()

    // Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setIsAuthenticated(!!session)
      }
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase.auth])

  // Show nothing while checking auth status
  if (isAuthenticated === null) {
    return null
  }

  // Show login form for non-authenticated users
  if (!isAuthenticated) {
    return (
      <div className="container flex flex-col items-center justify-center min-h-[80vh] space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-block p-3 bg-blue-50 rounded-full">
            <LockKeyhole className="w-8 h-8 text-blue-500" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">Members Only Area</h2>
          </div>
        </div>
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
    )
  }

  // Show protected content for authenticated users
  return <>{children}</>
}
