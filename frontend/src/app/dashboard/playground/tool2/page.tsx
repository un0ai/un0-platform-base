"use client"

import { AuthComponent } from "@/components/auth/auth-component"

export default function Tool2Page() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Sign In to Access All Features</h1>
          <p className="text-muted-foreground">
            You are currently browsing as a guest. Sign in to unlock all features and personalize your experience.
          </p>
        </div>
        <AuthComponent />
      </div>
    </div>
  )
}
