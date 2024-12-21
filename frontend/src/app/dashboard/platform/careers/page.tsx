"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bot, Code2, Globe, GraduationCap, LineChart, Users } from "lucide-react"

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent dark:from-primary dark:to-primary/70">
          Careers at un0.ai
        </h1>
        <p className="text-lg text-foreground/80 dark:text-foreground/80 leading-relaxed">
          Join us in building the future of AI
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-none shadow-md">
          <CardHeader>
            <Bot className="h-8 w-8 text-primary" />
            <CardTitle className="mt-4">AI Research</CardTitle>
            <CardDescription>Push the boundaries of AI</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Work on cutting-edge AI research and development, from foundational models to applied solutions.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Machine Learning</Badge>
              <Badge variant="secondary">Deep Learning</Badge>
              <Badge variant="secondary">NLP</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <Code2 className="h-8 w-8 text-primary" />
            <CardTitle className="mt-4">Engineering</CardTitle>
            <CardDescription>Build scalable systems</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Develop the infrastructure and tools that power our AI platform and services.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Backend</Badge>
              <Badge variant="secondary">Frontend</Badge>
              <Badge variant="secondary">DevOps</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <Globe className="h-8 w-8 text-primary" />
            <CardTitle className="mt-4">Product</CardTitle>
            <CardDescription>Shape the future</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Define and build products that make AI accessible and impactful.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Product Management</Badge>
              <Badge variant="secondary">UX Design</Badge>
              <Badge variant="secondary">Strategy</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none shadow-md">
        <CardHeader>
          <CardTitle>Open Positions</CardTitle>
          <CardDescription>Current opportunities at un0.ai</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <h4 className="font-medium">Senior ML Engineer</h4>
                  <Badge>Remote</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Build and optimize machine learning models and infrastructure
                </p>
              </div>
              <Button variant="outline">Apply Now</Button>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <h4 className="font-medium">Full Stack Developer</h4>
                  <Badge>Remote</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Develop and maintain our web applications and services
                </p>
              </div>
              <Button variant="outline">Apply Now</Button>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <h4 className="font-medium">AI Research Scientist</h4>
                  <Badge>Remote</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Conduct research in machine learning and natural language processing
                </p>
              </div>
              <Button variant="outline">Apply Now</Button>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <h4 className="font-medium">Product Manager</h4>
                  <Badge>Remote</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Drive product strategy and development for our AI platform
                </p>
              </div>
              <Button variant="outline">Apply Now</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Benefits & Perks</CardTitle>
            <CardDescription>What we offer to our team</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <GraduationCap className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-medium">Learning & Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Continuous learning opportunities and conference attendance
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Users className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-medium">Remote-First Culture</h4>
                  <p className="text-sm text-muted-foreground">
                    Work from anywhere with flexible hours
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <LineChart className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-medium">Competitive Package</h4>
                  <p className="text-sm text-muted-foreground">
                    Equity, health benefits, and competitive salary
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Our Culture</CardTitle>
            <CardDescription>What it's like to work here</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                At un0.ai, we're building a diverse and inclusive team of passionate
                individuals who are excited about pushing the boundaries of AI technology.
                We value:
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                <li>Innovation and creative problem-solving</li>
                <li>Open communication and collaboration</li>
                <li>Work-life balance and personal growth</li>
                <li>Impact-driven development</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
