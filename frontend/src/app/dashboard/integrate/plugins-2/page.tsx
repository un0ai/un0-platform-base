"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { BetaPageWrapper, BetaRestrictedAction } from "@/components/beta-notice"
import {
  Puzzle,
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
  Download,
  Package,
  Shield
} from "lucide-react"

const plugins = [
  { name: "Vector Store", category: "Storage", status: "Active", version: "2.1.0" },
  { name: "LLM Connector", category: "AI", status: "Active", version: "1.8.0" },
  { name: "Data Pipeline", category: "Integration", status: "Active", version: "2.0.1" },
  { name: "Agent Builder", category: "Development", status: "Active", version: "1.5.0" },
  { name: "Analytics", category: "Monitoring", status: "Active", version: "1.2.0" },
  { name: "Security", category: "Infrastructure", status: "Active", version: "2.2.0" }
]

export default function PluginsPage() {
  return (
    <div className="flex h-full flex-col space-y-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Plugins</h2>
          <p className="text-muted-foreground">
            Extend your platform capabilities with plugins and extensions
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
              Add Plugin
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
                  <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
                  <TabsTrigger value="installed">Installed</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Plugins</CardTitle>
                        <Puzzle className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">24</div>
                        <p className="text-xs text-muted-foreground">
                          Across 6 categories
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Plugins</CardTitle>
                        <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">18</div>
                        <p className="text-xs text-muted-foreground">
                          75% of total
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Updates Available</CardTitle>
                        <RefreshCw className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">5</div>
                        <p className="text-xs text-muted-foreground">
                          Ready to install
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Resource Usage</CardTitle>
                        <BarChart2 className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">12%</div>
                        <p className="text-xs text-muted-foreground">
                          System impact
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid gap-6 lg:grid-cols-2">
                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <CardTitle>Popular Plugins</CardTitle>
                        <CardDescription>
                          Most used plugins in your environment
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {plugins.slice(0, 4).map((plugin, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                              <div className="flex items-center space-x-4">
                                <div className="bg-primary/20 p-2 rounded-full">
                                  <Puzzle className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                  <p className="font-medium">{plugin.name}</p>
                                  <p className="text-sm text-muted-foreground">{plugin.category}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Badge variant="outline" className="bg-green-50 text-green-700">
                                  v{plugin.version}
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
                          Latest plugin events and updates
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="bg-green-500/20 p-2 rounded-full">
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                            </div>
                            <div className="flex-1 space-y-1">
                              <p className="text-sm font-medium">Plugin Installed</p>
                              <p className="text-xs text-muted-foreground">Vector Store v2.1.0</p>
                            </div>
                            <p className="text-xs text-muted-foreground">5m ago</p>
                          </div>

                          <div className="flex items-center space-x-4">
                            <div className="bg-blue-500/20 p-2 rounded-full">
                              <RefreshCw className="h-4 w-4 text-blue-500" />
                            </div>
                            <div className="flex-1 space-y-1">
                              <p className="text-sm font-medium">Update Available</p>
                              <p className="text-xs text-muted-foreground">LLM Connector v1.9.0</p>
                            </div>
                            <p className="text-xs text-muted-foreground">15m ago</p>
                          </div>

                          <div className="flex items-center space-x-4">
                            <div className="bg-yellow-500/20 p-2 rounded-full">
                              <AlertCircle className="h-4 w-4 text-yellow-500" />
                            </div>
                            <div className="flex-1 space-y-1">
                              <p className="text-sm font-medium">Configuration Required</p>
                              <p className="text-xs text-muted-foreground">Data Pipeline plugin</p>
                            </div>
                            <p className="text-xs text-muted-foreground">1h ago</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="marketplace" className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[
                      { name: "Advanced Analytics", category: "Monitoring", description: "Enhanced metrics and visualizations" },
                      { name: "Custom Agents", category: "Development", description: "Build specialized AI agents" },
                      { name: "Data Connectors", category: "Integration", description: "Connect to external data sources" },
                      { name: "Security Suite", category: "Infrastructure", description: "Advanced security features" },
                      { name: "Workflow Builder", category: "Development", description: "Visual workflow designer" },
                      { name: "Model Registry", category: "AI", description: "Manage ML models" },
                    ].map((plugin, i) => (
                      <Card key={i} className="border-none shadow-md">
                        <CardHeader>
                          <div className="flex items-center space-x-2">
                            <Package className="h-5 w-5 text-primary" />
                            <CardTitle>{plugin.name}</CardTitle>
                          </div>
                          <CardDescription>{plugin.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Badge variant="outline">{plugin.category}</Badge>
                            <BetaRestrictedAction>
                              <Button variant="outline" size="sm">
                                <Download className="mr-2 h-4 w-4" />
                                Install
                              </Button>
                            </BetaRestrictedAction>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="installed" className="space-y-6">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>Installed Plugins</CardTitle>
                      <CardDescription>
                        Manage your installed plugins and extensions
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {plugins.map((plugin, i) => (
                          <div key={i} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                            <div className="flex items-center space-x-4">
                              <div className="bg-primary/20 p-2 rounded-full">
                                <Puzzle className="h-4 w-4 text-primary" />
                              </div>
                              <div>
                                <div className="flex items-center space-x-2">
                                  <p className="font-medium">{plugin.name}</p>
                                  <Badge variant="outline" className="bg-green-50 text-green-700">
                                    v{plugin.version}
                                  </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">{plugin.category}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <BetaRestrictedAction>
                                <Button variant="outline" size="sm">
                                  Configure
                                </Button>
                              </BetaRestrictedAction>
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
                      <CardTitle>Plugin Settings</CardTitle>
                      <CardDescription>
                        Configure your plugin preferences and permissions
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
                            <Shield className="mr-2 h-4 w-4" />
                            Security Settings
                          </Button>
                        </BetaRestrictedAction>
                        <BetaRestrictedAction>
                          <Button variant="outline" className="w-full justify-start">
                            <AlertCircle className="mr-2 h-4 w-4" />
                            Update Settings
                          </Button>
                        </BetaRestrictedAction>
                      </div>
                    </CardContent>
                  </Card>

                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Plugin Security</AlertTitle>
                    <AlertDescription>
                      Review plugin permissions and security settings regularly. Only install plugins from trusted sources and keep them updated.
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
