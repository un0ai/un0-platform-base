"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Bot,
  Plus,
  Save,
  Download,
  Upload,
  Play,
  Pause,
  Square,
  Settings2,
  Share2,
  Code2,
  Database,
  Workflow,
  ArrowRight,
  GitBranch,
  GitMerge,
  Box,
  Cpu,
  MessageSquare,
  Zap,
} from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BetaPageWrapper, BetaRestrictedAction } from "@/components/beta-notice"
import { useRouter } from "next/navigation"

export default function WorkflowOrchestrationPage() {
  const router = useRouter()
  return (
    <div className="flex h-full flex-col space-y-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Workflow Orchestration</h2>
          <p className="text-muted-foreground">
            Design and manage your AI workflows
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <BetaRestrictedAction>
            <Button variant="outline" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Import
            </Button>
          </BetaRestrictedAction>
          <BetaRestrictedAction>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </BetaRestrictedAction>
          <BetaRestrictedAction>
            <Button variant="default" size="sm">
              <Save className="mr-2 h-4 w-4" />
              Save Workflow
            </Button>
          </BetaRestrictedAction>
        </div>
      </div>

      <BetaPageWrapper>
        <div className="relative">
          <div className="absolute inset-0 bg-yellow-500/5 dark:bg-yellow-400/5 border-2 border-yellow-500/20 dark:border-yellow-400/20 rounded-lg" />
          <div className="relative">
            <div className="flex-1 space-y-6 p-8 pt-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
                <div className="space-y-6">
                  <Card className="border-none shadow-md">
                    <CardHeader className="space-y-1">
                      <div className="flex items-center justify-between">
                        <CardTitle>Workflow Canvas</CardTitle>
                        <div className="flex items-center space-x-2">
                          <BetaRestrictedAction>
                            <Button variant="outline" size="icon">
                              <Plus className="h-4 w-4" />
                            </Button>
                          </BetaRestrictedAction>
                          <BetaRestrictedAction>
                            <Button variant="outline" size="icon">
                              <Play className="h-4 w-4" />
                            </Button>
                          </BetaRestrictedAction>
                        </div>
                      </div>
                      <CardDescription>
                        Design your agent workflow using drag and drop
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded-lg border-2 border-dashed bg-muted/50 p-8 text-center space-y-8 min-h-[500px]">
                        {/* Example Workflow */}
                        <div className="flex flex-col items-center space-y-4">
                          <Card className="w-48 border shadow-sm">
                            <CardHeader className="p-4 space-y-1">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <MessageSquare className="h-4 w-4 text-primary" />
                                  <span className="font-medium">User Input</span>
                                </div>
                                <Badge variant="outline" className="text-xs">Start</Badge>
                              </div>
                            </CardHeader>
                          </Card>
                          <ArrowRight className="h-6 w-6 text-muted-foreground" />
                          <div className="grid grid-cols-2 gap-8">
                            <div className="flex flex-col items-center space-y-4">
                              <Card className="w-48 border shadow-sm">
                                <CardHeader className="p-4 space-y-1">
                                  <div className="flex items-center space-x-2">
                                    <Bot className="h-4 w-4 text-primary" />
                                    <span className="font-medium">Agent Analysis</span>
                                  </div>
                                </CardHeader>
                              </Card>
                              <ArrowRight className="h-6 w-6 text-muted-foreground" />
                              <Card className="w-48 border shadow-sm">
                                <CardHeader className="p-4 space-y-1">
                                  <div className="flex items-center space-x-2">
                                    <Database className="h-4 w-4 text-primary" />
                                    <span className="font-medium">Data Storage</span>
                                  </div>
                                </CardHeader>
                              </Card>
                            </div>
                            <div className="flex flex-col items-center space-y-4">
                              <Card className="w-48 border shadow-sm">
                                <CardHeader className="p-4 space-y-1">
                                  <div className="flex items-center space-x-2">
                                    <Code2 className="h-4 w-4 text-primary" />
                                    <span className="font-medium">Code Generation</span>
                                  </div>
                                </CardHeader>
                              </Card>
                              <ArrowRight className="h-6 w-6 text-muted-foreground" />
                              <Card className="w-48 border shadow-sm">
                                <CardHeader className="p-4 space-y-1">
                                  <div className="flex items-center space-x-2">
                                    <Cpu className="h-4 w-4 text-primary" />
                                    <span className="font-medium">Execution</span>
                                  </div>
                                </CardHeader>
                              </Card>
                            </div>
                          </div>
                          <GitMerge className="h-6 w-6 text-muted-foreground" />
                          <Card className="w-48 border shadow-sm">
                            <CardHeader className="p-4 space-y-1">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <Zap className="h-4 w-4 text-primary" />
                                  <span className="font-medium">Response</span>
                                </div>
                                <Badge variant="outline" className="text-xs">End</Badge>
                              </div>
                            </CardHeader>
                          </Card>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>Workflow Components</CardTitle>
                      <CardDescription>
                        Available components for your workflow
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Tabs defaultValue="agents" className="space-y-4">
                        <TabsList>
                          <TabsTrigger value="agents">Agents</TabsTrigger>
                          <TabsTrigger value="processing">Processing</TabsTrigger>
                          <TabsTrigger value="io">I/O</TabsTrigger>
                          <TabsTrigger value="flow">Flow</TabsTrigger>
                        </TabsList>
                        <TabsContent value="agents" className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <BetaRestrictedAction>
                              <Button variant="outline" className="h-auto p-4 justify-start">
                                <div className="flex items-center space-x-2">
                                  <Bot className="h-4 w-4" />
                                  <div className="text-left">
                                    <div className="font-medium">Analysis Agent</div>
                                    <div className="text-xs text-muted-foreground">Process and analyze data</div>
                                  </div>
                                </div>
                              </Button>
                            </BetaRestrictedAction>
                            <BetaRestrictedAction>
                              <Button variant="outline" className="h-auto p-4 justify-start">
                                <div className="flex items-center space-x-2">
                                  <Code2 className="h-4 w-4" />
                                  <div className="text-left">
                                    <div className="font-medium">Code Agent</div>
                                    <div className="text-xs text-muted-foreground">Generate and review code</div>
                                  </div>
                                </div>
                              </Button>
                            </BetaRestrictedAction>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>Workflow Properties</CardTitle>
                      <CardDescription>Configure workflow settings</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label>Workflow Name</Label>
                        <Input placeholder="My Custom Workflow" />
                      </div>
                      <div className="space-y-2">
                        <Label>Execution Mode</Label>
                        <Select defaultValue="sequential">
                          <SelectTrigger>
                            <SelectValue placeholder="Select mode" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sequential">Sequential</SelectItem>
                            <SelectItem value="parallel">Parallel</SelectItem>
                            <SelectItem value="hybrid">Hybrid</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Error Handling</Label>
                        <Select defaultValue="retry">
                          <SelectTrigger>
                            <SelectValue placeholder="Select strategy" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="retry">Retry</SelectItem>
                            <SelectItem value="fallback">Fallback Path</SelectItem>
                            <SelectItem value="ignore">Ignore</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <Label>Integrations</Label>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">LangSmith</Badge>
                          <Badge variant="outline">LangFuse</Badge>
                          <Badge variant="outline">Flowise</Badge>
                          <BetaRestrictedAction>
                            <Button variant="ghost" size="sm" className="h-6">
                              <Plus className="h-3 w-3" />
                            </Button>
                          </BetaRestrictedAction>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Workflow Steps</Label>
                        <div className="flex items-center space-x-2">
                          <BetaRestrictedAction>
                            <Button variant="outline" size="sm">
                              <Plus className="mr-2 h-4 w-4" />
                              Add Step
                            </Button>
                          </BetaRestrictedAction>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                        </div>
                        <div className="space-x-2">
                          <BetaRestrictedAction>
                            <Button variant="outline" size="sm">
                              Configure Triggers
                            </Button>
                          </BetaRestrictedAction>
                          <BetaRestrictedAction>
                            <Button variant="default" size="sm">
                              Run Workflow
                            </Button>
                          </BetaRestrictedAction>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>Monitoring</CardTitle>
                      <CardDescription>Real-time workflow metrics</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Status</span>
                          <Badge variant="outline" className="bg-green-50 text-green-700">Running</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Active Agents</span>
                          <span className="text-sm font-medium">3/5</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Average Latency</span>
                          <span className="text-sm font-medium">245ms</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Success Rate</span>
                          <span className="text-sm font-medium">98.5%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>

      </BetaPageWrapper>
    </div>
  )
}
