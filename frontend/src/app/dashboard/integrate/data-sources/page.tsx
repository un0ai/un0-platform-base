"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { BetaPageWrapper, BetaRestrictedAction } from "@/components/beta-notice"
import {
  Database,
  Plus,
  Settings,
  FileText,
  Table,
  BarChart2,
  RefreshCw,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Link,
  Clock,
  Filter,
  Search,
  Boxes,
  Cloud
} from "lucide-react"

const dataSources = [
  { name: "Vector Database", type: "Database", status: "Connected", usage: 78 },
  { name: "Document Store", type: "Storage", status: "Connected", usage: 65 },
  { name: "Time Series DB", type: "Database", status: "Connected", usage: 45 },
  { name: "Object Storage", type: "Storage", status: "Connected", usage: 82 },
  { name: "Cache Layer", type: "Cache", status: "Connected", usage: 34 },
  { name: "Search Index", type: "Index", status: "Connected", usage: 56 }
]

export default function DataSourcesPage() {
  return (
    <div className="flex h-full flex-col space-y-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Data Sources</h2>
          <p className="text-muted-foreground">
            Manage your data connections and integrations
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
              <Plus className="mr-2 h-4 w-4" />
              Add Source
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
                  <TabsTrigger value="sources">Sources</TabsTrigger>
                  <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Sources</CardTitle>
                        <Database className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">18</div>
                        <p className="text-xs text-muted-foreground">
                          Across 6 categories
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Data Volume</CardTitle>
                        <Boxes className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">8.2 TB</div>
                        <p className="text-xs text-muted-foreground">
                          +1.2 TB this month
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Query Rate</CardTitle>
                        <Search className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">1.2K/s</div>
                        <p className="text-xs text-muted-foreground">
                          Peak in last hour
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Sync Status</CardTitle>
                        <RefreshCw className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">98%</div>
                        <p className="text-xs text-muted-foreground">
                          Sources in sync
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid gap-6 lg:grid-cols-2">
                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <CardTitle>Active Sources</CardTitle>
                        <CardDescription>
                          Currently connected data sources
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {dataSources.slice(0, 4).map((source, i) => (
                            <div key={i} className="space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <Database className="h-4 w-4 text-primary" />
                                  <p className="font-medium">{source.name}</p>
                                </div>
                                <Badge variant="outline" className="bg-green-50 text-green-700">
                                  {source.status}
                                </Badge>
                              </div>
                              <Progress value={source.usage} className="h-2" />
                              <p className="text-xs text-right text-muted-foreground">
                                {source.usage}% utilization
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>
                          Latest data source events
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="bg-green-500/20 p-2 rounded-full">
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                            </div>
                            <div className="flex-1 space-y-1">
                              <p className="text-sm font-medium">Sync Completed</p>
                              <p className="text-xs text-muted-foreground">Vector Database updated</p>
                            </div>
                            <p className="text-xs text-muted-foreground">5m ago</p>
                          </div>

                          <div className="flex items-center space-x-4">
                            <div className="bg-blue-500/20 p-2 rounded-full">
                              <RefreshCw className="h-4 w-4 text-blue-500" />
                            </div>
                            <div className="flex-1 space-y-1">
                              <p className="text-sm font-medium">Index Rebuild</p>
                              <p className="text-xs text-muted-foreground">Search index optimization</p>
                            </div>
                            <p className="text-xs text-muted-foreground">15m ago</p>
                          </div>

                          <div className="flex items-center space-x-4">
                            <div className="bg-yellow-500/20 p-2 rounded-full">
                              <AlertCircle className="h-4 w-4 text-yellow-500" />
                            </div>
                            <div className="flex-1 space-y-1">
                              <p className="text-sm font-medium">Storage Alert</p>
                              <p className="text-xs text-muted-foreground">Document store capacity at 80%</p>
                            </div>
                            <p className="text-xs text-muted-foreground">1h ago</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="sources" className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {dataSources.map((source, i) => (
                      <Card key={i} className="border-none shadow-md">
                        <CardHeader>
                          <div className="flex items-center space-x-2">
                            <Database className="h-5 w-5 text-primary" />
                            <CardTitle>{source.name}</CardTitle>
                          </div>
                          <CardDescription>{source.type}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <Badge variant="outline" className="bg-green-50 text-green-700">
                                {source.status}
                              </Badge>
                              <span className="text-sm text-muted-foreground">
                                {source.usage}% used
                              </span>
                            </div>
                            <Progress value={source.usage} className="h-2" />
                          </div>
                          <BetaRestrictedAction>
                            <Button variant="outline" className="w-full">
                              Configure
                            </Button>
                          </BetaRestrictedAction>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="monitoring" className="space-y-6">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>Performance Metrics</CardTitle>
                      <CardDescription>
                        Real-time monitoring of data sources
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="grid gap-4 md:grid-cols-2">
                          <Card className="border bg-card/50">
                            <CardHeader>
                              <div className="flex items-center space-x-2">
                                <Clock className="h-4 w-4 text-primary" />
                                <CardTitle className="text-base">Response Time</CardTitle>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold">45ms</div>
                              <p className="text-sm text-muted-foreground">Average latency</p>
                            </CardContent>
                          </Card>

                          <Card className="border bg-card/50">
                            <CardHeader>
                              <div className="flex items-center space-x-2">
                                <Filter className="h-4 w-4 text-primary" />
                                <CardTitle className="text-base">Query Performance</CardTitle>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold">98.5%</div>
                              <p className="text-sm text-muted-foreground">Success rate</p>
                            </CardContent>
                          </Card>
                        </div>

                        <div className="space-y-4">
                          {dataSources.slice(0, 3).map((source, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                              <div className="flex items-center space-x-4">
                                <div className="bg-primary/20 p-2 rounded-full">
                                  <Database className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                  <p className="font-medium">{source.name}</p>
                                  <p className="text-sm text-muted-foreground">
                                    {source.usage}% CPU | {Math.round(source.usage * 0.8)}% Memory
                                  </p>
                                </div>
                              </div>
                              <Badge variant="outline" className="bg-green-50 text-green-700">
                                Healthy
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="settings" className="space-y-6">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>Data Source Settings</CardTitle>
                      <CardDescription>
                        Configure your data source preferences
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <BetaRestrictedAction>
                          <Button variant="outline" className="w-full justify-start">
                            <Settings className="mr-2 h-4 w-4" />
                            Global Settings
                          </Button>
                        </BetaRestrictedAction>
                        <BetaRestrictedAction>
                          <Button variant="outline" className="w-full justify-start">
                            <Link className="mr-2 h-4 w-4" />
                            Connection Rules
                          </Button>
                        </BetaRestrictedAction>
                        <BetaRestrictedAction>
                          <Button variant="outline" className="w-full justify-start">
                            <AlertCircle className="mr-2 h-4 w-4" />
                            Alerts & Notifications
                          </Button>
                        </BetaRestrictedAction>
                      </div>
                    </CardContent>
                  </Card>

                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Data Source Health</AlertTitle>
                    <AlertDescription>
                      Monitor your data source health regularly and configure alerts for potential issues. Consider setting up redundancy for critical data sources.
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
