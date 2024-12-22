"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { BetaPageWrapper, BetaRestrictedAction } from "@/components/beta-notice"
import {
  Code2,
  Webhook,
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
  Key,
  Lock,
  Globe
} from "lucide-react"

const apiEndpoints = [
  { name: "Agent Management", category: "Core API", status: "Active", version: "v2.1.0" },
  { name: "Model Registry", category: "ML API", status: "Active", version: "v1.8.0" },
  { name: "Data Pipeline", category: "Data API", status: "Active", version: "v2.0.1" },
  { name: "Workflow Engine", category: "Core API", status: "Active", version: "v1.5.0" },
  { name: "Analytics", category: "Monitoring API", status: "Active", version: "v1.2.0" },
  { name: "Authentication", category: "Security API", status: "Active", version: "v2.2.0" }
]

export default function APIHubPage() {
  return (
    <div className="flex h-full flex-col space-y-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">API Hub</h2>
          <p className="text-muted-foreground">
            Explore and manage your API endpoints and integrations
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
              <Code2 className="mr-2 h-4 w-4" />
              API Docs
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
                  <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
                  <TabsTrigger value="keys">API Keys</TabsTrigger>
                  <TabsTrigger value="docs">Documentation</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Endpoints</CardTitle>
                        <Code2 className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">32</div>
                        <p className="text-xs text-muted-foreground">
                          Across 6 API categories
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Request Rate</CardTitle>
                        <BarChart2 className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">2.4K/s</div>
                        <p className="text-xs text-muted-foreground">
                          Peak in last hour
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
                        <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">99.9%</div>
                        <p className="text-xs text-muted-foreground">
                          Last 24 hours
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Keys</CardTitle>
                        <Key className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">156</div>
                        <p className="text-xs text-muted-foreground">
                          8 added this week
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid gap-6 lg:grid-cols-2">
                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <CardTitle>Popular Endpoints</CardTitle>
                        <CardDescription>
                          Most frequently accessed API endpoints
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {apiEndpoints.slice(0, 4).map((endpoint, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                              <div className="flex items-center space-x-4">
                                <div className="bg-primary/20 p-2 rounded-full">
                                  <Code2 className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                  <p className="font-medium">{endpoint.name}</p>
                                  <p className="text-sm text-muted-foreground">{endpoint.category}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Badge variant="outline" className="bg-green-50 text-green-700">
                                  {endpoint.version}
                                </Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>
                          Latest API events and updates
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="bg-green-500/20 p-2 rounded-full">
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                            </div>
                            <div className="flex-1 space-y-1">
                              <p className="text-sm font-medium">New Version Deployed</p>
                              <p className="text-xs text-muted-foreground">Agent Management API v2.1.0</p>
                            </div>
                            <p className="text-xs text-muted-foreground">5m ago</p>
                          </div>

                          <div className="flex items-center space-x-4">
                            <div className="bg-blue-500/20 p-2 rounded-full">
                              <Key className="h-4 w-4 text-blue-500" />
                            </div>
                            <div className="flex-1 space-y-1">
                              <p className="text-sm font-medium">New API Key Generated</p>
                              <p className="text-xs text-muted-foreground">For development environment</p>
                            </div>
                            <p className="text-xs text-muted-foreground">15m ago</p>
                          </div>

                          <div className="flex items-center space-x-4">
                            <div className="bg-yellow-500/20 p-2 rounded-full">
                              <AlertCircle className="h-4 w-4 text-yellow-500" />
                            </div>
                            <div className="flex-1 space-y-1">
                              <p className="text-sm font-medium">Rate Limit Warning</p>
                              <p className="text-xs text-muted-foreground">Model Registry API</p>
                            </div>
                            <p className="text-xs text-muted-foreground">1h ago</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="endpoints" className="space-y-6">
                  <div className="grid gap-6">
                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <CardTitle>API Endpoints</CardTitle>
                        <CardDescription>
                          Available API endpoints and their status
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {apiEndpoints.map((endpoint, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                              <div className="flex items-center space-x-4">
                                <div className="bg-primary/20 p-2 rounded-full">
                                  <Code2 className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                  <div className="flex items-center space-x-2">
                                    <p className="font-medium">{endpoint.name}</p>
                                    <Badge variant="outline" className="bg-green-50 text-green-700">
                                      {endpoint.version}
                                    </Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground">{endpoint.category}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <BetaRestrictedAction>
                                  <Button variant="outline" size="sm">
                                    View Docs
                                  </Button>
                                </BetaRestrictedAction>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="keys" className="space-y-6">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>API Keys</CardTitle>
                      <CardDescription>
                        Manage your API keys and access tokens
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {["Production", "Staging", "Development"].map((env, i) => (
                          <div key={i} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <Key className="h-4 w-4 text-primary" />
                                <p className="font-medium">{env} Environment</p>
                              </div>
                              <BetaRestrictedAction>
                                <Button variant="outline" size="sm">
                                  Manage Keys
                                </Button>
                              </BetaRestrictedAction>
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                              <div>
                                <p className="text-sm text-muted-foreground">Active API Keys</p>
                                <p className="font-medium">{(4 - i) * 15} keys</p>
                              </div>
                              <Badge variant="outline" className="bg-green-50 text-green-700">
                                Active
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Alert>
                    <Lock className="h-4 w-4" />
                    <AlertTitle>Security Notice</AlertTitle>
                    <AlertDescription>
                      Regularly rotate your API keys and review access patterns to maintain security. Never share your API keys in public repositories.
                    </AlertDescription>
                  </Alert>
                </TabsContent>

                <TabsContent value="docs" className="space-y-6">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>API Documentation</CardTitle>
                      <CardDescription>
                        Comprehensive guides and references for our APIs
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-2">
                        <Card className="border bg-card/50">
                          <CardHeader>
                            <div className="flex items-center space-x-2">
                              <Globe className="h-4 w-4 text-primary" />
                              <CardTitle className="text-base">REST API</CardTitle>
                            </div>
                            <CardDescription>
                              HTTP-based API documentation
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <BetaRestrictedAction>
                              <Button variant="outline" className="w-full">
                                View Documentation
                              </Button>
                            </BetaRestrictedAction>
                          </CardContent>
                        </Card>

                        <Card className="border bg-card/50">
                          <CardHeader>
                            <div className="flex items-center space-x-2">
                              <Webhook className="h-4 w-4 text-primary" />
                              <CardTitle className="text-base">Webhooks</CardTitle>
                            </div>
                            <CardDescription>
                              Event-driven integration guide
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <BetaRestrictedAction>
                              <Button variant="outline" className="w-full">
                                View Documentation
                              </Button>
                            </BetaRestrictedAction>
                          </CardContent>
                        </Card>
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
