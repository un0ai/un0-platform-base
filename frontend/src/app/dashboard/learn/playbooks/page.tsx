"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { BetaPageWrapper } from "@/components/beta-notice"
import {
  Book,
  FileText,
  Play,
  Plus,
  Search,
  Settings,
  Share2,
  Star,
  Users,
  Copy,
  ArrowRight,
  Clock,
  Tags,
  Bookmark,
  Shield
} from "lucide-react"

const featuredPlaybooks = [
  {
    title: "Customer Service Automation",
    description: "Automate customer support workflows",
    category: "Support",
    author: "Platform Team",
    rating: 4.8,
    uses: 1200
  },
  {
    title: "Data Processing Pipeline",
    description: "ETL workflow for data processing",
    category: "Data",
    author: "Data Team",
    rating: 4.7,
    uses: 850
  },
  {
    title: "Security Incident Response",
    description: "Handle security incidents automatically",
    category: "Security",
    author: "Security Team",
    rating: 4.9,
    uses: 600
  }
]

const categories = [
  { name: "Support", count: 25 },
  { name: "Data Processing", count: 18 },
  { name: "Security", count: 15 },
  { name: "DevOps", count: 12 },
  { name: "Analytics", count: 20 }
]

const recentPlaybooks = [
  {
    title: "ML Model Deployment",
    description: "Automated ML model deployment workflow",
    author: "ML Team",
    lastUpdated: "2 days ago"
  },
  {
    title: "API Integration",
    description: "Third-party API integration setup",
    author: "Integration Team",
    lastUpdated: "3 days ago"
  },
  {
    title: "Log Analysis",
    description: "Automated log analysis and alerting",
    author: "DevOps Team",
    lastUpdated: "4 days ago"
  }
]

