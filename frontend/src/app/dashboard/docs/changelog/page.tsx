"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ChangelogPage() {
  const changes = [
    {
      version: "0.1.4-beta",
      date: "2025-01-10",
      type: "major",
      changes: [
        "Added new features for data analytics",
        "Improved performance of the platform",
        "Enhanced security measures",
      ],
    },
    {
      version: "0.1.3-beta",
      date: "2024-12-19",
      type: "major",
      changes: [
        "Added new Integrations",
        "Improved API response",
        "Enhanced CI/CD automations",
      ],
    },
    {
      version: "0.1.2-beta",
      date: "2024-12-09",
      type: "minor",
      changes: [
        "Fixed bug in data processing pipeline",
        "Updated documentation",
        "Performance improvements",
      ],
    },
    {
      version: "0.1.1-beta",
      date: "2024-12-05",
      type: "patch",
      changes: [
        "Security patches",
        "Minor UI improvements",
        "Bug fixes in reporting module",
        "Performance improvements",
      ],
    },
    {
      version: "0.1.0-beta",
      date: "2024-12-01",
      type: "major",
      changes: [
        "Updated MLOps pipeline definitions",
        "Updated documentation",
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
