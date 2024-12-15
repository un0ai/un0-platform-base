"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ExplorerPage() {
  const models = [
    {
      name: "GPT-4",
      status: "Active",
      performance: "High",
      lastUpdated: "2 hours ago",
    },
    {
      name: "DALL-E 3",
      status: "Active",
      performance: "Medium",
      lastUpdated: "1 day ago",
    },
    {
      name: "Stable Diffusion",
      status: "Maintenance",
      performance: "Low",
      lastUpdated: "3 days ago",
    },
    {
      name: "Claude 2",
      status: "Active",
      performance: "High",
      lastUpdated: "5 hours ago",
    },
  ]

  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="grid gap-4">
        {models.map((model) => (
          <Card key={model.name}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{model.name}</CardTitle>
                <Badge variant={model.status === "Active" ? "default" : "secondary"}>
                  {model.status}
                </Badge>
              </div>
              <CardDescription>Last updated {model.lastUpdated}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span>Performance:</span>
                <Badge variant={
                  model.performance === "High" ? "default" :
                  model.performance === "Medium" ? "secondary" : "outline"
                }>
                  {model.performance}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex-1 rounded-xl bg-muted/50" />
    </div>
  )
}
