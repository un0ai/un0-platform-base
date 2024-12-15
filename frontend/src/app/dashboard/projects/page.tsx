"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Folder } from "lucide-react"

const projects = [
  {
    name: "Project Alpha",
    description: "AI-powered data analysis platform",
    lastUpdated: "2 days ago",
  },
  {
    name: "Project Beta",
    description: "Machine learning model training interface",
    lastUpdated: "5 days ago",
  },
  {
    name: "Project Gamma",
    description: "Natural language processing toolkit",
    lastUpdated: "1 week ago",
  },
  {
    name: "Project Delta",
    description: "Computer vision application suite",
    lastUpdated: "2 weeks ago",
  },
]

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">All Projects</h1>
        <p className="text-muted-foreground">
          Browse and manage all your projects in one place.
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
