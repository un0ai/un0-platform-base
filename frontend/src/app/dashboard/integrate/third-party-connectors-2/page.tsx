"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { BetaPageWrapper, BetaRestrictedAction } from "@/components/beta-notice"
import {
  Plug,
  Plus,
  Settings,
  Bot,
  Database,
  MessageSquare,
  Workflow,
  Network,
  BarChart2,
  RefreshCw,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Boxes,
  Cloud
} from "lucide-react"

const popularConnectors = [
  { name: "LangChain", category: "AI Framework", status: "Connected", icon: Bot },
  { name: "LangSmith", category: "Monitoring", status: "Connected", icon: BarChart2 },
  { name: "LangFuse", category: "Analytics", status: "Available", icon: BarChart2 },
  { name: "Flowise", category: "Workflow", status: "Available", icon: Workflow },
  { name: "VectorShift", category: "Vector DB", status: "Connected", icon: Database },
  { name: "n8n", category: "Automation", status: "Available", icon: Workflow },
  { name: "Make.com", category: "Integration", status: "Available", icon: Network },
  { name: "Zapier", category: "Automation", status: "Connected", icon: Workflow }
]

export default function ThirdPartyConnectorsPage() {
  return (
    <div className="flex h-full flex-col space-y-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Third-Party Connectors</h2>
          <p className="text-muted-foreground">
            Connect and manage integrations with external services and platforms
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
              Add Connector
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
                  <TabsTrigger value="connectors">Connectors</TabsTrigger>
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Connectors</CardTitle>
                        <Plug className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">24</div>
                        <p className="text-xs text-muted-foreground">
                          +3 this month
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Connections</CardTitle>
                        <Network className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">18</div>
                        <p className="text-xs text-muted-foreground">
                          95% uptime
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Data Processed</CardTitle>
                        <Database className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">2.4 TB</div>
                        <p className="text-xs text-muted-foreground">
                          +12% from last week
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">API Calls</CardTitle>
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">845K</div>
                        <p className="text-xs text-muted-foreground">
                          Last 30 days
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid gap-6 lg:grid-cols-2">
                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <CardTitle>Popular Connectors</CardTitle>
                        <CardDescription>
                          Most used third-party integrations
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {popularConnectors.slice(0, 4).map((connector, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                              <div className="flex items-center space-x-4">
                                <div className="bg-primary/20 p-2 rounded-full">
                                  {React.createElement(connector.icon, { className: "h-4 w-4 text-primary" })}
                                </div>
                                <div>
                                  <p className="font-medium">{connector.name}</p>
                                  <p className="text-sm text-muted-foreground">{connector.category}</p>
                                </div>
                              </div>
                              <Badge variant="outline" className={
                                connector.status === "Connected" ? "bg-green-50 text-green-700" : "bg-blue-50 text-blue-700"
                              }>
                                {connector.status}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>
                          Latest connector events and updates
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="bg-green-500/20 p-2 rounded-full">
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                            </div>
                            <div className="flex-1 space-y-1">
                              <p className="text-sm font-medium">LangChain Connection</p>
                              <p className="text-xs text-muted-foreground">Successfully authenticated</p>
                            </div>
                            <p className="text-xs text-muted-foreground">5m ago</p>
                          </div>

                          <div className="flex items-center space-x-4">
                            <div className="bg-blue-500/20 p-2 rounded-full">
                              <RefreshCw className="h-4 w-4 text-blue-500" />
                            </div>
                            <div className="flex-1 space-y-1">
                              <p className="text-sm font-medium">VectorShift Sync</p>
                              <p className="text-xs text-muted-foreground">Data synchronization in progress</p>
                            </div>
                            <p className="text-xs text-muted-foreground">15m ago</p>
                          </div>

                          <div className="flex items-center space-x-4">
                            <div className="bg-yellow-500/20 p-2 rounded-full">
                              <AlertCircle className="h-4 w-4 text-yellow-500" />
                            </div>
                            <div className="flex-1 space-y-1">
                              <p className="text-sm font-medium">API Rate Limit</p>
                              <p className="text-xs text-muted-foreground">Approaching quota limit</p>
                            </div>
                            <p className="text-xs text-muted-foreground">1h ago</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="connectors" className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {popularConnectors.map((connector, i) => (
                      <Card key={i} className="border-none shadow-md">
                        <CardHeader>
                          <div className="flex items-center space-x-2">
                            {React.createElement(connector.icon, { className: "h-5 w-5 text-primary" })}
                            <CardTitle>{connector.name}</CardTitle>
                          </div>
                          <CardDescription>{connector.category}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className={
                              connector.status === "Connected" ? "bg-green-50 text-green-700" : "bg-blue-50 text-blue-700"
                            }>
                              {connector.status}
                            </Badge>
                            <BetaRestrictedAction>
                              <Button variant="outline" size="sm">
                                {connector.status === "Connected" ? "Configure" : "Connect"}
                              </Button>
                            </BetaRestrictedAction>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="activity" className="space-y-6">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>Connection Activity</CardTitle>
                      <CardDescription>
                        Recent connector events and status changes
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                            <div className="flex items-center space-x-4">
                              <div className={`p-2 rounded-full ${
                                i === 0 ? "bg-green-500/20" :
                                i === 1 ? "bg-blue-500/20" :
                                i === 2 ? "bg-yellow-500/20" :
                                "bg-green-500/20"
                              }`}>
                                {i === 0 ? <CheckCircle2 className="h-4 w-4 text-green-500" /> :
                                 i === 1 ? <RefreshCw className="h-4 w-4 text-blue-500" /> :
                                 i === 2 ? <AlertCircle className="h-4 w-4 text-yellow-500" /> :
                                 <CheckCircle2 className="h-4 w-4 text-green-500" />}
                              </div>
                              <div>
                                <p className="font-medium">{
                                  i === 0 ? "Connection Established" :
                                  i === 1 ? "Data Sync" :
                                  i === 2 ? "Rate Limit Warning" :
                                  "API Call Success"
                                }</p>
                                <p className="text-sm text-muted-foreground">{
                                  i === 0 ? "New connector authenticated" :
                                  i === 1 ? "Synchronizing data" :
                                  i === 2 ? "Approaching API limit" :
                                  "Successful API request"
                                }</p>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground">{
                              i === 0 ? "5m ago" :
                              i === 1 ? "15m ago" :
                              i === 2 ? "1h ago" :
                              "2h ago"
                            }</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="settings" className="space-y-6">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>Connector Settings</CardTitle>
                      <CardDescription>
                        Configure global connector preferences
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
                            <Network className="mr-2 h-4 w-4" />
                            Connection Rules
                          </Button>
                        </BetaRestrictedAction>
                        <BetaRestrictedAction>
                          <Button variant="outline" className="w-full justify-start">
                            <AlertCircle className="mr-2 h-4 w-4" />
                            Notifications
                          </Button>
                        </BetaRestrictedAction>
                      </div>
                    </CardContent>
                  </Card>

                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Connection Security</AlertTitle>
                    <AlertDescription>
                      Review and update your connector security settings regularly. Some connectors may require re-authentication.
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
