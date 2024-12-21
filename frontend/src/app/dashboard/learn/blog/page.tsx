"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent dark:from-primary dark:to-primary/70">
          Blog
        </h1>
        <p className="text-lg text-foreground/80 dark:text-foreground/80 leading-relaxed">
          Latest news, updates, and insights from the un0.ai team
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="col-span-2 border-none shadow-md">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-2">
                  <Badge>Featured</Badge>
                  <span className="text-sm text-muted-foreground">December 20, 2024</span>
                </div>
                <CardTitle className="mt-2">Introducing un0.ai 2.0: The Next Generation of AI Development</CardTitle>
                <CardDescription className="mt-1">A major update bringing new features and improvements to the platform</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Today, we're excited to announce the release of un0.ai 2.0, a major update that brings powerful new features
                and improvements to our AI development platform. This release includes the new Visual Agent Builder,
                advanced workflow orchestration, and much more.
              </p>
              <Button variant="outline">Read More</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">Tutorial</Badge>
              <span className="text-sm text-muted-foreground">December 15, 2024</span>
            </div>
            <CardTitle className="mt-2">Building Your First AI Agent: A Step-by-Step Guide</CardTitle>
            <CardDescription>Learn how to create and deploy your first AI agent using un0.ai</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                In this tutorial, we'll walk through the process of creating and deploying your first AI agent using
                the un0.ai platform. You'll learn about the basics of agent development, best practices, and how to
                leverage our tools for optimal results.
              </p>
              <Button variant="outline">Read More</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">Case Study</Badge>
              <span className="text-sm text-muted-foreground">December 10, 2024</span>
            </div>
            <CardTitle className="mt-2">How Company X Automated Customer Support with AI Agents</CardTitle>
            <CardDescription>A success story of AI implementation in customer service</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Discover how Company X used un0.ai to build and deploy AI agents that handle 70% of their customer
                support queries, resulting in faster response times and improved customer satisfaction.
              </p>
              <Button variant="outline">Read More</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">Technical</Badge>
              <span className="text-sm text-muted-foreground">December 5, 2024</span>
            </div>
            <CardTitle className="mt-2">Advanced Workflow Orchestration Techniques</CardTitle>
            <CardDescription>Deep dive into workflow management and optimization</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Learn advanced techniques for managing complex AI workflows, including parallel processing,
                error handling, and performance optimization strategies.
              </p>
              <Button variant="outline">Read More</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">Product</Badge>
              <span className="text-sm text-muted-foreground">December 1, 2024</span>
            </div>
            <CardTitle className="mt-2">New Feature: Real-time Monitoring Dashboard</CardTitle>
            <CardDescription>Introducing comprehensive monitoring tools for AI agents</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Explore our new monitoring dashboard that provides real-time insights into your AI agents'
                performance, resource usage, and operational metrics.
              </p>
              <Button variant="outline">Read More</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">Community</Badge>
              <span className="text-sm text-muted-foreground">November 28, 2024</span>
            </div>
            <CardTitle className="mt-2">Spotlight: Community Projects and Integrations</CardTitle>
            <CardDescription>Highlighting innovative projects from our developer community</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Check out some of the most interesting and innovative projects built by our community
                members using un0.ai's platform and tools.
              </p>
              <Button variant="outline">Read More</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center">
        <Button variant="outline">Load More Posts</Button>
      </div>
    </div>
  )
}
