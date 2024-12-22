"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/utils/supabase/client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { LoginForm } from "@/app/(auth)/login/components/LoginForm"
import { ShieldAlert } from "lucide-react"
import { Separator } from "../ui/separator"

interface ProtectedPageProps {
  children: React.ReactNode
  title?: string
  description?: string
}

export function ProtectedPage({ children, title, description }: ProtectedPageProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setIsAuthenticated(!!session)
    }

    checkAuth()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase.auth])

  if (isAuthenticated === null) {
    return null
  }

  if (!isAuthenticated) {
    return (
      <div className="container flex items-center justify-center min-h-[80vh] py-8 px-4">
        <Card className="w-full max-w-lg border-none shadow-lg">
          <CardHeader className="space-y-3">
            <div className="flex items-center gap-2 text-destructive">
              <ShieldAlert className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wide">Restricted Area</span>
            </div>
            <CardTitle className="text-2xl">
              {title || "Protected Page"}
            </CardTitle>
            <CardDescription className="text-base">
              {description || "This content requires authentication"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-destructive/5 text-foreground p-4 rounded-lg">
              <p className="text-sm">
                This page is only accessible to registered users. Please sign in with your account to request {title?.toLowerCase() || "protected content"}.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  Sign in to continue
                </span>
              </div>
            </div>

            <LoginForm />
          </CardContent>
        </Card>
      </div>
    )
  }

  return <>{children}</>
}