export default function PlaybooksPage() {
  return (
    <div className="flex h-full flex-col space-y-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Playbooks</h2>
          <p className="text-muted-foreground">
            Discover and manage automation playbooks
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Playbook
          </Button>
        </div>
      </div>

      <BetaPageWrapper>
        <div className="relative">
          <div className="absolute inset-0 bg-yellow-500/5 dark:bg-yellow-400/5 border-2 border-yellow-500/20 dark:border-yellow-400/20 rounded-lg" />
          <div className="relative">
            <div className="flex-1 space-y-6 p-8 pt-6">
              <Tabs defaultValue="discover" className="space-y-6">
                <TabsList>
                  <TabsTrigger value="discover">Discover</TabsTrigger>
                  <TabsTrigger value="my-playbooks">My Playbooks</TabsTrigger>
                  <TabsTrigger value="templates">Templates</TabsTrigger>
                  <TabsTrigger value="shared">Shared</TabsTrigger>
                </TabsList>

                <TabsContent value="discover" className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-3">
                    {featuredPlaybooks.map((playbook, i) => (
                      <Card key={i} className="border-none shadow-md">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <Badge variant="outline">{playbook.category}</Badge>
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <span className="text-sm">{playbook.rating}</span>
                            </div>
                          </div>
                          <CardTitle className="text-lg">{playbook.title}</CardTitle>
                          <CardDescription>{playbook.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">By {playbook.author}</span>
                              <span className="text-muted-foreground">{playbook.uses} uses</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button className="flex-1" variant="outline">
                                <Copy className="mr-2 h-4 w-4" />
                                Clone
                              </Button>
                              <Button className="flex-1">
                                <Play className="mr-2 h-4 w-4" />
                                Run
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Tags className="h-5 w-5 text-primary" />
                          <CardTitle>Categories</CardTitle>
                        </div>
                        <CardDescription>Browse playbooks by category</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          {categories.map((category, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between p-4 rounded-lg border"
                            >
                              <span className="font-medium">{category.name}</span>
                              <Badge variant="secondary">{category.count}</Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-5 w-5 text-primary" />
                          <CardTitle>Recent Playbooks</CardTitle>
                        </div>
                        <CardDescription>Recently updated playbooks</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {recentPlaybooks.map((playbook, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-lg border">
                              <div>
                                <h4 className="font-medium">{playbook.title}</h4>
                                <p className="text-sm text-muted-foreground">
                                  {playbook.description}
                                </p>
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {playbook.lastUpdated}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="my-playbooks" className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Book className="h-5 w-5 text-primary" />
                          <CardTitle>My Playbooks</CardTitle>
                        </div>
                        <CardDescription>Playbooks you've created</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            {
                              title: "Custom Data Pipeline",
                              status: "active",
                              lastRun: "1 hour ago"
                            },
                            {
                              title: "Error Monitoring",
                              status: "draft",
                              lastRun: "1 day ago"
                            },
                            {
                              title: "Backup Workflow",
                              status: "active",
                              lastRun: "3 hours ago"
                            }
                          ].map((playbook, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-lg border">
                              <div>
                                <h4 className="font-medium">{playbook.title}</h4>
                                <p className="text-sm text-muted-foreground">
                                  Last run: {playbook.lastRun}
                                </p>
                              </div>
                              <Badge variant={playbook.status === "active" ? "default" : "secondary"}>
                                {playbook.status}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Bookmark className="h-5 w-5 text-primary" />
                          <CardTitle>Saved Playbooks</CardTitle>
                        </div>
                        <CardDescription>Playbooks you've bookmarked</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            {
                              title: "ML Model Training",
                              author: "ML Team",
                              saved: "2 days ago"
                            },
                            {
                              title: "API Monitoring",
                              author: "Platform Team",
                              saved: "5 days ago"
                            },
                            {
                              title: "Security Scan",
                              author: "Security Team",
                              saved: "1 week ago"
                            }
                          ].map((playbook, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-lg border">
                              <div>
                                <h4 className="font-medium">{playbook.title}</h4>
                                <p className="text-sm text-muted-foreground">
                                  By {playbook.author}
                                </p>
                              </div>
                              <Button variant="outline" size="sm">
                                <Play className="mr-2 h-4 w-4" />
                                Run
                              </Button>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="templates" className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-3">
                    {[
                      {
                        title: "Basic Automation",
                        description: "Simple automation workflow template",
                        category: "General",
                        complexity: "Basic"
                      },
                      {
                        title: "Data Processing",
                        description: "Template for data processing workflows",
                        category: "Data",
                        complexity: "Intermediate"
                      },
                      {
                        title: "Advanced Integration",
                        description: "Complex integration workflow template",
                        category: "Integration",
                        complexity: "Advanced"
                      }
                    ].map((template, i) => (
                      <Card key={i} className="border-none shadow-md">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <Badge variant="outline">{template.category}</Badge>
                            <Badge variant="secondary">{template.complexity}</Badge>
                          </div>
                          <CardTitle className="text-lg">{template.title}</CardTitle>
                          <CardDescription>{template.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button className="w-full">
                            <Plus className="mr-2 h-4 w-4" />
                            Use Template
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="shared" className="space-y-6">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <Share2 className="h-5 w-5 text-primary" />
                        <CardTitle>Shared Playbooks</CardTitle>
                      </div>
                      <CardDescription>Playbooks shared with you</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            title: "Team Workflow",
                            sharedBy: "John Doe",
                            team: "Platform",
                            access: "Edit"
                          },
                          {
                            title: "Deployment Process",
                            sharedBy: "Jane Smith",
                            team: "DevOps",
                            access: "View"
                          },
                          {
                            title: "Monitoring Setup",
                            sharedBy: "Mike Johnson",
                            team: "SRE",
                            access: "Edit"
                          }
                        ].map((shared, i) => (
                          <div key={i} className="flex items-center justify-between p-4 rounded-lg border">
                            <div>
                              <h4 className="font-medium">{shared.title}</h4>
                              <p className="text-sm text-muted-foreground">
                                Shared by {shared.sharedBy} ({shared.team})
                              </p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline">{shared.access}</Badge>
                              <Button variant="outline" size="sm">
                                <Play className="mr-2 h-4 w-4" />
                                Run
                              </Button>
                            </div>
                          </div>
                        ))}
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
