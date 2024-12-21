"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function PluginsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent dark:from-primary dark:to-primary/70">
          Plugins
        </h1>
        <p className="text-lg text-foreground/80 dark:text-foreground/80 leading-relaxed">
          Extend your platform capabilities with plugins
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Data Processing</CardTitle>
            <CardDescription>Plugins for data transformation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Data Cleaner</p>
                  <p className="text-xs text-muted-foreground">v1.0</p>
                </div>
                <Button variant="outline" size="sm" disabled>Install</Button>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Format Converter</p>
                  <p className="text-xs text-muted-foreground">v1.0</p>
                </div>
                <Button variant="outline" size="sm" disabled>Install</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>AI & ML</CardTitle>
            <CardDescription>Machine learning plugins</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Model Optimizer</p>
                  <p className="text-xs text-muted-foreground">v1.0</p>
                </div>
                <Button variant="outline" size="sm" disabled>Install</Button>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Training Pipeline</p>
                  <p className="text-xs text-muted-foreground">v1.0</p>
                </div>
                <Button variant="outline" size="sm" disabled>Install</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Integration</CardTitle>
            <CardDescription>Third-party integration plugins</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">API Connector</p>
                  <p className="text-xs text-muted-foreground">v1.0</p>
                </div>
                <Button variant="outline" size="sm" disabled>Install</Button>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Auth Provider</p>
                  <p className="text-xs text-muted-foreground">v1.0</p>
                </div>
                <Button variant="outline" size="sm" disabled>Install</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none shadow-md">
        <CardHeader>
          <CardTitle>Plugin Development</CardTitle>
          <CardDescription>Resources for plugin developers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
              <div>
                <p className="font-medium">Developer Documentation</p>
                <p className="text-sm text-muted-foreground">Learn how to create plugins</p>
              </div>
              <Badge>Coming Soon</Badge>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
              <div>
                <p className="font-medium">Plugin SDK</p>
                <p className="text-sm text-muted-foreground">Development toolkit</p>
              </div>
              <Badge>Coming Soon</Badge>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
              <div>
                <p className="font-medium">Plugin Templates</p>
                <p className="text-sm text-muted-foreground">Starter templates</p>
              </div>
              <Badge>Coming Soon</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
