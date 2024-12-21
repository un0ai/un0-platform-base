"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function DataSourcesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent dark:from-primary dark:to-primary/70">
          Data Sources
        </h1>
        <p className="text-lg text-foreground/80 dark:text-foreground/80 leading-relaxed">
          Connect and manage your data sources
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Databases</CardTitle>
            <CardDescription>Connect to various database systems</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">PostgreSQL</p>
                  <p className="text-sm text-muted-foreground">Relational Database</p>
                </div>
                <Badge>Coming Soon</Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">MongoDB</p>
                  <p className="text-sm text-muted-foreground">NoSQL Database</p>
                </div>
                <Badge>Coming Soon</Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Redis</p>
                  <p className="text-sm text-muted-foreground">In-memory Database</p>
                </div>
                <Badge>Coming Soon</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Storage Services</CardTitle>
            <CardDescription>Connect to cloud storage providers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">S3</p>
                  <p className="text-sm text-muted-foreground">Object Storage</p>
                </div>
                <Badge>Coming Soon</Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Google Cloud Storage</p>
                  <p className="text-sm text-muted-foreground">Cloud Storage</p>
                </div>
                <Badge>Coming Soon</Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Azure Blob Storage</p>
                  <p className="text-sm text-muted-foreground">Blob Storage</p>
                </div>
                <Badge>Coming Soon</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>File Systems</CardTitle>
            <CardDescription>Connect to file storage systems</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Local Storage</p>
                  <p className="text-sm text-muted-foreground">File System</p>
                </div>
                <Badge>Coming Soon</Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Network Storage</p>
                  <p className="text-sm text-muted-foreground">NFS/SMB</p>
                </div>
                <Badge>Coming Soon</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Data Warehouses</CardTitle>
            <CardDescription>Connect to data warehouse solutions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Snowflake</p>
                  <p className="text-sm text-muted-foreground">Cloud Data Warehouse</p>
                </div>
                <Badge>Coming Soon</Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">BigQuery</p>
                  <p className="text-sm text-muted-foreground">Analytics Warehouse</p>
                </div>
                <Badge>Coming Soon</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
