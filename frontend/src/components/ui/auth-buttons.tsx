"use client"

import { Button } from "@/components/ui/button"
import { signout } from "@/lib/auth-actions"
import { createClient } from "@/utils/supabase/client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export function AuthButtons() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setIsAuthenticated(!!session)
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session)
    })

    checkAuth()

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return (
    <div>
      {isAuthenticated ? (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => signout()}
        >
          Sign out
        </Button>
      ) : (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.push("/login")}
        >
          Sign in
        </Button>
      )}
    </div>
  )
}
