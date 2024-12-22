"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { BetaPageWrapper, BetaRestrictedAction } from "@/components/beta-notice"
import {
  Server,
  Cloud,
  Database,
  HardDrive,
  Network,
  Cpu,
  Activity,
  Settings,
  AlertCircle,
  BarChart2,
  RefreshCw,
  Shield,
  Zap,
  CheckCircle2,
  XCircle
} from "lucide-react"

export default function InfrastructurePage() {
  return (
    <div className="flex h-full flex-col space-y-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Infrastructure</h2>
          <p className="text-muted-foreground">
            Manage and monitor your AI infrastructure resources
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
              <Server className="mr-2 h-4 w-4" />
              Add Resource
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
                  <TabsTrigger value="compute">Compute</TabsTrigger>
                  <TabsTrigger value="storage">Storage</TabsTrigger>
                  <TabsTrigger value="network">Network</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">CPU Usage</CardTitle>
                        <Cpu className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">67%</div>
                        <Progress value={67} className="h-2 mt-2" />
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Memory</CardTitle>
                        <HardDrive className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">82%</div>
                        <Progress value={82} className="h-2 mt-2" />
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Storage</CardTitle>
                        <HardDrive className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">45%</div>
                        <Progress value={45} className="h-2 mt-2" />
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Network</CardTitle>
                        <Network className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">92%</div>
                        <Progress value={92} className="h-2 mt-2" />
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid gap-6 lg:grid-cols-2">
                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <CardTitle>Resource Health</CardTitle>
                        <CardDescription>
                          Status of infrastructure components
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                            <div className="flex items-center space-x-4">
                              <div className="bg-green-500/20 p-2 rounded-full">
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                              </div>
                              <div>
                                <p className="font-medium">Model Servers</p>
                                <p className="text-sm text-muted-foreground">All systems operational</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="bg-green-50 text-green-700">Healthy</Badge>
                          </div>

                          <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                            <div className="flex items-center space-x-4">
                              <div className="bg-yellow-500/20 p-2 rounded-full">
                                <AlertCircle className="h-4 w-4 text-yellow-500" />
                              </div>
                              <div>
                                <p className="font-medium">Database Cluster</p>
                                <p className="text-sm text-muted-foreground">High load detected</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="bg-yellow-50 text-yellow-700">Warning</Badge>
                          </div>

                          <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                            <div className="flex items-center space-x-4">
                              <div className="bg-green-500/20 p-2 rounded-full">
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                              </div>
                              <div>
                                <p className="font-medium">API Gateway</p>
                                <p className="text-sm text-muted-foreground">Normal operation</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="bg-green-50 text-green-700">Healthy</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <CardTitle>Recent Events</CardTitle>
                        <CardDescription>
                          Latest infrastructure events and alerts
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="bg-blue-500/20 p-2 rounded-full">
                              <RefreshCw className="h-4 w-4 text-blue-500" />
                            </div>
                            <div className="flex-1 space-y-1">
                              <p className="text-sm font-medium">Auto-scaling Event</p>
                              <p className="text-xs text-muted-foreground">Added 2 compute nodes</p>
                            </div>
                            <p className="text-xs text-muted-foreground">5m ago</p>
                          </div>

                          <div className="flex items-center space-x-4">
                            <div className="bg-yellow-500/20 p-2 rounded-full">
                              <AlertCircle className="h-4 w-4 text-yellow-500" />
                            </div>
                            <div className="flex-1 space-y-1">
                              <p className="text-sm font-medium">High Memory Usage</p>
                              <p className="text-xs text-muted-foreground">Memory usage above 80%</p>
                            </div>
                            <p className="text-xs text-muted-foreground">15m ago</p>
                          </div>

                          <div className="flex items-center space-x-4">
                            <div className="bg-green-500/20 p-2 rounded-full">
                              <Shield className="h-4 w-4 text-green-500" />
                            </div>
                            <div className="flex-1 space-y-1">
                              <p className="text-sm font-medium">Security Update</p>
                              <p className="text-xs text-muted-foreground">Patches applied successfully</p>
                            </div>
                            <p className="text-xs text-muted-foreground">1h ago</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="compute" className="space-y-6">
                  <div className="grid gap-6">
                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <CardTitle>Compute Resources</CardTitle>
                        <CardDescription>
                          Manage your compute instances and clusters
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            { name: "Model Training Cluster", type: "GPU Cluster", status: "Active", usage: 78 },
                            { name: "Inference Servers", type: "CPU Cluster", status: "Active", usage: 65 },
                            { name: "Development Environment", type: "General Purpose", status: "Active", usage: 45 },
                          ].map((resource, i) => (
                            <div key={i} className="space-y-2">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="font-medium">{resource.name}</p>
                                  <p className="text-sm text-muted-foreground">{resource.type}</p>
                                </div>
                                <Badge variant="outline" className={
                                  resource.status === "Active" ? "bg-green-50 text-green-700" : "bg-yellow-50 text-yellow-700"
                                }>{resource.status}</Badge>
                              </div>
                              <Progress value={resource.usage} className="h-2" />
                              <p className="text-xs text-right text-muted-foreground">{resource.usage}% utilization</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="storage" className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Database className="h-5 w-5 text-primary" />
                          <CardTitle>Database Storage</CardTitle>
                        </div>
                        <CardDescription>
                          Database clusters and storage volumes
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">Primary Cluster</p>
                            <span className="text-sm">234.5 GB / 500 GB</span>
                          </div>
                          <Progress value={47} className="h-2" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">Replica Set</p>
                            <span className="text-sm">198.2 GB / 500 GB</span>
                          </div>
                          <Progress value={40} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <HardDrive className="h-5 w-5 text-primary" />
                          <CardTitle>Object Storage</CardTitle>
                        </div>
                        <CardDescription>
                          Cloud storage buckets and volumes
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">Model Artifacts</p>
                            <span className="text-sm">1.2 TB / 2 TB</span>
                          </div>
                          <Progress value={60} className="h-2" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">Training Data</p>
                            <span className="text-sm">3.8 TB / 5 TB</span>
                          </div>
                          <Progress value={76} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="network" className="space-y-6">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>Network Overview</CardTitle>
                      <CardDescription>
                        Network performance and connectivity status
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="grid gap-4 md:grid-cols-2">
                          <Card className="border bg-card/50">
                            <CardHeader>
                              <div className="flex items-center space-x-2">
                                <Zap className="h-4 w-4 text-primary" />
                                <CardTitle className="text-base">Latency</CardTitle>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold">23ms</div>
                              <p className="text-sm text-muted-foreground">Average response time</p>
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
                              <div className="text-2xl font-bold">1.2 GB/s</div>
                              <p className="text-sm text-muted-foreground">Current transfer rate</p>
                            </CardContent>
                          </Card>
                        </div>

                        <div className="space-y-4">
                          {[
                            { name: "API Gateway", status: "Online", latency: "18ms" },
                            { name: "Load Balancer", status: "Online", latency: "12ms" },
                            { name: "CDN", status: "Online", latency: "35ms" },
                          ].map((service, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                              <div className="flex items-center space-x-4">
                                <div className="bg-green-500/20 p-2 rounded-full">
                                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                                </div>
                                <div>
                                  <p className="font-medium">{service.name}</p>
                                  <p className="text-sm text-muted-foreground">Latency: {service.latency}</p>
                                </div>
                              </div>
                              <Badge variant="outline" className="bg-green-50 text-green-700">
                                {service.status}
                              </Badge>
                            </div>
                          ))}
                        </div>
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
