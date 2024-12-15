"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function LimitsPage() {
  const resources = [
    {
      name: "API Requests",
      used: 8542,
      limit: 10000,
      unit: "calls",
      period: "monthly",
    },
    {
      name: "Storage",
      used: 4.2,
      limit: 5,
      unit: "GB",
      period: "total",
    },
    {
      name: "Compute Time",
      used: 45,
      limit: 60,
      unit: "hours",
      period: "monthly",
    },
    {
      name: "Team Members",
      used: 8,
      limit: 10,
      unit: "users",
      period: "total",
    },
  ]

  return (
    <div className="flex flex-1 flex-col gap-4">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Resource Limits</CardTitle>
              <CardDescription>Monitor your resource usage and limits</CardDescription>
            </div>
            <Button>Upgrade Plan</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {resources.map((resource) => {
              const percentage = (resource.used / resource.limit) * 100
              return (
                <div key={resource.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">{resource.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {resource.used} / {resource.limit} {resource.unit}
                      </p>
                    </div>
                    <Badge variant={percentage > 80 ? "destructive" : "secondary"}>
                      {resource.period}
                    </Badge>
                  </div>
                  <Progress value={percentage} className="h-2" />
                  {percentage > 80 && (
                    <p className="text-sm text-destructive">
                      Warning: Approaching limit
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Rate Limits</CardTitle>
          <CardDescription>API rate limits per endpoint</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { endpoint: "/api/v1/process", limit: "100 req/min" },
              { endpoint: "/api/v1/analyze", limit: "50 req/min" },
              { endpoint: "/api/v1/generate", limit: "20 req/min" },
            ].map((api) => (
              <div key={api.endpoint} className="flex items-center justify-between p-4 border rounded-lg">
                <code className="text-sm">{api.endpoint}</code>
                <Badge variant="outline">{api.limit}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <div className="flex-1 rounded-xl bg-muted/50" />
    </div>
  )
}
