"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  LineChart,
  Activity,
  Bot,
  Bell,
  Gauge,
  History,
  AlertTriangle,
  Settings,
} from "lucide-react"

export default function MonitorPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Monitor
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Track and analyze your AI platform performance
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="group relative overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4">
              <LineChart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Performance Metrics</h3>
            <p className="mt-2 text-muted-foreground">
              Track and analyze system performance
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-4 w-full justify-start p-0 hover:bg-transparent hover:text-primary"
            >
              <Link href="/dashboard/monitor/performance-metrics">
                View metrics
                <span className="sr-only">Performance Metrics</span>
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4">
              <Activity className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">System Health</h3>
            <p className="mt-2 text-muted-foreground">
              Monitor overall system status
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-4 w-full justify-start p-0 hover:bg-transparent hover:text-primary"
            >
              <Link href="/dashboard/monitor/system-health">
                View metrics
                <span className="sr-only">System Health</span>
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4">
              <Bot className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Agent Analytics</h3>
            <p className="mt-2 text-muted-foreground">
              Analyze AI agent behavior and performance
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-4 w-full justify-start p-0 hover:bg-transparent hover:text-primary"
            >
              <Link href="/dashboard/monitor/agent-analytics">
                View metrics
                <span className="sr-only">Agent Analytics</span>
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4">
              <Bell className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Logs & Alerts</h3>
            <p className="mt-2 text-muted-foreground">
              View system logs and manage alerts
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-4 w-full justify-start p-0 hover:bg-transparent hover:text-primary"
            >
              <Link href="/dashboard/monitor/logs-alerts">
                View metrics
                <span className="sr-only">Logs & Alerts</span>
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4">
              <Gauge className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Resource Usage</h3>
            <p className="mt-2 text-muted-foreground">
              Monitor system resource consumption
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-4 w-full justify-start p-0 hover:bg-transparent hover:text-primary"
            >
              <Link href="/dashboard/monitor/resource-usage">
                View metrics
                <span className="sr-only">Resource Usage</span>
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4">
              <History className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Audit Trail</h3>
            <p className="mt-2 text-muted-foreground">
              View system and user activity history
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-4 w-full justify-start p-0 hover:bg-transparent hover:text-primary"
            >
              <Link href="/dashboard/monitor/audit-trail">
                View metrics
                <span className="sr-only">Audit Trail</span>
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4">
              <AlertTriangle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Incident Management</h3>
            <p className="mt-2 text-muted-foreground">
              Track and resolve system incidents
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-4 w-full justify-start p-0 hover:bg-transparent hover:text-primary"
            >
              <Link href="/dashboard/monitor/incidents">
                View metrics
                <span className="sr-only">Incident Management</span>
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4">
              <Settings className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Monitoring Settings</h3>
            <p className="mt-2 text-muted-foreground">
              Configure monitoring preferences
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-4 w-full justify-start p-0 hover:bg-transparent hover:text-primary"
            >
              <Link href="/dashboard/monitor/settings">
                View metrics
                <span className="sr-only">Monitoring Settings</span>
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
