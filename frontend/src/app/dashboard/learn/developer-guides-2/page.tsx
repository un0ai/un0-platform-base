"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { BetaPageWrapper } from "@/components/beta-notice"
import {
  Code,
  Book,
  FileText,
  Terminal,
  Database,
  Cloud,
  Settings,
  Layers,
  Workflow,
  GitBranch,
  Monitor,
  Shield,
  Search,
  ArrowRight
} from "lucide-react"

const guides = [
  {
    category: "Getting Started",
    items: [
      {
        title: "Environment Setup",
        description: "Set up your development environment",
        difficulty: "Beginner",
        time: "15 min"
      },
      {
        title: "Basic Concepts",
        description: "Learn fundamental platform concepts",
        difficulty: "Beginner",
        time: "20 min"
      }
    ]
  },
  {
    category: "Core Development",
    items: [
      {
        title: "API Integration",
        description: "Integrate with our REST and GraphQL APIs",
        difficulty: "Intermediate",
        time: "30 min"
      },
      {
        title: "Custom Agents",
        description: "Build and deploy custom AI agents",
        difficulty: "Advanced",
        time: "45 min"
      }
    ]
  },
  {
    category: "Advanced Topics",
    items: [
      {
        title: "Performance Optimization",
        description: "Optimize your agent's performance",
        difficulty: "Advanced",
        time: "40 min"
      },
      {
        title: "Security Best Practices",
        description: "Implement security measures",
        difficulty: "Advanced",
        time: "35 min"
      }
    ]
  }
]

const apiEndpoints = [
  {
    name: "Agent Management",
    method: "POST",
    endpoint: "/api/v1/agents",
    description: "Create and manage AI agents"
  },
  {
    name: "Model Deployment",
    method: "PUT",
    endpoint: "/api/v1/models",
    description: "Deploy and update AI models"
  },
  {
    name: "Analytics",
    method: "GET",
    endpoint: "/api/v1/analytics",
    description: "Retrieve performance metrics"
  }
]

