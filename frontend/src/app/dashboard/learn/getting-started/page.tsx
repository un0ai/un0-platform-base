"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function GettingStartedPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent dark:from-primary dark:to-primary/70">
          Getting Started
        </h1>
        <p className="text-lg text-foreground/80 dark:text-foreground/80 leading-relaxed">
          Welcome to un0.ai! Let's get you started with our platform.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Quick Start</CardTitle>
            <CardDescription>Get up and running in minutes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">1. Create an Account</h3>
              <p className="text-sm text-muted-foreground">Sign up and verify your email</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">2. Create Your First Agent</h3>
              <p className="text-sm text-muted-foreground">Use our Visual Agent Builder</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">3. Deploy</h3>
              <p className="text-sm text-muted-foreground">Deploy your agent to production</p>
            </div>
            <Button className="w-full" variant="outline">Start Tutorial</Button>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Key Concepts</CardTitle>
            <CardDescription>Essential platform concepts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Agents</h3>
              <p className="text-sm text-muted-foreground">Understanding AI agents</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Workflows</h3>
              <p className="text-sm text-muted-foreground">Building agent workflows</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Integration</h3>
              <p className="text-sm text-muted-foreground">Connecting with external services</p>
            </div>
            <Button className="w-full" variant="outline">Learn More</Button>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Resources</CardTitle>
            <CardDescription>Helpful learning materials</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Documentation</h3>
              <p className="text-sm text-muted-foreground">Comprehensive guides</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">API Reference</h3>
              <p className="text-sm text-muted-foreground">API documentation</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Examples</h3>
              <p className="text-sm text-muted-foreground">Sample projects</p>
            </div>
            <Button className="w-full" variant="outline">Browse Resources</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
