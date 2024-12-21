"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bot, Code2, FileText, GitBranch, Layers, Settings } from "lucide-react"

export default function PlaybooksPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent dark:from-primary dark:to-primary/70">
          Playbooks
        </h1>
        <p className="text-lg text-foreground/80 dark:text-foreground/80 leading-relaxed">
          Step-by-step guides and best practices for common scenarios
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="border-none shadow-md">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5 text-primary" />
              <CardTitle>Agent Development</CardTitle>
            </div>
            <CardDescription>Building AI agents</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span className="text-sm">Basic Agent Setup</span>
                <Badge>Beginner</Badge>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm">Custom Actions</span>
                <Badge>Intermediate</Badge>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm">Advanced Workflows</span>
                <Badge>Advanced</Badge>
              </li>
            </ul>
            <Button variant="outline" className="w-full mt-4">View Guides</Button>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Code2 className="h-5 w-5 text-primary" />
              <CardTitle>Integration Patterns</CardTitle>
            </div>
            <CardDescription>Common integration scenarios</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span className="text-sm">API Integration</span>
                <Badge>Guide</Badge>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm">Database Setup</span>
                <Badge>Guide</Badge>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm">Authentication</span>
                <Badge>Guide</Badge>
              </li>
            </ul>
            <Button variant="outline" className="w-full mt-4">View Patterns</Button>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Layers className="h-5 w-5 text-primary" />
              <CardTitle>Deployment</CardTitle>
            </div>
            <CardDescription>Production deployment guides</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span className="text-sm">Cloud Setup</span>
                <Badge>Guide</Badge>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm">Scaling</span>
                <Badge>Guide</Badge>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm">Monitoring</span>
                <Badge>Guide</Badge>
              </li>
            </ul>
            <Button variant="outline" className="w-full mt-4">View Guides</Button>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-primary" />
              <CardTitle>Use Cases</CardTitle>
            </div>
            <CardDescription>Common implementation scenarios</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span className="text-sm">Customer Support</span>
                <Badge>Guide</Badge>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm">Data Analysis</span>
                <Badge>Guide</Badge>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm">Process Automation</span>
                <Badge>Guide</Badge>
              </li>
            </ul>
            <Button variant="outline" className="w-full mt-4">View Cases</Button>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Settings className="h-5 w-5 text-primary" />
              <CardTitle>Best Practices</CardTitle>
            </div>
            <CardDescription>Recommended patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span className="text-sm">Code Organization</span>
                <Badge>Guide</Badge>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm">Testing</span>
                <Badge>Guide</Badge>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm">Security</span>
                <Badge>Guide</Badge>
              </li>
            </ul>
            <Button variant="outline" className="w-full mt-4">View Practices</Button>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <GitBranch className="h-5 w-5 text-primary" />
              <CardTitle>MLOps</CardTitle>
            </div>
            <CardDescription>Operations and maintenance</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span className="text-sm">CI/CD Setup</span>
                <Badge>Guide</Badge>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm">Version Control</span>
                <Badge>Guide</Badge>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm">Infrastructure</span>
                <Badge>Guide</Badge>
              </li>
            </ul>
            <Button variant="outline" className="w-full mt-4">View Guides</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
