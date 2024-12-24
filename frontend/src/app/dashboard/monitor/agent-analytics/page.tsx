"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { BetaPageWrapper, BetaRestrictedAction } from "@/components/beta-notice"
import {
  Bot,
  Activity,
  BarChart2,
  Clock,
  Settings,
  RefreshCw,
  Zap,
  MessageSquare,
  Users,
  Brain,
  Target,
  TrendingUp,
  AlertCircle
} from "lucide-react"

const agentMetrics = [
  {
    name: "Response Time",
    current: "120ms",
    change: "-15ms",
    trend: "down"
  },
  {
    name: "Success Rate",
    current: "98.5%",
    change: "+0.5%",
    trend: "up"
  },
  {
    name: "Throughput",
    current: "850/min",
    change: "+50/min",
    trend: "up"
  },
  {
    name: "Active Sessions",
    current: "245",
    change: "+15",
    trend: "up"
  }
]

const topAgents = [
  {
    name: "Customer Service Agent",
    status: "active",
    performance: 98,
    requests: "1.2k/hour"
  },
  {
    name: "Data Analysis Agent",
    status: "active",
    performance: 95,
    requests: "800/hour"
  },
  {
    name: "Code Assistant Agent",
    status: "active",
    performance: 97,
    requests: "950/hour"
  }
]

export default function AgentAnalyticsPage() {
  return (
    <div className="flex h-full flex-col space-y-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Agent Analytics</h2>
          <p className="text-muted-foreground">
            Monitor and analyze your AI agents' performance and behavior
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
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
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
                  <TabsTrigger value="performance">Performance</TabsTrigger>
                  <TabsTrigger value="behavior">Behavior</TabsTrigger>
                  <TabsTrigger value="insights">Insights</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Agents</CardTitle>
                        <Bot className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">24</div>
                        <p className="text-xs text-muted-foreground">
                          +2 from last hour
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
                        <Target className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">98.5%</div>
                        <p className="text-xs text-muted-foreground">
                          +0.5% from average
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Response Time</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">120ms</div>
                        <p className="text-xs text-muted-foreground">
                          -15ms from average
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">45.2K</div>
                        <p className="text-xs text-muted-foreground">
                          Last 24 hours
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Brain className="h-5 w-5 text-primary" />
                          <CardTitle>Top Performing Agents</CardTitle>
                        </div>
                        <CardDescription>Agent performance metrics</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {topAgents.map((agent, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-lg border">
                              <div>
                                <p className="font-medium">{agent.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  {agent.requests}
                                </p>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Badge variant="outline">{agent.performance}%</Badge>
                                <Badge
                                  variant={agent.status === "active" ? "default" : "secondary"}
                                >
                                  {agent.status}
                                </Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Activity className="h-5 w-5 text-primary" />
                          <CardTitle>Performance Metrics</CardTitle>
                        </div>
                        <CardDescription>Real-time agent metrics</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {agentMetrics.map((metric, i) => (
                            <div key={i} className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="font-medium">{metric.name}</span>
                                <div className="flex items-center space-x-2">
                                  <span>{metric.current}</span>
                                  <Badge
                                    variant={metric.trend === "up" ? "default" : "secondary"}
                                  >
                                    {metric.change}
                                  </Badge>
                                </div>
                              </div>
                              <Progress
                                value={parseInt(metric.current) || 75}
                                className="h-1"
                              />
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="performance" className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-5 w-5 text-primary" />
                          <CardTitle>Performance Analysis</CardTitle>
                        </div>
                        <CardDescription>Detailed agent performance metrics</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            { metric: "Task Completion Rate", value: "98.5%", trend: "+0.5%" },
                            { metric: "Average Response Time", value: "120ms", trend: "-15ms" },
                            { metric: "Accuracy Score", value: "96.8%", trend: "+0.3%" }
                          ].map((item, i) => (
                            <div key={i} className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="font-medium">{item.metric}</span>
                                <div className="flex items-center space-x-2">
                                  <Badge variant="outline">{item.value}</Badge>
                                  <span className="text-sm text-muted-foreground">
                                    {item.trend}
                                  </span>
                                </div>
                              </div>
                              <Progress value={parseInt(item.value)} className="h-1" />
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Users className="h-5 w-5 text-primary" />
                          <CardTitle>User Satisfaction</CardTitle>
                        </div>
                        <CardDescription>Agent interaction quality metrics</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            { metric: "User Rating", value: "4.8/5", responses: "2.5k" },
                            { metric: "Resolution Rate", value: "95%", responses: "3.2k" },
                            { metric: "Response Quality", value: "97%", responses: "2.8k" }
                          ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-lg border">
                              <div>
                                <p className="font-medium">{item.metric}</p>
                                <p className="text-sm text-muted-foreground">
                                  Based on {item.responses} responses
                                </p>
                              </div>
                              <Badge variant="outline">{item.value}</Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="behavior" className="space-y-6">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <Brain className="h-5 w-5 text-primary" />
                        <CardTitle>Agent Behavior Analysis</CardTitle>
                      </div>
                      <CardDescription>Behavioral patterns and decision metrics</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {[
                          {
                            category: "Decision Making",
                            metrics: [
                              { name: "Accuracy", value: "98.5%" },
                              { name: "Consistency", value: "96.2%" }
                            ]
                          },
                          {
                            category: "Learning Adaptation",
                            metrics: [
                              { name: "Improvement Rate", value: "0.8%" },
                              { name: "Pattern Recognition", value: "95.5%" }
                            ]
                          },
                          {
                            category: "Error Handling",
                            metrics: [
                              { name: "Recovery Rate", value: "99.1%" },
                              { name: "Prevention Score", value: "97.3%" }
                            ]
                          }
                        ].map((category, i) => (
                          <div key={i} className="space-y-2">
                            <h3 className="font-medium">{category.category}</h3>
                            <div className="grid gap-4 md:grid-cols-2">
                              {category.metrics.map((metric, j) => (
                                <div key={j} className="p-4 rounded-lg border">
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm">{metric.name}</span>
                                    <Badge variant="outline">{metric.value}</Badge>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="insights" className="space-y-6">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <Zap className="h-5 w-5 text-primary" />
                        <CardTitle>Performance Insights</CardTitle>
                      </div>
                      <CardDescription>Key findings and recommendations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Alert>
                          <Activity className="h-4 w-4" />
                          <AlertTitle>Performance Trending Up</AlertTitle>
                          <AlertDescription>
                            Agent performance has improved by 2.5% over the last 7 days.
                          </AlertDescription>
                        </Alert>

                        <div className="space-y-4">
                          {[
                            {
                              title: "Peak Performance Times",
                              description: "Agents show optimal performance during 9AM-2PM UTC"
                            },
                            {
                              title: "Resource Optimization",
                              description: "Consider scaling during high-demand periods"
                            },
                            {
                              title: "Learning Patterns",
                              description: "Positive trend in adaptation to new scenarios"
                            }
                          ].map((insight, i) => (
                            <div key={i} className="p-4 rounded-lg border">
                              <h4 className="font-medium">{insight.title}</h4>
                              <p className="text-sm text-muted-foreground mt-1">
                                {insight.description}
                              </p>
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
