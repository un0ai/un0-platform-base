"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, HardDrive, FileBox, Warehouse } from "lucide-react"

const dataSources = [
  {
    category: "Databases",
    description: "Connect to SQL and NoSQL databases",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    category: "Storage Services",
    description: "Integrate with cloud storage solutions",
    icon: HardDrive,
    items: ["AWS S3", "Google Cloud Storage", "Azure Blob Storage"],
  },
  {
    category: "File Systems",
    description: "Access local and network file systems",
    icon: FileBox,
    items: ["Local Storage", "Network Shares", "FTP/SFTP"],
  },
  {
    category: "Data Warehouses",
    description: "Connect to enterprise data warehouses",
    icon: Warehouse,
    items: ["Snowflake", "Amazon Redshift", "Google BigQuery"],
  },
]

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

      <div className="grid gap-4 md:grid-cols-2">
        {dataSources.map((source) => {
          const Icon = source.icon
          return (
            <Card key={source.category} className="border-none shadow-md">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Icon className="h-6 w-6 text-primary" />
                  <CardTitle>{source.category}</CardTitle>
                </div>
                <CardDescription>{source.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                  {source.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
