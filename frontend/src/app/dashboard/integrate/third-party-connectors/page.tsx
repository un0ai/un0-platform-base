"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ThirdPartyConnectorsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent dark:from-primary dark:to-primary/70">
          Third-party Connectors
        </h1>
        <p className="text-lg text-foreground/80 dark:text-foreground/80 leading-relaxed">
          Connect and integrate with external services and platforms
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>AI Services</CardTitle>
            <CardDescription>Connect to AI and ML platforms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 rounded-lg border bg-card">
                <span>OpenAI</span>
                <Badge variant="outline">Coming Soon</Badge>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg border bg-card">
                <span>Anthropic</span>
                <Badge variant="outline">Coming Soon</Badge>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg border bg-card">
                <span>Hugging Face</span>
                <Badge variant="outline">Coming Soon</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Cloud Providers</CardTitle>
            <CardDescription>Integrate with cloud services</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 rounded-lg border bg-card">
                <span>AWS</span>
                <Badge variant="outline">Coming Soon</Badge>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg border bg-card">
                <span>Google Cloud</span>
                <Badge variant="outline">Coming Soon</Badge>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg border bg-card">
                <span>Azure</span>
                <Badge variant="outline">Coming Soon</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Development Tools</CardTitle>
            <CardDescription>Connect to development platforms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 rounded-lg border bg-card">
                <span>GitHub</span>
                <Badge variant="outline">Coming Soon</Badge>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg border bg-card">
                <span>GitLab</span>
                <Badge variant="outline">Coming Soon</Badge>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg border bg-card">
                <span>Bitbucket</span>
                <Badge variant="outline">Coming Soon</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
