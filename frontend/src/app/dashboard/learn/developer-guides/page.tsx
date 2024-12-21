"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function DeveloperGuidesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent dark:from-primary dark:to-primary/70">
          Developer Guides
        </h1>
        <p className="text-lg text-foreground/80 dark:text-foreground/80 leading-relaxed">
          Comprehensive guides for developing with un0.ai
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Core Concepts</CardTitle>
            <CardDescription>Essential platform knowledge</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Architecture Overview</p>
                  <p className="text-sm text-muted-foreground">Platform architecture and components</p>
                </div>
                <Badge>10 min read</Badge>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Agent Development</p>
                  <p className="text-sm text-muted-foreground">Building custom AI agents</p>
                </div>
                <Badge>15 min read</Badge>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Workflow Design</p>
                  <p className="text-sm text-muted-foreground">Creating agent workflows</p>
                </div>
                <Badge>12 min read</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Advanced Topics</CardTitle>
            <CardDescription>In-depth technical guides</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Custom Integrations</p>
                  <p className="text-sm text-muted-foreground">Building third-party integrations</p>
                </div>
                <Badge>20 min read</Badge>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Performance Optimization</p>
                  <p className="text-sm text-muted-foreground">Optimizing agent performance</p>
                </div>
                <Badge>18 min read</Badge>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Security Best Practices</p>
                  <p className="text-sm text-muted-foreground">Securing your agents</p>
                </div>
                <Badge>15 min read</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>API Reference</CardTitle>
            <CardDescription>API documentation and examples</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">REST API</p>
                  <p className="text-sm text-muted-foreground">HTTP API documentation</p>
                </div>
                <Badge>Reference</Badge>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">WebSocket API</p>
                  <p className="text-sm text-muted-foreground">Real-time API documentation</p>
                </div>
                <Badge>Reference</Badge>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">SDKs</p>
                  <p className="text-sm text-muted-foreground">Client libraries</p>
                </div>
                <Badge>Reference</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Tutorials</CardTitle>
            <CardDescription>Step-by-step guides</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Building Your First Agent</p>
                  <p className="text-sm text-muted-foreground">Getting started tutorial</p>
                </div>
                <Badge>Tutorial</Badge>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Custom Actions</p>
                  <p className="text-sm text-muted-foreground">Creating agent actions</p>
                </div>
                <Badge>Tutorial</Badge>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Deployment</p>
                  <p className="text-sm text-muted-foreground">Production deployment</p>
                </div>
                <Badge>Tutorial</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
