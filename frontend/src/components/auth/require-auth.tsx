"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { LoginForm } from "@/app/(auth)/login/components/LoginForm"
import { LockKeyhole } from "lucide-react"

interface RequireAuthProps {
  children: React.ReactNode
}

export function RequireAuth({ children }: RequireAuthProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const supabase = createClientComponentClient()
  const router = useRouter()

  useEffect(() => {
    let mounted = true

    const checkAuth = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession()
        
        if (error) {
          console.error('Auth check error:', error)
          if (mounted) {
            setIsAuthenticated(false)
            setIsLoading(false)
          }
          return
        }

        if (mounted) {
          setIsAuthenticated(!!session)
          setIsLoading(false)
        }
      } catch (error) {
        console.error('Auth check error:', error)
        if (mounted) {
          setIsAuthenticated(false)
          setIsLoading(false)
        }
      }
    }

    // Initial check
    checkAuth()

    // Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (mounted) {
          setIsAuthenticated(!!session)
          setIsLoading(false)
        }
      }
    )

    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, [supabase.auth])

  // Show loading state (but only briefly)
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary" />
      </div>
    )
  }

  // Show login form for non-authenticated users
  if (!isAuthenticated) {
    return (
      <div className="container flex flex-col items-center justify-center min-h-[80vh] space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-block p-3 bg-blue-50 rounded-full dark:bg-blue-900/20">
            <LockKeyhole className="w-8 h-8 text-blue-500" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">Members Only Area</h2>
            <p className="text-muted-foreground">Please sign in to access this page</p>
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
