"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { BetaPageWrapper, BetaRestrictedAction } from "@/components/beta-notice"
import {
  AlertCircle,
  Bell,
  Search,
  Filter,
  RefreshCw,
  Settings,
  Clock,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  FileText,
  Activity,
  Terminal
} from "lucide-react"

const logEntries = [
  {
    timestamp: "2024-12-22 16:30:45",
    level: "info",
    service: "API Gateway",
    message: "Request processed successfully"
  },
  {
    timestamp: "2024-12-22 16:30:30",
    level: "warning",
    service: "Model Server",
    message: "High memory usage detected"
  },
  {
    timestamp: "2024-12-22 16:30:15",
    level: "error",
    service: "Database",
    message: "Connection timeout"
  }
]

const alerts = [
  {
    id: "ALT001",
    severity: "critical",
    message: "Database connection failure",
    timestamp: "5 minutes ago"
  },
  {
    id: "ALT002",
    severity: "warning",
    message: "High CPU usage detected",
    timestamp: "10 minutes ago"
  },
  {
    id: "ALT003",
    severity: "info",
    message: "System backup completed",
    timestamp: "15 minutes ago"
  }
]

const getSeverityColor = (severity: string) => {
  switch (severity.toLowerCase()) {
    case "critical":
      return "text-red-500"
    case "warning":
      return "text-yellow-500"
    case "info":
      return "text-blue-500"
    default:
      return "text-gray-500"
  }
}

const getSeverityIcon = (severity: string) => {
  switch (severity.toLowerCase()) {
    case "critical":
      return <XCircle className="h-4 w-4 text-red-500" />
    case "warning":
      return <AlertTriangle className="h-4 w-4 text-yellow-500" />
    case "info":
      return <CheckCircle2 className="h-4 w-4 text-blue-500" />
    default:
      return <AlertCircle className="h-4 w-4 text-gray-500" />
  }
}