export default function DeveloperGuidesPage() {
  return (
    <div className="flex h-full flex-col space-y-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Developer Guides</h2>
          <p className="text-muted-foreground">
            Comprehensive guides and documentation for developers
          </p>
        </div>
        <Button variant="outline">
          <Search className="mr-2 h-4 w-4" />
          Search Docs
        </Button>
      </div>

      <BetaPageWrapper>
        <div className="relative">
          <div className="absolute inset-0 bg-yellow-500/5 dark:bg-yellow-400/5 border-2 border-yellow-500/20 dark:border-yellow-400/20 rounded-lg" />
          <div className="relative">
            <div className="flex-1 space-y-6 p-8 pt-6">
              <Tabs defaultValue="guides" className="space-y-6">
                <TabsList>
                  <TabsTrigger value="guides">Guides</TabsTrigger>
                  <TabsTrigger value="api">API Reference</TabsTrigger>
                  <TabsTrigger value="sdks">SDKs & Tools</TabsTrigger>
                  <TabsTrigger value="examples">Examples</TabsTrigger>
                </TabsList>

                <TabsContent value="guides" className="space-y-6">
                  {guides.map((section, i) => (
                    <Card key={i} className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Book className="h-5 w-5 text-primary" />
                          <CardTitle>{section.category}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-4 md:grid-cols-2">
                          {section.items.map((guide, j) => (
                            <div key={j} className="p-4 rounded-lg border">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="font-medium">{guide.title}</h3>
                                <Badge variant="outline">{guide.difficulty}</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mb-4">
                                {guide.description}
                              </p>
                              <div className="flex items-center justify-between">
                                <Badge variant="secondary">{guide.time}</Badge>
                                <Button variant="outline" size="sm">
                                  Read Guide
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="api" className="space-y-6">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <Code className="h-5 w-5 text-primary" />
                        <CardTitle>API Reference</CardTitle>
                      </div>
                      <CardDescription>Complete API documentation and endpoints</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="grid gap-4">
                          {apiEndpoints.map((api, i) => (
                            <div key={i} className="p-4 rounded-lg border">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center space-x-2">
                                  <Badge>{api.method}</Badge>
                                  <h3 className="font-medium">{api.name}</h3>
                                </div>
                                <code className="text-sm bg-secondary px-2 py-1 rounded">
                                  {api.endpoint}
                                </code>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {api.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Terminal className="h-5 w-5 text-primary" />
                          <CardTitle>Authentication</CardTitle>
                        </div>
                        <CardDescription>API authentication methods</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            { title: "API Keys", description: "Secure key-based authentication" },
                            { title: "OAuth 2.0", description: "Token-based authorization" },
                            { title: "JWT", description: "JSON Web Token authentication" }
                          ].map((auth, i) => (
                            <div key={i} className="p-4 rounded-lg border">
                              <h4 className="font-medium">{auth.title}</h4>
                              <p className="text-sm text-muted-foreground mt-1">
                                {auth.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Database className="h-5 w-5 text-primary" />
                          <CardTitle>Data Models</CardTitle>
                        </div>
                        <CardDescription>API data structure reference</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            { title: "Agent Model", description: "AI agent configuration schema" },
                            { title: "Workflow Model", description: "Workflow definition schema" },
                            { title: "Analytics Model", description: "Performance metrics schema" }
                          ].map((model, i) => (
                            <div key={i} className="p-4 rounded-lg border">
                              <h4 className="font-medium">{model.title}</h4>
                              <p className="text-sm text-muted-foreground mt-1">
                                {model.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="sdks" className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Code className="h-5 w-5 text-primary" />
                          <CardTitle>Official SDKs</CardTitle>
                        </div>
                        <CardDescription>Official client libraries and SDKs</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            { language: "Python", version: "v2.1.0", status: "stable" },
                            { language: "JavaScript", version: "v1.8.0", status: "stable" },
                            { language: "Go", version: "v1.2.0", status: "beta" }
                          ].map((sdk, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-lg border">
                              <div>
                                <h4 className="font-medium">{sdk.language}</h4>
                                <p className="text-sm text-muted-foreground">
                                  Version: {sdk.version}
                                </p>
                              </div>
                              <Badge variant="outline">{sdk.status}</Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Terminal className="h-5 w-5 text-primary" />
                          <CardTitle>Developer Tools</CardTitle>
                        </div>
                        <CardDescription>Tools and utilities for developers</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            { tool: "CLI Tool", description: "Command-line interface" },
                            { tool: "VS Code Extension", description: "IDE integration" },
                            { tool: "Postman Collection", description: "API testing" }
                          ].map((tool, i) => (
                            <div key={i} className="p-4 rounded-lg border">
                              <h4 className="font-medium">{tool.tool}</h4>
                              <p className="text-sm text-muted-foreground mt-1">
                                {tool.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="examples" className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <FileText className="h-5 w-5 text-primary" />
                          <CardTitle>Code Examples</CardTitle>
                        </div>
                        <CardDescription>Sample implementations and snippets</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            { title: "Basic Integration", stack: ["Python", "REST"] },
                            { title: "Custom Agent", stack: ["Node.js", "GraphQL"] },
                            { title: "Workflow Automation", stack: ["Python", "SDK"] }
                          ].map((example, i) => (
                            <div key={i} className="p-4 rounded-lg border">
                              <h4 className="font-medium">{example.title}</h4>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {example.stack.map((tech, j) => (
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

                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <GitBranch className="h-5 w-5 text-primary" />
                          <CardTitle>Sample Projects</CardTitle>
                        </div>
                        <CardDescription>Complete project examples</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            {
                              title: "E-commerce Bot",
                              description: "Customer service AI agent",
                              tech: ["Python", "React"]
                            },
                            {
                              title: "Data Analyzer",
                              description: "Analytics processing agent",
                              tech: ["Python", "pandas"]
                            },
                            {
                              title: "Workflow Manager",
                              description: "Process automation system",
                              tech: ["Node.js", "Express"]
                            }
                          ].map((project, i) => (
                            <div key={i} className="p-4 rounded-lg border">
                              <h4 className="font-medium">{project.title}</h4>
                              <p className="text-sm text-muted-foreground mt-1">
                                {project.description}
                              </p>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {project.tech.map((t, j) => (
                                  <Badge key={j} variant="secondary">
                                    {t}
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
              </Tabs>
            </div>
          </div>
        </div>
      </BetaPageWrapper>
    </div>
  )
}
