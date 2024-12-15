"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function DesignEngineeringPage() {
  const projects = [
    {
      name: "UI Component Library",
      status: "In Progress",
      progress: 75,
      team: ["John D.", "Sarah M.", "Mike R."],
      deadline: "Dec 31, 2023",
    },
    {
      name: "Design System Documentation",
      status: "Review",
      progress: 90,
      team: ["Emma S.", "Alex K."],
      deadline: "Jan 15, 2024",
    },
    {
      name: "Accessibility Audit",
      status: "Planning",
      progress: 20,
      team: ["Chris P.", "Lisa M."],
      deadline: "Feb 1, 2024",
    },
  ]

  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              3 active, 2 in review, 7 completed
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Team Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              Across 3 departments
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <Progress value={85} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Active Projects</CardTitle>
          <CardDescription>Current design and engineering initiatives</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.name} className="flex flex-col space-y-2 p-4 border rounded-lg">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{project.name}</h3>
                  <Badge variant={
                    project.status === "In Progress" ? "default" :
                    project.status === "Review" ? "secondary" : "outline"
                  }>
                    {project.status}
                  </Badge>
                </div>
                <Progress value={project.progress} className="h-2" />
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div>Team: {project.team.join(", ")}</div>
                  <div>Deadline: {project.deadline}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <div className="flex-1 rounded-xl bg-muted/50" />
    </div>
  )
}
