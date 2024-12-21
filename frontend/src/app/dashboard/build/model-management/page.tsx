"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ModelManagementPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent dark:from-primary dark:to-primary/70">
          Model Management
        </h1>
        <p className="text-lg text-foreground/80 dark:text-foreground/80 leading-relaxed">
          Manage and monitor your AI models in one central location
        </p>
      </div>

      <Card className="border-none shadow-md">
        <CardHeader>
          <CardTitle>Model Registry</CardTitle>
          <CardDescription>Track and manage your AI models</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Model Name</TableHead>
                <TableHead>Version</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Example Model</TableCell>
                <TableCell>1.0.0</TableCell>
                <TableCell>
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-400">
                    Active
                  </span>
                </TableCell>
                <TableCell>Coming Soon</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Model Metrics</CardTitle>
            <CardDescription>Performance and usage statistics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border-2 border-dashed border-muted-foreground/20 p-6 text-center">
              <p className="text-sm text-muted-foreground">Coming Soon</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Version Control</CardTitle>
            <CardDescription>Model versioning and history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border-2 border-dashed border-muted-foreground/20 p-6 text-center">
              <p className="text-sm text-muted-foreground">Coming Soon</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
