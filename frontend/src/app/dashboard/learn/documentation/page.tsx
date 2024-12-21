"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bot, Code2, FileText, GitBranch, Layers, Settings } from "lucide-react"

export default function DocumentationPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent dark:from-primary dark:to-primary/70">
          Documentation
        </h1>
        <p className="text-lg text-foreground/80 dark:text-foreground/80 leading-relaxed">
          Comprehensive documentation for the un0.ai platform
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="border-none shadow-md">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5 text-primary" />
              <CardTitle>Platform Overview</CardTitle>
            </div>
            <CardDescription>Introduction to un0.ai platform</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span className="text-sm">Introduction</span>
                <Badge>5 min</Badge>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm">Core Concepts</span>
                <Badge>10 min</Badge>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm">Architecture</span>
                <Badge>15 min</Badge>
              </li>
            </ul>
            <Button variant="outline" className="w-full mt-4">Read More</Button>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Code2 className="h-5 w-5 text-primary" />
              <CardTitle>API Reference</CardTitle>
            </div>
            <CardDescription>Complete API documentation</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span className="text-sm">REST API</span>
                <Badge>Reference</Badge>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm">GraphQL API</span>
                <Badge>Reference</Badge>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm">WebSocket API</span>
                <Badge>Reference</Badge>
              </li>
            </ul>
            <Button variant="outline" className="w-full mt-4">View APIs</Button>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Layers className="h-5 w-5 text-primary" />
              <CardTitle>SDKs & Libraries</CardTitle>
            </div>
            <CardDescription>Official SDKs and client libraries</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span className="text-sm">Python SDK</span>
                <Badge>v2.0.0</Badge>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm">JavaScript SDK</span>
                <Badge>v2.0.0</Badge>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm">Go SDK</span>
                <Badge>Beta</Badge>
              </li>
            </ul>
            <Button variant="outline" className="w-full mt-4">View SDKs</Button>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-primary" />
              <CardTitle>Tutorials</CardTitle>
            </div>
            <CardDescription>Step-by-step guides and examples</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span className="text-sm">Quick Start</span>
                <Badge>Beginner</Badge>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm">Building Agents</span>
                <Badge>Intermediate</Badge>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm">Advanced Workflows</span>
                <Badge>Advanced</Badge>
              </li>
            </ul>
            <Button variant="outline" className="w-full mt-4">Start Learning</Button>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Settings className="h-5 w-5 text-primary" />
              <CardTitle>Integration Guides</CardTitle>
            </div>
            <CardDescription>Third-party integration guides</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span className="text-sm">Authentication</span>
                <Badge>Guide</Badge>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm">Webhooks</span>
                <Badge>Guide</Badge>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm">Custom Actions</span>
                <Badge>Guide</Badge>
              </li>
            </ul>
            <Button variant="outline" className="w-full mt-4">View Guides</Button>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <GitBranch className="h-5 w-5 text-primary" />
              <CardTitle>Best Practices</CardTitle>
            </div>
            <CardDescription>Recommended patterns and practices</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span className="text-sm">Architecture</span>
                <Badge>Guide</Badge>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm">Security</span>
                <Badge>Guide</Badge>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm">Performance</span>
                <Badge>Guide</Badge>
              </li>
            </ul>
            <Button variant="outline" className="w-full mt-4">Learn More</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
