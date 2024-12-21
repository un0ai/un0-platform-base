"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Microscope, GitBranch, Beaker } from "lucide-react"

export default function ResearchDevelopmentPage() {
  return (
    <div className="flex-1 space-y-8 p-8 pt-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Research & Development</h2>
        <p className="text-lg text-muted-foreground">
          Exploring the frontiers of AI technology
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="col-span-2 border-none shadow-md">
          <CardHeader>
            <CardTitle>Current Research Areas</CardTitle>
            <CardDescription>
              Key areas of focus in our R&D efforts
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Brain className="h-8 w-8 text-primary" />
                <div>
                  <h4 className="font-medium">Neural Architecture</h4>
                  <p className="text-sm text-muted-foreground">
                    Developing advanced neural network architectures for improved performance
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Beaker className="h-8 w-8 text-primary" />
                <div>
                  <h4 className="font-medium">Model Optimization</h4>
                  <p className="text-sm text-muted-foreground">
                    Optimizing model size and inference speed while maintaining accuracy
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Microscope className="h-8 w-8 text-primary" />
                <div>
                  <h4 className="font-medium">Applied Research</h4>
                  <p className="text-sm text-muted-foreground">
                    Bridging theoretical advances with practical applications
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <GitBranch className="h-8 w-8 text-primary" />
                <div>
                  <h4 className="font-medium">Distributed Systems</h4>
                  <p className="text-sm text-muted-foreground">
                    Building scalable infrastructure for AI deployment
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Latest Publications</CardTitle>
            <CardDescription>Recent research papers and findings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Efficient Neural Architecture Search</h4>
                  <Badge>2024</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Novel approach to automated neural architecture design using reinforcement learning
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Scalable Model Deployment</h4>
                  <Badge>2024</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Framework for efficient deployment of large language models
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Multi-modal Learning</h4>
                  <Badge>2023</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Advances in combining vision and language understanding
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Open Source Projects</CardTitle>
            <CardDescription>Community contributions and tools</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">un0-core</h4>
                  <Badge variant="secondary">Active</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Core library for building and deploying AI agents
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">model-optimizer</h4>
                  <Badge variant="secondary">Active</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Tools for optimizing model performance
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">distributed-inference</h4>
                  <Badge variant="secondary">Beta</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Framework for distributed model inference
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none shadow-md">
        <CardHeader>
          <CardTitle>Research Partnerships</CardTitle>
          <CardDescription>
            Collaborating with leading institutions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <h4 className="font-medium">Academic Partners</h4>
              <p className="text-sm text-muted-foreground">
                Working with top universities on fundamental research
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Industry Partners</h4>
              <p className="text-sm text-muted-foreground">
                Collaborating with tech leaders on applied research
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Research Grants</h4>
              <p className="text-sm text-muted-foreground">
                Supporting innovative AI research projects
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
