"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Building2, HeadphoneIcon, MessageSquare, Search, ShoppingCart, Users } from "lucide-react"

export default function UseCasesPage() {
  return (
    <div className="flex-1 space-y-8 p-8 pt-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Use Cases</h2>
        <p className="text-lg text-muted-foreground">
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
