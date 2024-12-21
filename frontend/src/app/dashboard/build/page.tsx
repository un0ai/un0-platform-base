"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  PlayCircle,
  Eye,
  GitBranch,
  Database,
  Code2,
  Settings2,
  TestTube,
  Zap,
} from "lucide-react"

export default function BuildPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Build
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Create and develop your AI solutions
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="group relative overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4">
              <PlayCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Playground</h3>
            <p className="mt-2 text-muted-foreground">
              Test and experiment with AI models in real-time
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-4 w-full justify-start p-0 hover:bg-transparent hover:text-primary"
            >
              <Link href="/dashboard/build/playground">
                Get started
                <span className="sr-only">Playground</span>
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4">
              <Eye className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Visual Agent Builder</h3>
            <p className="mt-2 text-muted-foreground">
              Create AI agents with our visual interface
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-4 w-full justify-start p-0 hover:bg-transparent hover:text-primary"
            >
              <Link href="/dashboard/build/visual-agent-builder">
                Get started
                <span className="sr-only">Visual Agent Builder</span>
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4">
              <GitBranch className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Workflow Orchestration</h3>
            <p className="mt-2 text-muted-foreground">
              Design and manage complex AI workflows
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-4 w-full justify-start p-0 hover:bg-transparent hover:text-primary"
            >
              <Link href="/dashboard/build/workflow-orchestration">
                Get started
                <span className="sr-only">Workflow Orchestration</span>
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4">
              <Database className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Model Management</h3>
            <p className="mt-2 text-muted-foreground">
              Organize and version your AI models
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-4 w-full justify-start p-0 hover:bg-transparent hover:text-primary"
            >
              <Link href="/dashboard/build/model-management">
                Get started
                <span className="sr-only">Model Management</span>
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4">
              <Code2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Code Editor</h3>
            <p className="mt-2 text-muted-foreground">
              Write and edit agent code directly
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-4 w-full justify-start p-0 hover:bg-transparent hover:text-primary"
            >
              <Link href="/dashboard/build/code-editor">
                Get started
                <span className="sr-only">Code Editor</span>
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4">
              <Settings2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Agent Settings</h3>
            <p className="mt-2 text-muted-foreground">
              Configure agent behavior and parameters
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-4 w-full justify-start p-0 hover:bg-transparent hover:text-primary"
            >
              <Link href="/dashboard/build/agent-settings">
                Get started
                <span className="sr-only">Agent Settings</span>
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4">
              <TestTube className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Testing Tools</h3>
            <p className="mt-2 text-muted-foreground">
              Test and validate agent behavior
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-4 w-full justify-start p-0 hover:bg-transparent hover:text-primary"
            >
              <Link href="/dashboard/build/testing">
                Get started
                <span className="sr-only">Testing Tools</span>
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Quick Actions</h3>
            <p className="mt-2 text-muted-foreground">
              Access frequently used tools and actions
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-4 w-full justify-start p-0 hover:bg-transparent hover:text-primary"
            >
              <Link href="/dashboard/build/quick-actions">
                Get started
                <span className="sr-only">Quick Actions</span>
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
