"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LogsAlertsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent dark:from-primary dark:to-primary/70">
          Logs & Alerts
        </h1>
        <p className="text-lg text-foreground/80 dark:text-foreground/80 leading-relaxed">
          Monitor system logs and manage alerts
        </p>
      </div>

      <Tabs defaultValue="logs" className="space-y-4">
        <TabsList>
          <TabsTrigger value="logs">System Logs</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="logs" className="space-y-4">
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle>Log Viewer</CardTitle>
              <CardDescription>View and analyze system logs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                  <div>
                    <p className="font-medium">System Logs</p>
                    <p className="text-sm text-muted-foreground">General system events</p>
                  </div>
                  <Badge>Coming Soon</Badge>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                  <div>
                    <p className="font-medium">Error Logs</p>
                    <p className="text-sm text-muted-foreground">System errors and exceptions</p>
                  </div>
                  <Badge>Coming Soon</Badge>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                  <div>
                    <p className="font-medium">Access Logs</p>
                    <p className="text-sm text-muted-foreground">User access and authentication</p>
                  </div>
                  <Badge>Coming Soon</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Active Alerts</CardTitle>
                <CardDescription>Current system alerts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border-2 border-dashed border-muted-foreground/20 p-6 text-center">
                  <p className="text-sm text-muted-foreground">No active alerts</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Alert History</CardTitle>
                <CardDescription>Past system alerts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border-2 border-dashed border-muted-foreground/20 p-6 text-center">
                  <p className="text-sm text-muted-foreground">Coming Soon</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle>Alert Configuration</CardTitle>
              <CardDescription>Configure alert settings and notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                  <div>
                    <p className="font-medium">Notification Channels</p>
                    <p className="text-sm text-muted-foreground">Email, Slack, webhook configurations</p>
                  </div>
                  <Badge>Coming Soon</Badge>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                  <div>
                    <p className="font-medium">Alert Rules</p>
                    <p className="text-sm text-muted-foreground">Configure alert conditions</p>
                  </div>
                  <Badge>Coming Soon</Badge>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                  <div>
                    <p className="font-medium">Alert Severity</p>
                    <p className="text-sm text-muted-foreground">Define alert priority levels</p>
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
