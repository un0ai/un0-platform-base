"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { BetaPageWrapper, BetaRestrictedAction } from "@/components/beta-notice"
import {
  Tool,
  Wrench,
  Settings,
  BarChart2,
  GitBranch,
  Database,
  Cpu,
  LineChart,
  Boxes,
  Network,
  Workflow,
  Bot,
  RefreshCw,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Zap
} from "lucide-react"

export default function MLOpsToolsPage() {
  return (
    <div className="flex h-full flex-col space-y-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">MLOps Tools</h2>
          <p className="text-muted-foreground">
            Streamline your AI operations with integrated MLOps tools and utilities
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
              <Tool className="mr-2 h-4 w-4" />
              Add Tool
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
                  <TabsTrigger value="tools">Tools</TabsTrigger>
                  <TabsTrigger value="integrations">Integrations</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Tools</CardTitle>
                        <Tool className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">24</div>
                        <p className="text-xs text-muted-foreground">
                          +3 from last month
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Tool Usage</CardTitle>
                        <BarChart2 className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">89%</div>
                        <p className="text-xs text-muted-foreground">
                          +5% from last week
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Integrations</CardTitle>
                        <Network className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">15</div>
                        <p className="text-xs text-muted-foreground">
                          +2 new connections
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Automation Rate</CardTitle>
                        <Workflow className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">76%</div>
                        <p className="text-xs text-muted-foreground">
                          +12% improvement
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid gap-6 lg:grid-cols-2">
                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <CardTitle>Popular Tools</CardTitle>
                        <CardDescription>
                          Most frequently used MLOps tools
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <Database className="h-4 w-4 text-primary" />
                                <p className="font-medium">Data Version Control</p>
                              </div>
                              <Badge variant="outline" className="bg-green-50 text-green-700">Active</Badge>
                            </div>
                            <Progress value={92} className="h-2" />
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <GitBranch className="h-4 w-4 text-primary" />
                                <p className="font-medium">Model Registry</p>
                              </div>
                              <Badge variant="outline" className="bg-green-50 text-green-700">Active</Badge>
                            </div>
                            <Progress value={87} className="h-2" />
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <LineChart className="h-4 w-4 text-primary" />
                                <p className="font-medium">Experiment Tracking</p>
                              </div>
                              <Badge variant="outline" className="bg-green-50 text-green-700">Active</Badge>
                            </div>
                            <Progress value={78} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <CardTitle>Recent Activities</CardTitle>
                        <CardDescription>
                          Latest tool interactions and updates
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="bg-green-500/20 p-2 rounded-full">
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                            </div>
                            <div className="flex-1 space-y-1">
                              <p className="text-sm font-medium">Model Registry Updated</p>
                              <p className="text-xs text-muted-foreground">New model version registered</p>
                            </div>
                            <p className="text-xs text-muted-foreground">5m ago</p>
                          </div>

                          <div className="flex items-center space-x-4">
                            <div className="bg-blue-500/20 p-2 rounded-full">
                              <RefreshCw className="h-4 w-4 text-blue-500" />
                            </div>
                            <div className="flex-1 space-y-1">
                              <p className="text-sm font-medium">Pipeline Sync</p>
                              <p className="text-xs text-muted-foreground">Syncing with remote repository</p>
                            </div>
                            <p className="text-xs text-muted-foreground">15m ago</p>
                          </div>

                          <div className="flex items-center space-x-4">
                            <div className="bg-yellow-500/20 p-2 rounded-full">
                              <AlertCircle className="h-4 w-4 text-yellow-500" />
                            </div>
                            <div className="flex-1 space-y-1">
                              <p className="text-sm font-medium">Resource Warning</p>
                              <p className="text-xs text-muted-foreground">Storage capacity at 80%</p>
                            </div>
                            <p className="text-xs text-muted-foreground">1h ago</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="tools" className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Database className="h-5 w-5 text-primary" />
                          <CardTitle>Data Management</CardTitle>
                        </div>
                        <CardDescription>
                          Version control and data lineage tools
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <BetaRestrictedAction>
                          <Button variant="outline" className="w-full justify-start">
                            <Boxes className="mr-2 h-4 w-4" />
                            Data Versioning
                          </Button>
                        </BetaRestrictedAction>
                        <BetaRestrictedAction>
                          <Button variant="outline" className="w-full justify-start">
                            <GitBranch className="mr-2 h-4 w-4" />
                            Data Pipeline
                          </Button>
                        </BetaRestrictedAction>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Cpu className="h-5 w-5 text-primary" />
                          <CardTitle>Model Operations</CardTitle>
                        </div>
                        <CardDescription>
                          Model lifecycle management tools
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <BetaRestrictedAction>
                          <Button variant="outline" className="w-full justify-start">
                            <Bot className="mr-2 h-4 w-4" />
                            Model Registry
                          </Button>
                        </BetaRestrictedAction>
                        <BetaRestrictedAction>
                          <Button variant="outline" className="w-full justify-start">
                            <LineChart className="mr-2 h-4 w-4" />
                            Performance Tracking
                          </Button>
                        </BetaRestrictedAction>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Zap className="h-5 w-5 text-primary" />
                          <CardTitle>Automation</CardTitle>
                        </div>
                        <CardDescription>
                          Workflow automation tools
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <BetaRestrictedAction>
                          <Button variant="outline" className="w-full justify-start">
                            <Workflow className="mr-2 h-4 w-4" />
                            Pipeline Builder
                          </Button>
                        </BetaRestrictedAction>
                        <BetaRestrictedAction>
                          <Button variant="outline" className="w-full justify-start">
                            <Network className="mr-2 h-4 w-4" />
                            Integration Hub
                          </Button>
                        </BetaRestrictedAction>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="integrations" className="space-y-6">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>Available Integrations</CardTitle>
                      <CardDescription>
                        Connect with popular MLOps platforms and services
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid gap-4 md:grid-cols-2">
                        {[
                          { name: "LangSmith", status: "Connected", icon: Bot },
                          { name: "LangFuse", status: "Available", icon: LineChart },
                          { name: "Weights & Biases", status: "Connected", icon: BarChart2 },
                          { name: "MLflow", status: "Available", icon: Workflow },
                        ].map((integration, i) => (
                          <div key={i} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                            <div className="flex items-center space-x-4">
                              <div className="bg-primary/20 p-2 rounded-full">
                                {React.createElement(integration.icon, { className: "h-4 w-4 text-primary" })}
                              </div>
                              <div>
                                <p className="font-medium">{integration.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  {integration.status === "Connected" ? "Active connection" : "Ready to connect"}
                                </p>
                              </div>
                            </div>
                            <BetaRestrictedAction>
                              <Button variant="outline" size="sm">
                                {integration.status === "Connected" ? "Configure" : "Connect"}
                              </Button>
                            </BetaRestrictedAction>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="settings" className="space-y-6">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>Tool Settings</CardTitle>
                      <CardDescription>
                        Configure your MLOps tools and preferences
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <BetaRestrictedAction>
                          <Button variant="outline" className="w-full justify-start">
                            <Settings className="mr-2 h-4 w-4" />
                            General Settings
                          </Button>
                        </BetaRestrictedAction>
                        <BetaRestrictedAction>
                          <Button variant="outline" className="w-full justify-start">
                            <Network className="mr-2 h-4 w-4" />
                            Integration Settings
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
                    <AlertTitle>Tool Updates Available</AlertTitle>
                    <AlertDescription>
                      New versions are available for some of your tools. Consider updating to access the latest features and security improvements.
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
