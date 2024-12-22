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
  LineChart,
  BarChart,
  GitBranch,
  History,
  Cpu,
  Zap,
  AlertCircle,
} from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { BetaPageWrapper, BetaRestrictedAction } from "@/components/beta-notice"
import { useRouter } from "next/navigation"

export default function ModelManagementPage() {
  const router = useRouter()
  return (
    <div className="flex h-full flex-col space-y-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Model Management</h2>
          <p className="text-muted-foreground">
            Configure and manage your AI models
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <BetaRestrictedAction>
            <Button variant="outline" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              New Model
            </Button>
          </BetaRestrictedAction>
          <BetaRestrictedAction>
            <Button variant="default" size="sm">
              <Cpu className="mr-2 h-4 w-4" />
              Deploy
            </Button>
          </BetaRestrictedAction>
        </div>
      </div>

      <BetaPageWrapper>
        <div className="relative">
          <div className="absolute inset-0 bg-yellow-500/5 dark:bg-yellow-400/5 border-2 border-yellow-500/20 dark:border-yellow-400/20 rounded-lg" />
          <div className="relative">
            <div className="flex-1 space-y-6 p-8 pt-6">
              <div className="grid gap-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card className="border-none shadow-md">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Active Models</CardTitle>
                      <Cpu className="h-4 w-4 text-muted-foreground" />
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
                      <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
                      <Zap className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">1,234,567</div>
                      <p className="text-xs text-muted-foreground">
                        +15% from last month
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-md">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Average Latency</CardTitle>
                      <History className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">245ms</div>
                      <p className="text-xs text-muted-foreground">
                        -12ms from last week
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-md">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Error Rate</CardTitle>
                      <AlertCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">0.12%</div>
                      <p className="text-xs text-muted-foreground">
                        -0.05% from last week
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>Deployed Models</CardTitle>
                      <CardDescription>
                        Overview of your active model deployments
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Model</TableHead>
                            <TableHead>Version</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Requests/min</TableHead>
                            <TableHead>Latency</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">GPT-4</TableCell>
                            <TableCell>v2.1</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-green-50 text-green-700">
                                Active
                              </Badge>
                            </TableCell>
                            <TableCell>1,234</TableCell>
                            <TableCell>245ms</TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-2">
                                <BetaRestrictedAction>
                                  <Button variant="ghost" size="sm">Scale</Button>
                                </BetaRestrictedAction>
                                <BetaRestrictedAction>
                                  <Button variant="ghost" size="sm">Monitor</Button>
                                </BetaRestrictedAction>
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Claude 2</TableCell>
                            <TableCell>v1.3</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-green-50 text-green-700">
                                Active
                              </Badge>
                            </TableCell>
                            <TableCell>856</TableCell>
                            <TableCell>189ms</TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-2">
                                <BetaRestrictedAction>
                                  <Button variant="ghost" size="sm">Scale</Button>
                                </BetaRestrictedAction>
                                <BetaRestrictedAction>
                                  <Button variant="ghost" size="sm">Monitor</Button>
                                </BetaRestrictedAction>
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Llama 2</TableCell>
                            <TableCell>v1.0</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-yellow-50 text-yellow-700">
                                Scaling
                              </Badge>
                            </TableCell>
                            <TableCell>432</TableCell>
                            <TableCell>312ms</TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-2">
                                <BetaRestrictedAction>
                                  <Button variant="ghost" size="sm">Scale</Button>
                                </BetaRestrictedAction>
                                <BetaRestrictedAction>
                                  <Button variant="ghost" size="sm">Monitor</Button>
                                </BetaRestrictedAction>
                              </div>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>

                  <div className="space-y-6">
                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                        <CardDescription>Common model operations</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                      <BetaRestrictedAction>
                      <Button variant="outline" className="w-full justify-start">
                        <Plus className="mr-2 h-4 w-4" />
                        Deploy New Model
                      </Button>
                    </BetaRestrictedAction>
                        <BetaRestrictedAction>
                          <Button variant="outline" className="w-full justify-start">
                            <GitBranch className="mr-2 h-4 w-4" />
                            Create Version
                          </Button>
                        </BetaRestrictedAction>
                        <BetaRestrictedAction>
                          <Button variant="outline" className="w-full justify-start">
                            <LineChart className="mr-2 h-4 w-4" />
                            View Analytics
                          </Button>
                        </BetaRestrictedAction>
                        <BetaRestrictedAction>
                          <Button variant="outline" className="w-full justify-start">
                            <Settings2 className="mr-2 h-4 w-4" />
                            Manage Settings
                          </Button>
                        </BetaRestrictedAction>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <CardTitle>Model Health</CardTitle>
                        <CardDescription>System status and alerts</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <div className="space-y-0.5">
                              <p className="text-sm font-medium">GPT-4</p>
                              <p className="text-xs text-muted-foreground">All systems operational</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <div className="space-y-0.5">
                              <p className="text-sm font-medium">Claude 2</p>
                              <p className="text-xs text-muted-foreground">All systems operational</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="w-2 h-2 rounded-full bg-yellow-500" />
                            <div className="space-y-0.5">
                              <p className="text-sm font-medium">Llama 2</p>
                              <p className="text-xs text-muted-foreground">High latency detected</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>Performance Metrics</CardTitle>
                      <CardDescription>
                        Model performance over time
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[200px] flex items-center justify-center border-2 border-dashed rounded-lg">
                        <p className="text-sm text-muted-foreground">Performance chart placeholder</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>Monitoring</CardTitle>
                      <CardDescription>Model performance metrics</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <h4 className="text-sm font-medium">Alerts</h4>
                            <p className="text-sm text-muted-foreground">
                              Configure monitoring alerts
                            </p>
                          </div>
                          <BetaRestrictedAction>
                            <Button variant="outline">Configure Alerts</Button>
                          </BetaRestrictedAction>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>Resource Usage</CardTitle>
                      <CardDescription>
                        System resource utilization
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>CPU Usage</span>
                            <span className="font-medium">78%</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div className="h-full w-[78%] rounded-full bg-primary" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Memory Usage</span>
                            <span className="font-medium">64%</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div className="h-full w-[64%] rounded-full bg-primary" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>GPU Usage</span>
                            <span className="font-medium">92%</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div className="h-full w-[92%] rounded-full bg-primary" />
                          </div>
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
