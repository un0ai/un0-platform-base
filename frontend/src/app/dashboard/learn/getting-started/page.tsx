"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { BetaPageWrapper } from "@/components/beta-notice"
import {
  Rocket,
  Book,
  CheckCircle2,
  PlayCircle,
  Code,
  FileText,
  Lightbulb,
  ArrowRight,
  GraduationCap,
  Settings,
  Users,
  Zap
} from "lucide-react"

const quickStartGuides = [
  {
    title: "Platform Overview",
    description: "Learn about the key features and capabilities",
    icon: <Rocket className="h-5 w-5" />,
    time: "5 min"
  },
  {
    title: "First Integration",
    description: "Set up your first AI agent integration",
    icon: <Code className="h-5 w-5" />,
    time: "10 min"
  },
  {
    title: "Basic Configuration",
    description: "Configure basic platform settings",
    icon: <Settings className="h-5 w-5" />,
    time: "7 min"
  }
]

const tutorials = [
  {
    title: "Building Your First Agent",
    level: "Beginner",
    duration: "15 min",
    topics: ["Agent Setup", "Basic Configuration", "Testing"]
  },
  {
    title: "Advanced Integrations",
    level: "Intermediate",
    duration: "25 min",
    topics: ["API Integration", "Custom Logic", "Deployment"]
  },
  {
    title: "Performance Optimization",
    level: "Advanced",
    duration: "20 min",
    topics: ["Monitoring", "Scaling", "Best Practices"]
  }
]

export default function GettingStartedPage() {
  return (
    <div className="flex h-full flex-col space-y-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Getting Started</h2>
          <p className="text-muted-foreground">
            Welcome to the platform! Let's help you get started.
          </p>
        </div>
      </div>

      <BetaPageWrapper>
        <div className="relative">
          <div className="absolute inset-0 bg-yellow-500/5 dark:bg-yellow-400/5 border-2 border-yellow-500/20 dark:border-yellow-400/20 rounded-lg" />
          <div className="relative">
            <div className="flex-1 space-y-6 p-8 pt-6">
              <Tabs defaultValue="quickstart" className="space-y-6">
                <TabsList>
                  <TabsTrigger value="quickstart">Quick Start</TabsTrigger>
                  <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
                  <TabsTrigger value="resources">Resources</TabsTrigger>
                  <TabsTrigger value="support">Support</TabsTrigger>
                </TabsList>

                <TabsContent value="quickstart" className="space-y-6">
                  <Alert>
                    <Lightbulb className="h-4 w-4" />
                    <AlertTitle>Welcome to the Platform!</AlertTitle>
                    <AlertDescription>
                      Follow these quick start guides to get up and running with our platform.
                    </AlertDescription>
                  </Alert>

                  <div className="grid gap-6 md:grid-cols-3">
                    {quickStartGuides.map((guide, i) => (
                      <Card key={i} className="border-none shadow-md">
                        <CardHeader>
                          <div className="flex items-center space-x-2">
                            {guide.icon}
                            <CardTitle className="text-lg">{guide.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">{guide.description}</p>
                          <div className="flex items-center justify-between">
                            <Badge variant="outline">{guide.time}</Badge>
                            <Button variant="outline" size="sm">
                              Start
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <CardTitle>Getting Started Checklist</CardTitle>
                      </div>
                      <CardDescription>Complete these steps to set up your environment</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { task: "Create your account", status: "completed" },
                          { task: "Configure workspace settings", status: "pending" },
                          { task: "Set up your first integration", status: "pending" },
                          { task: "Run a test deployment", status: "pending" }
                        ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between p-4 rounded-lg border">
                            <div className="flex items-center space-x-2">
                              {item.status === "completed" ? (
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                              ) : (
                                <div className="h-4 w-4 rounded-full border-2" />
                              )}
                              <span className="font-medium">{item.task}</span>
                            </div>
                            <Badge
                              variant={item.status === "completed" ? "default" : "secondary"}
                            >
                              {item.status}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="tutorials" className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    {tutorials.map((tutorial, i) => (
                      <Card key={i} className="border-none shadow-md">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <GraduationCap className="h-5 w-5 text-primary" />
                              <CardTitle>{tutorial.title}</CardTitle>
                            </div>
                            <Badge variant="outline">{tutorial.level}</Badge>
                          </div>
                          <CardDescription>Duration: {tutorial.duration}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                              {tutorial.topics.map((topic, j) => (
                                <Badge key={j} variant="secondary">
                                  {topic}
                                </Badge>
                              ))}
                            </div>
                            <Button className="w-full">
                              <PlayCircle className="mr-2 h-4 w-4" />
                              Start Tutorial
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="resources" className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Book className="h-5 w-5 text-primary" />
                          <CardTitle>Documentation</CardTitle>
                        </div>
                        <CardDescription>Comprehensive guides and references</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            { title: "API Reference", description: "Complete API documentation" },
                            { title: "Integration Guides", description: "Step-by-step integration tutorials" },
                            { title: "Best Practices", description: "Recommended patterns and practices" }
                          ].map((resource, i) => (
                            <div key={i} className="p-4 rounded-lg border">
                              <h4 className="font-medium">{resource.title}</h4>
                              <p className="text-sm text-muted-foreground mt-1">
                                {resource.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <FileText className="h-5 w-5 text-primary" />
                          <CardTitle>Sample Projects</CardTitle>
                        </div>
                        <CardDescription>Example implementations and templates</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            { title: "Basic Agent", stack: ["Python", "REST API"] },
                            { title: "Custom Integration", stack: ["Node.js", "GraphQL"] },
                            { title: "Advanced Workflow", stack: ["Python", "Kubernetes"] }
                          ].map((project, i) => (
                            <div key={i} className="p-4 rounded-lg border">
                              <h4 className="font-medium">{project.title}</h4>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {project.stack.map((tech, j) => (
                                  <Badge key={j} variant="secondary">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="support" className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Users className="h-5 w-5 text-primary" />
                          <CardTitle>Community Support</CardTitle>
                        </div>
                        <CardDescription>Connect with the community</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            { channel: "Discord Community", members: "5,000+ members" },
                            { channel: "GitHub Discussions", threads: "1,000+ threads" },
                            { channel: "Stack Overflow", tags: "500+ questions" }
                          ].map((community, i) => (
                            <div key={i} className="p-4 rounded-lg border">
                              <h4 className="font-medium">{community.channel}</h4>
                              <p className="text-sm text-muted-foreground mt-1">
                                {Object.values(community)[1]}
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Zap className="h-5 w-5 text-primary" />
                          <CardTitle>Quick Help</CardTitle>
                        </div>
                        <CardDescription>Get immediate assistance</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <Alert>
                            <AlertTitle>Need Help?</AlertTitle>
                            <AlertDescription>
                              Our support team is available 24/7 to help you with any questions.
                            </AlertDescription>
                          </Alert>
                          <div className="space-y-4">
                            <Button className="w-full" variant="outline">
                              View Documentation
                            </Button>
                            <Button className="w-full">
                              Contact Support
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </BetaPageWrapper>
    </div>
  )
}
