"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Building2, MessageSquare, Search, ShoppingCart, Users } from "lucide-react"

export default function UseCasesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent dark:from-primary dark:to-primary/70">
          Use Cases
        </h1>
        <p className="text-lg text-foreground/80 dark:text-foreground/80 leading-relaxed">
          Discover how un0.ai can transform your business
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-none shadow-md">
          <CardHeader className="flex flex-row items-start justify-between">
            <div>
              <CardTitle>Customer Service</CardTitle>
              <CardDescription>Automate support interactions</CardDescription>
            </div>
            <MessageSquare className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Transform customer support with AI-powered chatbots and automated responses.
                Handle inquiries 24/7 while maintaining high quality service.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Chatbots</Badge>
                <Badge variant="secondary">Ticket Routing</Badge>
                <Badge variant="secondary">FAQ Automation</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader className="flex flex-row items-start justify-between">
            <div>
              <CardTitle>E-commerce</CardTitle>
              <CardDescription>Enhance shopping experiences</CardDescription>
            </div>
            <ShoppingCart className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Personalize shopping experiences with AI recommendations and intelligent
                product search capabilities.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Product Recommendations</Badge>
                <Badge variant="secondary">Search Enhancement</Badge>
                <Badge variant="secondary">Inventory Management</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader className="flex flex-row items-start justify-between">
            <div>
              <CardTitle>Enterprise Solutions</CardTitle>
              <CardDescription>Streamline business operations</CardDescription>
            </div>
            <Building2 className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Optimize business processes with AI-powered automation and intelligent
                workflow management.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Process Automation</Badge>
                <Badge variant="secondary">Document Analysis</Badge>
                <Badge variant="secondary">Workflow Optimization</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader className="flex flex-row items-start justify-between">
            <div>
              <CardTitle>HR & Recruitment</CardTitle>
              <CardDescription>Optimize talent acquisition</CardDescription>
            </div>
            <Users className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Streamline recruitment processes with AI-powered candidate screening
                and automated interview scheduling.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Resume Screening</Badge>
                <Badge variant="secondary">Interview Automation</Badge>
                <Badge variant="secondary">Candidate Matching</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader className="flex flex-row items-start justify-between">
            <div>
              <CardTitle>Content Creation</CardTitle>
              <CardDescription>Generate engaging content</CardDescription>
            </div>
            <Bot className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Create high-quality content at scale with AI-powered generation and
                optimization tools.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Text Generation</Badge>
                <Badge variant="secondary">Content Optimization</Badge>
                <Badge variant="secondary">Multi-language Support</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader className="flex flex-row items-start justify-between">
            <div>
              <CardTitle>Research & Analysis</CardTitle>
              <CardDescription>Data-driven insights</CardDescription>
            </div>
            <Search className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Extract valuable insights from large datasets with AI-powered
                analysis tools.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Data Analysis</Badge>
                <Badge variant="secondary">Pattern Recognition</Badge>
                <Badge variant="secondary">Trend Prediction</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
