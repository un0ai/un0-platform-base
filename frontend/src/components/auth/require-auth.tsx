"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/utils/supabase/client"
import { Loader2 } from "lucide-react"

interface RequireAuthProps {
  children: React.ReactNode
}

export function RequireAuth({ children }: RequireAuthProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setIsAuthenticated(!!session)
      
      if (!session) {
        router.push('/sign-in')
      }
    }

    // Initial check
    checkAuth()

    // Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setIsAuthenticated(!!session)
        if (!session) {
          router.push('/sign-in')
        }
      }
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase.auth, router])

  // Show loading state while checking auth status
  if (isAuthenticated === null) {
    return (
      <div className="flex items-center justify-center min-h-[80vh]" data-testid="loading-spinner">
        <Loader2 className="h-8 w-8 animate-spin" />
        <span className="sr-only">Loading...</span>
      </div>
    )
  }

  // Show protected content for authenticated users
  return isAuthenticated ? <>{children}</> : null
}
