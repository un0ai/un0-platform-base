"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function ResearchDevelopmentPage() {
  const projects = [
    {
      name: "Quantum Algorithm Optimization",
      status: "Active",
      progress: 65,
      team: ["Dr. Smith", "Dr. Chen", "Dr. Patel"],
      milestones: [
        { name: "Initial Research", complete: true },
        { name: "Prototype Development", complete: true },
        { name: "Testing Phase", complete: false },
        { name: "Documentation", complete: false },
      ],
    },
    {
      name: "Neural Network Architecture",
      status: "Review",
      progress: 85,
      team: ["Dr. Johnson", "Dr. Lee"],
      milestones: [
        { name: "Architecture Design", complete: true },
        { name: "Implementation", complete: true },
        { name: "Performance Testing", complete: true },
        { name: "Peer Review", complete: false },
      ],
    },
    {
      name: "Edge Computing Framework",
      status: "Planning",
      progress: 25,
      team: ["Dr. Garcia", "Dr. Kumar"],
      milestones: [
        { name: "Requirements Analysis", complete: true },
        { name: "Design Phase", complete: false },
        { name: "Implementation", complete: false },
        { name: "Testing", complete: false },
      ],
    },
  ]

  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Active Research Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              3 in active development, 2 in review
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Research Team</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              8 PhDs, 4 Research Associates
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Published Papers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">
              This year
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Research Projects</CardTitle>
          <CardDescription>Current research and development initiatives</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.name} className="flex flex-col space-y-2 p-4 border rounded-lg">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{project.name}</h3>
                  <Badge variant={
                    project.status === "Active" ? "default" :
                    project.status === "Review" ? "secondary" : "outline"
                  }>
                    {project.status}
                  </Badge>
                </div>
                <Progress value={project.progress} className="h-2" />
                <div className="text-sm text-muted-foreground">
                  Team: {project.team.join(", ")}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {project.milestones.map((milestone) => (
                    <div key={milestone.name} className="flex items-center gap-2">
                      <div className={`h-2 w-2 rounded-full ${
                        milestone.complete ? "bg-green-500" : "bg-gray-300"
                      }`} />
                      <span className="text-sm">{milestone.name}</span>
                    </div>
                  ))}
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
