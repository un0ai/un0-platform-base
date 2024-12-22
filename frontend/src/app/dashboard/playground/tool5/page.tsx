"use client"

import { useBetaAccess } from "@/hooks/use-beta-access"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Clock, Sparkles, Rocket, Lock, Bot, Zap } from "lucide-react"
import Link from "next/link"
import { ProtectedPage } from "@/components/auth/protected-page"

const betaFeatures = [
  {
    icon: Bot,
    title: "Advanced AI Agents",
    description: "Build and deploy sophisticated AI agents with advanced capabilities.",
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Process and respond to events in real-time with our high-performance engine.",
  },
  {
    icon: Rocket,
    title: "Custom Integrations",
    description: "Create powerful integrations with your existing tools and workflows.",
  },
]

export default function Tool5Page() {
  return (
    <ProtectedPage
      title="Beta Features"
      description="Access our latest experimental features"
    >
      <Tool5Content />
    </ProtectedPage>
  )
}

function Tool5Content() {
  const { status, isLoading } = useBetaAccess()

  if (isLoading) {
    return (
      <div className="container mx-auto py-8">
        <Card>
          <CardContent className="p-12">
            <div className="flex items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (status === 'not_requested') {
    return (
      <div className="container mx-auto py-8">
        <Card>
          <CardContent className="p-8">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2 max-w-md">
                <h2 className="text-xl font-semibold">Beta Access Required</h2>
                <p className="text-muted-foreground">
                  This feature is currently in private beta. Request access to try out our latest experimental features.
                </p>
                <Button asChild className="mt-4">
                  <Link href="/dashboard/playground/private-beta">
                    Request Beta Access
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (status === 'pending') {
    return (
      <div className="container mx-auto py-8">
        <Alert className="bg-muted">
          <Clock className="h-5 w-5" />
          <AlertTitle className="text-lg font-semibold">Application Under Review</AlertTitle>
          <AlertDescription className="mt-2">
            <p className="mb-2">
              Thanks for your interest in our beta features! Our team is currently reviewing your application.
            </p>
            <p className="text-sm text-muted-foreground">
              We'll notify you via email once your access is granted. This usually takes 24-48 hours.
            </p>
          </AlertDescription>
        </Alert>
      </div>
    )
  }

  if (status === 'approved') {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <h1 className="text-2xl font-bold">Beta Features Playground</h1>
          </div>
          <p className="text-muted-foreground mb-8">
            Welcome to the private beta! Here you can experiment with our latest features.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {betaFeatures.map((feature, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Try It Out</CardTitle>
              <CardDescription>
                Start building with our beta features. Need help? Check out our documentation or reach out to our support team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Here's what you can do:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Create and test new AI agents</li>
                  <li>Set up custom integrations</li>
                  <li>Monitor real-time performance</li>
                  <li>Access advanced settings</li>
                </ul>
                <div className="flex gap-4 mt-6">
                  <Button>
                    Get Started
                  </Button>
                  <Button variant="outline">
                    View Documentation
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return null
}
