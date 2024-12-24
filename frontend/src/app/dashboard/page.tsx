"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ProtectedPage } from "@/components/auth/protected-page"
import {
  Activity,
  AlertCircle,
  Bot,
  Brain,
  ChevronUp,
  Code2,
  CpuIcon,
  GitBranch,
  History,
  LineChart,
  Network,
  Shield,
  Terminal,
  Timer,
  Workflow,
  Zap,
  Binary,
  Boxes,
  Bug,
  Cloud,
  Database
} from "lucide-react"

export default function DashboardPage() {
  return (
    <ProtectedPage
      title="MLOps Control Center"
      description="Real-time platform insights and operations"
    >
      <div className="flex-1 space-y-8 p-8 pt-6">
        {/* Header with System Status */}
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">MLOps Control Center</h2>
            <p className="text-muted-foreground">Real-time platform insights and operations</p>
          </div>
          <div className="flex items-center space-x-4">
            <Alert className="w-[300px] bg-green-50 border-green-200">
              <AlertCircle className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-600">Platform Health: 99.99%</AlertTitle>
            </Alert>
            <Badge variant="outline" className="text-sm">
              un0.ai v2.0.0
            </Badge>
          </div>
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs defaultValue="mlops" className="space-y-6">
          <TabsList>
            <TabsTrigger value="mlops">MLOps</TabsTrigger>
            <TabsTrigger value="agents">Agent Fleet</TabsTrigger>
            <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
            <TabsTrigger value="security">Security & Compliance</TabsTrigger>
          </TabsList>

          {/* MLOps Tab */}
          <TabsContent value="mlops" className="space-y-6">
            {/* Model Performance Stats */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-none shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Model Inference Rate</CardTitle>
                  <Brain className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2.4M/hour</div>
                  <div className="flex items-center space-x-2">
                    <ChevronUp className="h-4 w-4 text-green-500" />
                    <p className="text-xs text-green-500">+12% from baseline</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Average Latency</CardTitle>
                  <Timer className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">45ms</div>
                  <div className="flex items-center space-x-2">
                    <ChevronUp className="h-4 w-4 text-green-500" />
                    <p className="text-xs text-green-500">-15ms improvement</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Model Accuracy</CardTitle>
                  <LineChart className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">98.7%</div>
                  <div className="flex items-center space-x-2">
                    <ChevronUp className="h-4 w-4 text-green-500" />
                    <p className="text-xs text-green-500">+1.2% improvement</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Model Versions</CardTitle>
                  <GitBranch className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">15 Active</div>
                  <p className="text-xs text-muted-foreground">
                    3 pending deployments
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Model Training & Deployment */}
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Active Training Jobs</CardTitle>
                  <CardDescription>Current model training status</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Brain className="h-4 w-4 text-blue-500" />
                        <span>GPT-4 Fine-tuning</span>
                      </div>
                      <Badge>85% Complete</Badge>
                    </div>
                    <Progress value={85} className="bg-blue-100" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Binary className="h-4 w-4 text-purple-500" />
                        <span>Custom BERT Training</span>
                      </div>
                      <Badge>62% Complete</Badge>
                    </div>
                    <Progress value={62} className="bg-purple-100" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Deployment Pipeline</CardTitle>
                  <CardDescription>Model deployment status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Terminal className="h-6 w-6 text-green-500" />
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">Sentiment Analysis v2.1</p>
                        <p className="text-xs text-muted-foreground">Deployed to Production</p>
                      </div>
                      <Badge variant="outline">Success</Badge>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Terminal className="h-6 w-6 text-blue-500" />
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">Text Generation v3.0</p>
                        <p className="text-xs text-muted-foreground">Staging Validation</p>
                      </div>
                      <Badge variant="outline">In Progress</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Agent Fleet Tab */}
          <TabsContent value="agents" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Agent Distribution</CardTitle>
                  <CardDescription>By type and status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Language Processing</span>
                        <Badge>45 Active</Badge>
                      </div>
                      <Progress value={75} className="bg-blue-100" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Task Automation</span>
                        <Badge>32 Active</Badge>
                      </div>
                      <Progress value={60} className="bg-green-100" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Data Processing</span>
                        <Badge>28 Active</Badge>
                      </div>
                      <Progress value={45} className="bg-purple-100" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Agent Health</CardTitle>
                  <CardDescription>Performance metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Response Time</span>
                        <span className="text-sm text-muted-foreground">45ms avg</span>
                      </div>
                      <Progress value={85} className="bg-green-100" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Error Rate</span>
                        <span className="text-sm text-muted-foreground">0.1%</span>
                      </div>
                      <Progress value={99} className="bg-red-100" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Queue Health</span>
                        <span className="text-sm text-muted-foreground">98%</span>
                      </div>
                      <Progress value={98} className="bg-blue-100" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Agent Incidents</CardTitle>
                  <CardDescription>Last 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Bug className="h-6 w-6 text-yellow-500" />
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">Memory Leak Detected</p>
                        <p className="text-xs text-muted-foreground">Agent ID: 45892</p>
                      </div>
                      <Badge>Resolved</Badge>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Bug className="h-6 w-6 text-red-500" />
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">High Latency</p>
                        <p className="text-xs text-muted-foreground">Agent ID: 45901</p>
                      </div>
                      <Badge>Investigating</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Infrastructure Tab */}
          <TabsContent value="infrastructure" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Kubernetes Clusters</CardTitle>
                  <CardDescription>Resource utilization</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>CPU Usage</span>
                        <span className="text-sm text-muted-foreground">78%</span>
                      </div>
                      <Progress value={78} className="bg-blue-100" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Memory Usage</span>
                        <span className="text-sm text-muted-foreground">65%</span>
                      </div>
                      <Progress value={65} className="bg-green-100" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Storage Usage</span>
                        <span className="text-sm text-muted-foreground">45%</span>
                      </div>
                      <Progress value={45} className="bg-yellow-100" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Network Metrics</CardTitle>
                  <CardDescription>Traffic and latency</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Throughput</span>
                        <span className="text-sm text-muted-foreground">1.2 GB/s</span>
                      </div>
                      <Progress value={82} className="bg-purple-100" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Packet Loss</span>
                        <span className="text-sm text-muted-foreground">0.01%</span>
                      </div>
                      <Progress value={99} className="bg-red-100" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Database Health</CardTitle>
                  <CardDescription>Supabase metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Query Performance</span>
                        <span className="text-sm text-muted-foreground">95ms avg</span>
                      </div>
                      <Progress value={88} className="bg-blue-100" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Connection Pool</span>
                        <span className="text-sm text-muted-foreground">75%</span>
                      </div>
                      <Progress value={75} className="bg-green-100" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Security Status</CardTitle>
                  <CardDescription>Last 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Shield className="h-6 w-6 text-green-500" />
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">Threat Detection</p>
                        <p className="text-xs text-muted-foreground">No threats detected</p>
                      </div>
                      <Badge variant="outline">Secure</Badge>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Shield className="h-6 w-6 text-yellow-500" />
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">Access Attempts</p>
                        <p className="text-xs text-muted-foreground">2 failed attempts</p>
                      </div>
                      <Badge variant="outline">Monitored</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Compliance Status</CardTitle>
                  <CardDescription>Regulatory checks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Shield className="h-6 w-6 text-green-500" />
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">GDPR Compliance</p>
                        <p className="text-xs text-muted-foreground">All checks passed</p>
                      </div>
                      <Badge variant="outline">Compliant</Badge>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Shield className="h-6 w-6 text-green-500" />
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">Data Encryption</p>
                        <p className="text-xs text-muted-foreground">AES-256 active</p>
                      </div>
                      <Badge variant="outline">Secured</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Audit Log</CardTitle>
                  <CardDescription>Recent security events</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <History className="h-6 w-6 text-blue-500" />
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">New API Key Generated</p>
                        <p className="text-xs text-muted-foreground">10 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <History className="h-6 w-6 text-purple-500" />
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">Permission Updated</p>
                        <p className="text-xs text-muted-foreground">1 hour ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </ProtectedPage>
  )
}
