"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PerformanceMetricsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent dark:from-primary dark:to-primary/70">
          Performance Metrics
        </h1>
        <p className="text-lg text-foreground/80 dark:text-foreground/80 leading-relaxed">
          Monitor and analyze system performance
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="agents">Agents</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>System Load</CardTitle>
                <CardDescription>Current system utilization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border-2 border-dashed border-muted-foreground/20 p-6 text-center">
                  <p className="text-sm text-muted-foreground">Coming Soon</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Response Time</CardTitle>
                <CardDescription>Average response latency</CardDescription>
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
                <CardDescription>System error frequency</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border-2 border-dashed border-muted-foreground/20 p-6 text-center">
                  <p className="text-sm text-muted-foreground">Coming Soon</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="agents" className="space-y-4">
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle>Agent Performance</CardTitle>
              <CardDescription>Individual agent metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                  <div>
                    <p className="font-medium">Agent Response Time</p>
                    <p className="text-sm text-muted-foreground">Average processing time</p>
                  </div>
                  <Badge>Coming Soon</Badge>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                  <div>
                    <p className="font-medium">Agent Accuracy</p>
                    <p className="text-sm text-muted-foreground">Task completion accuracy</p>
                  </div>
                  <Badge>Coming Soon</Badge>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                  <div>
                    <p className="font-medium">Agent Utilization</p>
                    <p className="text-sm text-muted-foreground">Resource usage patterns</p>
                  </div>
                  <Badge>Coming Soon</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle>Resource Utilization</CardTitle>
              <CardDescription>System resource metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                  <div>
                    <p className="font-medium">CPU Usage</p>
                    <p className="text-sm text-muted-foreground">Processor utilization</p>
                  </div>
                  <Badge>Coming Soon</Badge>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                  <div>
                    <p className="font-medium">Memory Usage</p>
                    <p className="text-sm text-muted-foreground">RAM utilization</p>
                  </div>
                  <Badge>Coming Soon</Badge>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                  <div>
                    <p className="font-medium">Network Usage</p>
                    <p className="text-sm text-muted-foreground">Bandwidth utilization</p>
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
