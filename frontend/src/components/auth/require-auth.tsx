"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/utils/supabase/client"
import { LoginForm } from "@/app/(auth)/login/components/LoginForm"

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
      <div className="container flex items-center justify-center min-h-[80vh]">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
    )
  }

  // Show protected content for authenticated users
  return <>{children}</>
}
