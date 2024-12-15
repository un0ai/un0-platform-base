"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Folder } from "lucide-react"

const projects = [
  {
    name: "Project Epsilon",
    description: "Advanced analytics and reporting dashboard",
    lastUpdated: "3 days ago",
  },
  {
    name: "Project Zeta",
    description: "Real-time collaboration platform",
    lastUpdated: "6 days ago",
  },
  {
    name: "Project Eta",
    description: "Automated workflow management system",
    lastUpdated: "1 week ago",
  },
  {
    name: "Project Theta",
    description: "Document processing and analysis tool",
    lastUpdated: "2 weeks ago",
  },
]

export default function MoreProjectsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Additional Projects</h1>
        <p className="text-muted-foreground">
          Explore more of our innovative projects and initiatives.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.name}>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-lg bg-primary/10 p-2">
                <Folder className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl">{project.name}</CardTitle>
                <CardDescription>Last updated: {project.lastUpdated}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
