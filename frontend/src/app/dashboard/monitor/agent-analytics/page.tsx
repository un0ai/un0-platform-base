"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AgentAnalyticsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent dark:from-primary dark:to-primary/70">
          Agent Analytics
        </h1>
        <p className="text-lg text-foreground/80 dark:text-foreground/80 leading-relaxed">
          Analyze and optimize your AI agents' performance
        </p>
      </div>

      <Tabs defaultValue="performance" className="space-y-4">
        <TabsList>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Response Time</CardTitle>
                <CardDescription>Average agent response time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border-2 border-dashed border-muted-foreground/20 p-6 text-center">
                  <p className="text-sm text-muted-foreground">Coming Soon</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Accuracy</CardTitle>
                <CardDescription>Task completion accuracy</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border-2 border-dashed border-muted-foreground/20 p-6 text-center">
                  <p className="text-sm text-muted-foreground">Coming Soon</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Error Rate</CardTitle>
                <CardDescription>Task failure frequency</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border-2 border-dashed border-muted-foreground/20 p-6 text-center">
                  <p className="text-sm text-muted-foreground">Coming Soon</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="usage" className="space-y-4">
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle>Resource Usage</CardTitle>
              <CardDescription>Agent resource consumption</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                  <div>
                    <p className="font-medium">Compute Resources</p>
                    <p className="text-sm text-muted-foreground">CPU and memory usage</p>
                  </div>
                  <Badge>Coming Soon</Badge>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                  <div>
                    <p className="font-medium">API Calls</p>
                    <p className="text-sm text-muted-foreground">External API usage</p>
                  </div>
                  <Badge>Coming Soon</Badge>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                  <div>
                    <p className="font-medium">Storage</p>
                    <p className="text-sm text-muted-foreground">Data storage usage</p>
                  </div>
                  <Badge>Coming Soon</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights" className="space-y-4">
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle>Performance Insights</CardTitle>
              <CardDescription>AI-driven performance analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                  <div>
                    <p className="font-medium">Optimization Suggestions</p>
                    <p className="text-sm text-muted-foreground">Performance improvement recommendations</p>
                  </div>
                  <Badge>Coming Soon</Badge>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                  <div>
                    <p className="font-medium">Usage Patterns</p>
                    <p className="text-sm text-muted-foreground">Agent usage analysis</p>
                  </div>
                  <Badge>Coming Soon</Badge>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                  <div>
                    <p className="font-medium">Anomaly Detection</p>
                    <p className="text-sm text-muted-foreground">Unusual behavior detection</p>
                  </div>
                  <Badge>Coming Soon</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
