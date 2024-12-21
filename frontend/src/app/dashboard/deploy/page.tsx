"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  GitBranch,
  Wrench,
  Server,
  Box,
  Cloud,
  Settings,
} from "lucide-react"

export default function DeployPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Deploy
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Deploy and scale your AI solutions
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="group relative overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4">
              <GitBranch className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">CI/CD Pipelines</h3>
            <p className="mt-2 text-muted-foreground">
              Set up automated deployment pipelines
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-4 w-full justify-start p-0 hover:bg-transparent hover:text-primary"
            >
              <Link href="/dashboard/deploy/cicd-pipelines">
                Configure
                <span className="sr-only">CI/CD Pipelines</span>
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4">
              <Wrench className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">MLOps Tools</h3>
            <p className="mt-2 text-muted-foreground">
              Manage your ML operations efficiently
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-4 w-full justify-start p-0 hover:bg-transparent hover:text-primary"
            >
              <Link href="/dashboard/deploy/mlops-tools">
                Configure
                <span className="sr-only">MLOps Tools</span>
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4">
              <Server className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Infrastructure</h3>
            <p className="mt-2 text-muted-foreground">
              Configure and manage your infrastructure
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-4 w-full justify-start p-0 hover:bg-transparent hover:text-primary"
            >
              <Link href="/dashboard/deploy/infrastructure">
                Configure
                <span className="sr-only">Infrastructure</span>
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4">
              <Box className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Containers</h3>
            <p className="mt-2 text-muted-foreground">
              Manage containerized deployments
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-4 w-full justify-start p-0 hover:bg-transparent hover:text-primary"
            >
              <Link href="/dashboard/deploy/containers">
                Configure
                <span className="sr-only">Containers</span>
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4">
              <Cloud className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Cloud Providers</h3>
            <p className="mt-2 text-muted-foreground">
              Configure cloud provider settings
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-4 w-full justify-start p-0 hover:bg-transparent hover:text-primary"
            >
              <Link href="/dashboard/deploy/cloud-providers">
                Configure
                <span className="sr-only">Cloud Providers</span>
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4">
              <Settings className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Deployment Settings</h3>
            <p className="mt-2 text-muted-foreground">
              Configure global deployment settings
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-4 w-full justify-start p-0 hover:bg-transparent hover:text-primary"
            >
              <Link href="/dashboard/deploy/settings">
                Configure
                <span className="sr-only">Deployment Settings</span>
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