export default function LogsAlertsPage() {
  return (
    <div className="flex h-full flex-col space-y-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Logs & Alerts</h2>
          <p className="text-muted-foreground">
            Monitor system logs and manage alerts
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <BetaRestrictedAction>
            <Button variant="outline" size="sm">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </BetaRestrictedAction>
          <BetaRestrictedAction>
            <Button variant="default" size="sm">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
          </BetaRestrictedAction>
        </div>
      </div>

      <BetaPageWrapper>
        <div className="relative">
          <div className="absolute inset-0 bg-yellow-500/5 dark:bg-yellow-400/5 border-2 border-yellow-500/20 dark:border-yellow-400/20 rounded-lg" />
          <div className="relative">
            <div className="flex-1 space-y-6 p-8 pt-6">
              <Tabs defaultValue="overview" className="space-y-6">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="logs">Logs</TabsTrigger>
                  <TabsTrigger value="alerts">Alerts</TabsTrigger>
                  <TabsTrigger value="settings">Alert Settings</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
                        <Bell className="h-4 w-4 text-red-500" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">5</div>
                        <p className="text-xs text-muted-foreground">
                          2 critical, 3 warnings
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Log Volume</CardTitle>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">2.5K</div>
                        <p className="text-xs text-muted-foreground">
                          Last hour
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Error Rate</CardTitle>
                        <AlertTriangle className="h-4 w-4 text-yellow-500" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">0.5%</div>
                        <p className="text-xs text-muted-foreground">
                          Last 24 hours
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Response Time</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">45ms</div>
                        <p className="text-xs text-muted-foreground">
                          Average
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Bell className="h-5 w-5 text-primary" />
                          <CardTitle>Recent Alerts</CardTitle>
                        </div>
                        <CardDescription>Latest system alerts and notifications</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {alerts.map((alert, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-lg border">
                              <div className="flex items-center space-x-4">
                                {getSeverityIcon(alert.severity)}
                                <div>
                                  <p className="font-medium">{alert.message}</p>
                                  <p className="text-sm text-muted-foreground">
                                    {alert.timestamp}
                                  </p>
                                </div>
                              </div>
                              <Badge
                                variant={alert.severity === "critical" ? "destructive" : "outline"}
                              >
                                {alert.severity}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Terminal className="h-5 w-5 text-primary" />
                          <CardTitle>Recent Logs</CardTitle>
                        </div>
                        <CardDescription>Latest system logs</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {logEntries.map((log, i) => (
                            <div key={i} className="space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <Badge variant="outline">{log.level}</Badge>
                                  <span className="text-sm font-medium">{log.service}</span>
                                </div>
                                <span className="text-sm text-muted-foreground">
                                  {log.timestamp}
                                </span>
                              </div>
                              <p className="text-sm">{log.message}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="logs" className="space-y-6">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <FileText className="h-5 w-5 text-primary" />
                          <CardTitle>System Logs</CardTitle>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Search className="mr-2 h-4 w-4" />
                            Search
                          </Button>
                          <Button variant="outline" size="sm">
                            <Filter className="mr-2 h-4 w-4" />
                            Filter
                          </Button>
                        </div>
                      </div>
                      <CardDescription>Detailed system logs and events</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {Array.from({ length: 10 }).map((_, i) => (
                          <div key={i} className="flex items-center space-x-4 p-4 rounded-lg border">
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <Badge variant="outline">INFO</Badge>
                                  <span className="font-medium">System</span>
                                </div>
                                <span className="text-sm text-muted-foreground">
                                  2024-12-22 16:30:{45 - i}
                                </span>
                              </div>
                              <p className="text-sm mt-1">
                                {i % 2 === 0
                                  ? "Request processed successfully"
                                  : "System health check completed"}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="alerts" className="space-y-6">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Bell className="h-5 w-5 text-primary" />
                          <CardTitle>Alert Management</CardTitle>
                        </div>
                        <Button variant="outline" size="sm">
                          <Filter className="mr-2 h-4 w-4" />
                          Filter Alerts
                        </Button>
                      </div>
                      <CardDescription>Manage and respond to system alerts</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div key={i} className="p-4 rounded-lg border">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                {getSeverityIcon(i % 3 === 0 ? "critical" : i % 3 === 1 ? "warning" : "info")}
                                <div>
                                  <p className="font-medium">
                                    {i % 3 === 0
                                      ? "High CPU Usage Alert"
                                      : i % 3 === 1
                                      ? "Memory Usage Warning"
                                      : "System Update Available"}
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    {`${5 * (i + 1)} minutes ago`}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Badge
                                  variant={i % 3 === 0 ? "destructive" : "outline"}
                                >
                                  {i % 3 === 0 ? "Critical" : i % 3 === 1 ? "Warning" : "Info"}
                                </Badge>
                                <Button variant="outline" size="sm">
                                  Acknowledge
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="settings" className="space-y-6">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <Settings className="h-5 w-5 text-primary" />
                        <CardTitle>Alert Configuration</CardTitle>
                      </div>
                      <CardDescription>Configure alert rules and notifications</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {[
                          {
                            category: "System Alerts",
                            rules: [
                              { name: "CPU Usage", threshold: "90%", status: "enabled" },
                              { name: "Memory Usage", threshold: "85%", status: "enabled" },
                              { name: "Disk Space", threshold: "95%", status: "enabled" }
                            ]
                          },
                          {
                            category: "Application Alerts",
                            rules: [
                              { name: "Error Rate", threshold: "1%", status: "enabled" },
                              { name: "Response Time", threshold: "200ms", status: "enabled" },
                              { name: "Failed Requests", threshold: "5/min", status: "enabled" }
                            ]
                          }
                        ].map((category, i) => (
                          <div key={i} className="space-y-4">
                            <h3 className="font-medium">{category.category}</h3>
                            <div className="space-y-2">
                              {category.rules.map((rule, j) => (
                                <div key={j} className="flex items-center justify-between p-4 rounded-lg border">
                                  <div>
                                    <p className="font-medium">{rule.name}</p>
                                    <p className="text-sm text-muted-foreground">
                                      Threshold: {rule.threshold}
                                    </p>
                                  </div>
                                  <Badge variant="outline">{rule.status}</Badge>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </BetaPageWrapper>
    </div>
  )
}
