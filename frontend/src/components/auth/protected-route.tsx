"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Button } from "@/components/ui/button"

interface ProtectedRouteProps {
  children: React.ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const supabase = createClientComponentClient()
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession()
        
        if (error) {
          console.error('Auth check error:', error)
          setIsAuthenticated(false)
          setIsLoading(false)
          return
        }

        setIsAuthenticated(!!session)
        setIsLoading(false)
      } catch (error) {
        console.error('Auth check error:', error)
        setIsAuthenticated(false)
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [supabase.auth])

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary" />
      </div>
    )
  }

  // Show login button for non-authenticated users
  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
        <p>Please sign in to access this page</p>
        <Button onClick={() => router.push('/login')}>Sign In</Button>
      </div>
    )
  }

  // Show protected content for authenticated users
  return <>{children}</>
}
