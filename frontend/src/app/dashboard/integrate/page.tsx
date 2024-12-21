"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Link2,
  Globe,
  Database,
  Puzzle,
} from "lucide-react"

export default function IntegratePage() {
  return (
    <div className="container mx-auto py-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Integrate
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Connect and extend your AI platform
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="group relative overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4">
              <Link2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Third-party Connectors</h3>
            <p className="mt-2 text-muted-foreground">
              Connect with external services and tools
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-4 w-full justify-start p-0 hover:bg-transparent hover:text-primary"
            >
              <Link href="/dashboard/integrate/third-party-connectors">
                Connect
                <span className="sr-only">Third-party Connectors</span>
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">API Hub</h3>
            <p className="mt-2 text-muted-foreground">
              Access and manage API integrations
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-4 w-full justify-start p-0 hover:bg-transparent hover:text-primary"
            >
              <Link href="/dashboard/integrate/api-hub">
                Connect
                <span className="sr-only">API Hub</span>
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4">
              <Database className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Data Sources</h3>
            <p className="mt-2 text-muted-foreground">
              Configure your data connections
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-4 w-full justify-start p-0 hover:bg-transparent hover:text-primary"
            >
              <Link href="/dashboard/integrate/data-sources">
                Connect
                <span className="sr-only">Data Sources</span>
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4">
              <Puzzle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Plugins</h3>
            <p className="mt-2 text-muted-foreground">
              Extend platform functionality
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-4 w-full justify-start p-0 hover:bg-transparent hover:text-primary"
            >
              <Link href="/dashboard/integrate/plugins">
                Connect
                <span className="sr-only">Plugins</span>
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
