"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ChangelogPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent dark:from-primary dark:to-primary/70">
          Changelog
        </h1>
        <p className="text-lg text-foreground/80 dark:text-foreground/80 leading-relaxed">
          Latest updates and improvements to the un0.ai platform
        </p>
      </div>

      <div className="space-y-6">
        <Card className="border-none shadow-md">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>December 2024</CardTitle>
                <CardDescription>Version 2.0.0</CardDescription>
              </div>
              <Badge variant="default">Latest</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">New Features</h3>
                <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                  <li>• Introduced Visual Agent Builder for no-code agent creation</li>
                  <li>• Added advanced workflow orchestration capabilities</li>
                  <li>• Launched new model management system</li>
                  <li>• Implemented real-time monitoring dashboard</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-lg">Improvements</h3>
                <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                  <li>• Enhanced performance of the agent runtime</li>
                  <li>• Optimized memory usage for large-scale deployments</li>
                  <li>• Improved error handling and reporting</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-lg">Bug Fixes</h3>
                <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                  <li>• Fixed memory leak in long-running workflows</li>
                  <li>• Resolved concurrency issues in the scheduler</li>
                  <li>• Fixed UI rendering bugs in the dashboard</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>November 2024</CardTitle>
                <CardDescription>Version 1.9.0</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">New Features</h3>
                <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                  <li>• Added support for custom model deployment</li>
                  <li>• Introduced new API endpoints for batch processing</li>
                  <li>• Launched beta version of the analytics dashboard</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-lg">Improvements</h3>
                <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                  <li>• Improved API response times</li>
                  <li>• Enhanced documentation with more examples</li>
                  <li>• Updated UI components for better accessibility</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>October 2024</CardTitle>
                <CardDescription>Version 1.8.0</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">New Features</h3>
                <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                  <li>• Introduced team collaboration features</li>
                  <li>• Added support for custom webhooks</li>
                  <li>• Launched new integration templates</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-lg">Improvements</h3>
                <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                  <li>• Enhanced security features</li>
                  <li>• Improved error messages</li>
                  <li>• Updated third-party integrations</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
