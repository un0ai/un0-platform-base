"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function InfrastructurePage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent dark:from-primary dark:to-primary/70">
          Infrastructure
        </h1>
        <p className="text-lg text-foreground/80 dark:text-foreground/80 leading-relaxed">
          Manage your AI infrastructure and resources
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Resource Overview</CardTitle>
            <CardDescription>Monitor your infrastructure resources</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Compute Resources</p>
                  <p className="text-sm text-muted-foreground">CPU, GPU, Memory usage</p>
                </div>
                <Badge>Coming Soon</Badge>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Storage</p>
                  <p className="text-sm text-muted-foreground">Database and file storage</p>
                </div>
                <Badge>Coming Soon</Badge>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Network</p>
                  <p className="text-sm text-muted-foreground">Bandwidth and latency</p>
                </div>
                <Badge>Coming Soon</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Infrastructure Management</CardTitle>
            <CardDescription>Configure and optimize your infrastructure</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Scaling Configuration</p>
                  <p className="text-sm text-muted-foreground">Auto-scaling settings</p>
                </div>
                <Badge>Coming Soon</Badge>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Cost Management</p>
                  <p className="text-sm text-muted-foreground">Resource optimization</p>
                </div>
                <Badge>Coming Soon</Badge>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Security</p>
                  <p className="text-sm text-muted-foreground">Access control and monitoring</p>
                </div>
                <Badge>Coming Soon</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
