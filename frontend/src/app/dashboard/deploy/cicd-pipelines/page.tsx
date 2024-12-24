"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { BetaPageWrapper, BetaRestrictedAction } from "@/components/beta-notice"
import {
  GitBranch,
  GitCommit,
  GitMerge,
  GitPullRequest,
  Play,
  RefreshCw,
  Rocket,
  Settings,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Clock
} from "lucide-react"

export default function CICDPipelinesPage() {
  return (
    <div className="flex h-full flex-col space-y-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">CI/CD Pipelines</h2>
          <p className="text-muted-foreground">
            Automate your AI deployment workflow with continuous integration and delivery
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
              <Play className="mr-2 h-4 w-4" />
              Run Pipeline
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
                  <TabsTrigger value="pipelines">Pipelines</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Pipelines</CardTitle>
                        <GitBranch className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground">
                          +2 from last week
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
                        <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">98.5%</div>
                        <p className="text-xs text-muted-foreground">
                          +0.5% from last month
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Average Duration</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">5m 23s</div>
                        <p className="text-xs text-muted-foreground">
                          -45s from last week
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Deployments</CardTitle>
                        <Rocket className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">8</div>
                        <p className="text-xs text-muted-foreground">
                          +1 from yesterday
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid gap-6 lg:grid-cols-2">
                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <CardTitle>Recent Pipelines</CardTitle>
                        <CardDescription>
                          Latest pipeline runs and their status
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
                                <p className="font-medium">Production Deploy</p>
                                <p className="text-sm text-muted-foreground">Completed 5 minutes ago</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="bg-green-50 text-green-700">Success</Badge>
                          </div>

                          <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                            <div className="flex items-center space-x-4">
                              <div className="bg-blue-500/20 p-2 rounded-full">
                                <RefreshCw className="h-4 w-4 text-blue-500 animate-spin" />
                              </div>
                              <div>
                                <p className="font-medium">Staging Deploy</p>
                                <p className="text-sm text-muted-foreground">Running for 2 minutes</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="bg-blue-50 text-blue-700">Running</Badge>
                          </div>

                          <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                            <div className="flex items-center space-x-4">
                              <div className="bg-red-500/20 p-2 rounded-full">
                                <XCircle className="h-4 w-4 text-red-500" />
                              </div>
                              <div>
                                <p className="font-medium">Test Pipeline</p>
                                <p className="text-sm text-muted-foreground">Failed 15 minutes ago</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="bg-red-50 text-red-700">Failed</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <CardTitle>Active Environments</CardTitle>
                        <CardDescription>
                          Status of your deployment environments
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <p className="font-medium">Production</p>
                              <p className="text-sm text-muted-foreground">v2.1.0 - Stable</p>
                            </div>
                            <Badge variant="outline" className="bg-green-50 text-green-700">Healthy</Badge>
                          </div>
                          <Progress value={98} className="h-2" />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <p className="font-medium">Staging</p>
                              <p className="text-sm text-muted-foreground">v2.2.0-rc1 - Testing</p>
                            </div>
                            <Badge variant="outline" className="bg-yellow-50 text-yellow-700">Deploying</Badge>
                          </div>
                          <Progress value={45} className="h-2" />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <p className="font-medium">Development</p>
                              <p className="text-sm text-muted-foreground">v2.2.0-dev - Active</p>
                            </div>
                            <Badge variant="outline" className="bg-green-50 text-green-700">Healthy</Badge>
                          </div>
                          <Progress value={92} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Pipeline Optimization Available</AlertTitle>
                    <AlertDescription>
                      We've detected opportunities to improve your pipeline performance. Consider enabling parallel testing and caching optimizations.
                    </AlertDescription>
                  </Alert>
                </TabsContent>

                <TabsContent value="pipelines" className="space-y-6">
                  <div className="grid gap-6">
                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <CardTitle>Pipeline Templates</CardTitle>
                        <CardDescription>
                          Pre-configured pipeline templates for common scenarios
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                          <Card className="border bg-card/50">
                            <CardHeader>
                              <div className="flex items-center space-x-2">
                                <GitPullRequest className="h-4 w-4 text-primary" />
                                <CardTitle className="text-base">Model Deployment</CardTitle>
                              </div>
                              <CardDescription>
                                Automated testing and deployment for AI models
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <BetaRestrictedAction>
                                <Button variant="outline" className="w-full">
                                  Use Template
                                </Button>
                              </BetaRestrictedAction>
                            </CardContent>
                          </Card>

                          <Card className="border bg-card/50">
                            <CardHeader>
                              <div className="flex items-center space-x-2">
                                <GitMerge className="h-4 w-4 text-primary" />
                                <CardTitle className="text-base">Agent Workflow</CardTitle>
                              </div>
                              <CardDescription>
                                Deploy and monitor AI agent workflows
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <BetaRestrictedAction>
                                <Button variant="outline" className="w-full">
                                  Use Template
                                </Button>
                              </BetaRestrictedAction>
                            </CardContent>
                          </Card>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="history" className="space-y-6">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>Deployment History</CardTitle>
                      <CardDescription>
                        Recent deployments and their outcomes
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
                                i === 2 ? "bg-red-500/20" :
                                "bg-green-500/20"
                              }`}>
                                {i === 0 ? <CheckCircle2 className="h-4 w-4 text-green-500" /> :
                                 i === 1 ? <RefreshCw className="h-4 w-4 text-blue-500 animate-spin" /> :
                                 i === 2 ? <XCircle className="h-4 w-4 text-red-500" /> :
                                 <CheckCircle2 className="h-4 w-4 text-green-500" />}
                              </div>
                              <div>
                                <div className="flex items-center space-x-2">
                                  <GitCommit className="h-4 w-4 text-muted-foreground" />
                                  <p className="font-medium">Deploy #{5 - i}</p>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  {i === 0 ? "5 minutes ago" :
                                   i === 1 ? "Running" :
                                   i === 2 ? "1 hour ago" :
                                   "2 hours ago"}
                                </p>
                              </div>
                            </div>
                            <Badge variant="outline" className={
                              i === 0 ? "bg-green-50 text-green-700" :
                              i === 1 ? "bg-blue-50 text-blue-700" :
                              i === 2 ? "bg-red-50 text-red-700" :
                              "bg-green-50 text-green-700"
                            }>
                              {i === 0 ? "Success" :
                               i === 1 ? "Running" :
                               i === 2 ? "Failed" :
                               "Success"}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="settings" className="space-y-6">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>Pipeline Settings</CardTitle>
                      <CardDescription>
                        Configure your CI/CD pipeline preferences
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <BetaRestrictedAction>
                          <Button variant="outline" className="w-full justify-start">
                            <Settings className="mr-2 h-4 w-4" />
                            Configure Environments
                          </Button>
                        </BetaRestrictedAction>
                        <BetaRestrictedAction>
                          <Button variant="outline" className="w-full justify-start">
                            <GitBranch className="mr-2 h-4 w-4" />
                            Branch Rules
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
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </BetaPageWrapper>
    </div>
  )
}
