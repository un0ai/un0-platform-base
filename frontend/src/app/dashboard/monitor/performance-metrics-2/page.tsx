"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { BetaPageWrapper, BetaRestrictedAction } from "@/components/beta-notice"
import {
  BarChart2,
  LineChart,
  Settings,
  Bot,
  Clock,
  Cpu,
  Memory,
  Network,
  RefreshCw,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Zap,
  ArrowUp,
  ArrowDown,
  Activity
} from "lucide-react"

const metrics = [
  { name: "Response Time", value: "45ms", change: "-5ms", trend: "down" },
  { name: "Throughput", value: "1.2K/s", change: "+200/s", trend: "up" },
  { name: "Error Rate", value: "0.1%", change: "-0.02%", trend: "down" },
  { name: "CPU Usage", value: "45%", change: "+5%", trend: "up" },
  { name: "Memory Usage", value: "62%", change: "+3%", trend: "up" },
  { name: "Network I/O", value: "850MB/s", change: "+50MB/s", trend: "up" }
]

export default function PerformanceMetricsPage() {
  return (
    <div className="flex h-full flex-col space-y-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Performance Metrics</h2>
          <p className="text-muted-foreground">
            Monitor and analyze your system's performance metrics
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <BetaRestrictedAction>
            <Button variant="outline" size="sm">
              <Settings className="mr-2 h-4 w-4" />
              Configure
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
                  <TabsTrigger value="resources">Resources</TabsTrigger>
                  <TabsTrigger value="latency">Latency</TabsTrigger>
                  <TabsTrigger value="trends">Trends</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">System Health</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-green-600">98.5%</div>
                        <p className="text-xs text-muted-foreground">
                          Optimal performance
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
                          -5ms from average
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Error Rate</CardTitle>
                        <AlertCircle className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">0.1%</div>
                        <p className="text-xs text-muted-foreground">
                          Within threshold
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Throughput</CardTitle>
                        <Zap className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">1.2K/s</div>
                        <p className="text-xs text-muted-foreground">
                          Peak performance
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid gap-6 lg:grid-cols-2">
                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <CardTitle>Resource Utilization</CardTitle>
                        <CardDescription>
                          Current system resource usage
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <Cpu className="h-4 w-4 text-primary" />
                                <p className="font-medium">CPU Usage</p>
                              </div>
                              <span className="text-sm">45%</span>
                            </div>
                            <Progress value={45} className="h-2" />
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <Memory className="h-4 w-4 text-primary" />
                                <p className="font-medium">Memory Usage</p>
                              </div>
                              <span className="text-sm">62%</span>
                            </div>
                            <Progress value={62} className="h-2" />
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <Network className="h-4 w-4 text-primary" />
                                <p className="font-medium">Network I/O</p>
                              </div>
                              <span className="text-sm">850MB/s</span>
                            </div>
                            <Progress value={85} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <CardTitle>Performance Trends</CardTitle>
                        <CardDescription>
                          Key metrics over the last hour
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {metrics.map((metric, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                              <div className="flex items-center space-x-4">
                                <div className={`p-2 rounded-full ${
                                  metric.trend === "up" ? "bg-green-500/20" : "bg-blue-500/20"
                                }`}>
                                  {metric.trend === "up" ? (
                                    <ArrowUp className="h-4 w-4 text-green-500" />
                                  ) : (
                                    <ArrowDown className="h-4 w-4 text-blue-500" />
                                  )}
                                </div>
                                <div>
                                  <p className="font-medium">{metric.name}</p>
                                  <p className="text-sm text-muted-foreground">{metric.value}</p>
                                </div>
                              </div>
                              <Badge variant="outline" className={
                                metric.trend === "up" ? "bg-green-50 text-green-700" : "bg-blue-50 text-blue-700"
                              }>
                                {metric.change}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="resources" className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Cpu className="h-5 w-5 text-primary" />
                          <CardTitle>Compute Resources</CardTitle>
                        </div>
                        <CardDescription>CPU and memory utilization</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {[
                          { name: "API Servers", cpu: 45, memory: 62 },
                          { name: "Model Servers", cpu: 78, memory: 85 },
                          { name: "Database Cluster", cpu: 35, memory: 55 }
                        ].map((resource, i) => (
                          <div key={i} className="space-y-2">
                            <p className="font-medium">{resource.name}</p>
                            <div className="space-y-1">
                              <div className="flex items-center justify-between text-sm">
                                <span>CPU</span>
                                <span>{resource.cpu}%</span>
                              </div>
                              <Progress value={resource.cpu} className="h-1" />
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center justify-between text-sm">
                                <span>Memory</span>
                                <span>{resource.memory}%</span>
                              </div>
                              <Progress value={resource.memory} className="h-1" />
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Network className="h-5 w-5 text-primary" />
                          <CardTitle>Network Resources</CardTitle>
                        </div>
                        <CardDescription>Network throughput and latency</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {[
                          { name: "Ingress Traffic", value: "850MB/s", trend: "up" },
                          { name: "Egress Traffic", value: "620MB/s", trend: "up" },
                          { name: "Packet Loss", value: "0.01%", trend: "down" }
                        ].map((metric, i) => (
                          <div key={i} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                            <div>
                              <p className="font-medium">{metric.name}</p>
                              <p className="text-sm text-muted-foreground">{metric.value}</p>
                            </div>
                            {metric.trend === "up" ? (
                              <ArrowUp className="h-4 w-4 text-green-500" />
                            ) : (
                              <ArrowDown className="h-4 w-4 text-blue-500" />
                            )}
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="latency" className="space-y-6">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>Latency Analysis</CardTitle>
                      <CardDescription>
                        Response time metrics across services
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {[
                          { name: "API Gateway", p50: "35ms", p95: "85ms", p99: "150ms" },
                          { name: "Model Inference", p50: "120ms", p95: "250ms", p99: "450ms" },
                          { name: "Database Queries", p50: "15ms", p95: "45ms", p99: "75ms" }
                        ].map((service, i) => (
                          <div key={i} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <p className="font-medium">{service.name}</p>
                              <div className="flex items-center space-x-4">
                                <Badge variant="outline">P50: {service.p50}</Badge>
                                <Badge variant="outline">P95: {service.p95}</Badge>
                                <Badge variant="outline">P99: {service.p99}</Badge>
                              </div>
                            </div>
                            <Progress value={75} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="trends" className="space-y-6">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>Performance Trends</CardTitle>
                      <CardDescription>
                        Historical performance analysis
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="grid gap-4 md:grid-cols-2">
                          <Card className="border bg-card/50">
                            <CardHeader>
                              <div className="flex items-center space-x-2">
                                <LineChart className="h-4 w-4 text-primary" />
                                <CardTitle className="text-base">Response Time</CardTitle>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm text-muted-foreground">Current</span>
                                  <span className="font-medium">45ms</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-sm text-muted-foreground">24h Average</span>
                                  <span className="font-medium">50ms</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-sm text-muted-foreground">7d Average</span>
                                  <span className="font-medium">48ms</span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="border bg-card/50">
                            <CardHeader>
                              <div className="flex items-center space-x-2">
                                <BarChart2 className="h-4 w-4 text-primary" />
                                <CardTitle className="text-base">Throughput</CardTitle>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm text-muted-foreground">Current</span>
                                  <span className="font-medium">1.2K/s</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-sm text-muted-foreground">24h Average</span>
                                  <span className="font-medium">950/s</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-sm text-muted-foreground">7d Average</span>
                                  <span className="font-medium">880/s</span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Alert>
                    <Activity className="h-4 w-4" />
                    <AlertTitle>Performance Insights</AlertTitle>
                    <AlertDescription>
                      System performance has improved by 10% over the last 7 days. Consider reviewing resource allocation for further optimization.
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
