"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RequireAuth } from "@/components/auth/require-auth"

export default function CICDPipelinesPage() {
  return (
    <RequireAuth>
      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent dark:from-primary dark:to-primary/70">
            CI/CD Pipelines
          </h1>
          <p className="text-lg text-foreground/80 dark:text-foreground/80 leading-relaxed">
            Automate your AI deployment workflow with continuous integration and delivery
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Pipeline Status
                <Badge variant="outline" className="ml-2">Coming Soon</Badge>
              </CardTitle>
              <CardDescription>Monitor your deployment pipelines</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                  <div>
                    <p className="font-medium">Development</p>
                    <p className="text-sm text-muted-foreground">Last run: Coming Soon</p>
                  </div>
                  <Badge variant="secondary">Inactive</Badge>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                  <div>
                    <p className="font-medium">Staging</p>
                    <p className="text-sm text-muted-foreground">Last run: Coming Soon</p>
                  </div>
                  <Badge variant="secondary">Inactive</Badge>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                  <div>
                    <p className="font-medium">Production</p>
                    <p className="text-sm text-muted-foreground">Last run: Coming Soon</p>
                  </div>
                  <Badge variant="secondary">Inactive</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle>Pipeline Configuration</CardTitle>
              <CardDescription>Set up and manage your deployment pipelines</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border-2 border-dashed border-muted-foreground/20 p-6 text-center">
                <p className="text-sm text-muted-foreground">Coming Soon</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </RequireAuth>
  )
}
