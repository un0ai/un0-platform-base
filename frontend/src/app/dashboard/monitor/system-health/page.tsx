"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { BetaPageWrapper, BetaRestrictedAction } from "@/components/beta-notice"
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Activity,
  Server,
  Database,
  Network,
  RefreshCw,
  Settings,
  Shield,
  Clock,
  HardDrive,
  Cpu
} from "lucide-react"

const systemComponents = [
  { name: "API Gateway", status: "healthy", uptime: "99.99%", load: 42 },
  { name: "Database Cluster", status: "healthy", uptime: "99.95%", load: 65 },
  { name: "Model Servers", status: "warning", uptime: "99.90%", load: 78 },
  { name: "Cache Layer", status: "healthy", uptime: "99.99%", load: 45 },
  { name: "Storage Service", status: "healthy", uptime: "99.98%", load: 55 }
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "healthy":
      return <CheckCircle2 className="h-5 w-5 text-green-500" />
    case "warning":
      return <AlertTriangle className="h-5 w-5 text-yellow-500" />
    case "critical":
      return <XCircle className="h-5 w-5 text-red-500" />
    default:
      return <Activity className="h-5 w-5 text-gray-500" />
  }
}

export default function SystemHealthPage() {
  return (
    <div className="flex h-full flex-col space-y-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">System Health</h2>
          <p className="text-muted-foreground">
            Monitor and manage your system's health and performance
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
                  <TabsTrigger value="components">Components</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                  <TabsTrigger value="diagnostics">Diagnostics</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Overall Health</CardTitle>
                        <Activity className="h-4 w-4 text-green-500" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-green-600">98.5%</div>
                        <p className="text-xs text-muted-foreground">
                          All systems operational
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Uptime</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">99.99%</div>
                        <p className="text-xs text-muted-foreground">
                          Last 30 days
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Incidents</CardTitle>
                        <AlertTriangle className="h-4 w-4 text-yellow-500" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">1</div>
                        <p className="text-xs text-muted-foreground">
                          Minor severity
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">System Load</CardTitle>
                        <Cpu className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">65%</div>
                        <p className="text-xs text-muted-foreground">
                          Normal range
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {systemComponents.map((component, index) => (
                      <Card key={index} className="border-none shadow-md">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(component.status)}
                            <CardTitle className="text-sm font-medium">
                              {component.name}
                            </CardTitle>
                          </div>
                          <Badge
                            variant={component.status === "healthy" ? "default" : "destructive"}
                          >
                            {component.status}
                          </Badge>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Uptime</span>
                              <span>{component.uptime}</span>
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Load</span>
                                <span>{component.load}%</span>
                              </div>
                              <Progress value={component.load} className="h-1" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="components" className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Server className="h-5 w-5 text-primary" />
                          <CardTitle>Infrastructure Components</CardTitle>
                        </div>
                        <CardDescription>Server and service health status</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {[
                          { name: "Load Balancer", status: "healthy", metric: "Response: 12ms" },
                          { name: "API Servers", status: "healthy", metric: "CPU: 45%" },
                          { name: "Worker Nodes", status: "warning", metric: "Memory: 85%" }
                        ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between p-2 rounded-lg border">
                            <div className="flex items-center space-x-2">
                              {getStatusIcon(item.status)}
                              <span className="font-medium">{item.name}</span>
                            </div>
                            <Badge variant="outline">{item.metric}</Badge>
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Database className="h-5 w-5 text-primary" />
                          <CardTitle>Data Components</CardTitle>
                        </div>
                        <CardDescription>Database and storage health</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {[
                          { name: "Primary Database", status: "healthy", metric: "Latency: 5ms" },
                          { name: "Replica Set", status: "healthy", metric: "Sync: 99.9%" },
                          { name: "Object Storage", status: "healthy", metric: "I/O: Normal" }
                        ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between p-2 rounded-lg border">
                            <div className="flex items-center space-x-2">
                              {getStatusIcon(item.status)}
                              <span className="font-medium">{item.name}</span>
                            </div>
                            <Badge variant="outline">{item.metric}</Badge>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="security" className="space-y-6">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <Shield className="h-5 w-5 text-primary" />
                        <CardTitle>Security Status</CardTitle>
                      </div>
                      <CardDescription>System security and compliance overview</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid gap-4 md:grid-cols-2">
                        {[
                          { name: "SSL/TLS Status", status: "Valid", expiry: "60 days" },
                          { name: "Firewall Rules", status: "Active", lastUpdate: "2 days ago" },
                          { name: "Access Control", status: "Enforced", lastAudit: "1 day ago" },
                          { name: "Data Encryption", status: "Enabled", algorithm: "AES-256" }
                        ].map((item, i) => (
                          <div key={i} className="p-4 rounded-lg border">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-medium">{item.name}</h3>
                              <Badge variant="outline">{item.status}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {Object.values(item)[2]}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="diagnostics" className="space-y-6">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <Activity className="h-5 w-5 text-primary" />
                        <CardTitle>System Diagnostics</CardTitle>
                      </div>
                      <CardDescription>Real-time system diagnostics and health checks</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { name: "Memory Usage", value: "65%", status: "normal" },
                          { name: "CPU Load", value: "45%", status: "normal" },
                          { name: "Disk I/O", value: "120MB/s", status: "normal" },
                          { name: "Network Latency", value: "12ms", status: "normal" }
                        ].map((metric, i) => (
                          <div key={i} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{metric.name}</span>
                              <Badge variant="outline">{metric.value}</Badge>
                            </div>
                            <Progress value={parseInt(metric.value)} className="h-1" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Alert>
                    <Activity className="h-4 w-4" />
                    <AlertTitle>System Status</AlertTitle>
                    <AlertDescription>
                      All diagnostic checks are passing. System is operating within normal parameters.
                    </AlertDescription>
                  </Alert>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </BetaPageWrapper>
    </div>
  )
}
