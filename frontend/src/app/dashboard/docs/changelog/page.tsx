"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ChangelogPage() {
  const changes = [
    {
      version: "2.1.0",
      date: "2024-12-14",
      type: "major",
      changes: [
        "Added new quantum computing models",
        "Improved API response times by 50%",
        "Enhanced security features",
      ],
    },
    {
      version: "2.0.5",
      date: "2024-12-01",
      type: "minor",
      changes: [
        "Fixed bug in data processing pipeline",
        "Updated documentation",
        "Performance improvements",
      ],
    },
    {
      version: "2.0.4",
      date: "2024-11-15",
      type: "patch",
      changes: [
        "Security patches",
        "Minor UI improvements",
        "Bug fixes in reporting module",
      ],
    },
  ]

  return (
    <div className="flex flex-1 flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Changelog</CardTitle>
          <CardDescription>Latest updates and improvements to the platform</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {changes.map((release) => (
            <div key={release.version} className="space-y-4">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">Version {release.version}</h3>
                <Badge variant={
                  release.type === "major" ? "default" :
                  release.type === "minor" ? "secondary" : "outline"
                }>
                  {release.type}
                </Badge>
                <span className="text-sm text-muted-foreground">{release.date}</span>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {release.changes.map((change, index) => (
                  <li key={index}>{change}</li>
                ))}
              </ul>
            </div>
          ))}
        </CardContent>
      </Card>
      <div className="flex-1 rounded-xl bg-muted/50" />
    </div>
  )
}
