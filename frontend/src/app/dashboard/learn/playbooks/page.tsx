"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PlaybooksPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent dark:from-primary dark:to-primary/70">
          Playbooks
        </h1>
        <p className="text-lg text-foreground/80 dark:text-foreground/80 leading-relaxed">
          Ready-to-use guides and templates for common use cases
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Customer Service</CardTitle>
            <CardDescription>AI-powered customer support solutions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Support Chatbot</p>
                  <p className="text-sm text-muted-foreground">Automated customer support</p>
                </div>
                <Badge>Template</Badge>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Ticket Classification</p>
                  <p className="text-sm text-muted-foreground">AI-powered ticket routing</p>
                </div>
                <Badge>Template</Badge>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">FAQ Bot</p>
                  <p className="text-sm text-muted-foreground">Automated FAQ responses</p>
                </div>
                <Badge>Template</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Sales & Marketing</CardTitle>
            <CardDescription>AI solutions for sales and marketing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Lead Qualification</p>
                  <p className="text-sm text-muted-foreground">AI lead scoring</p>
                </div>
                <Badge>Template</Badge>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Content Generation</p>
                  <p className="text-sm text-muted-foreground">Marketing content creation</p>
                </div>
                <Badge>Template</Badge>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Campaign Analysis</p>
                  <p className="text-sm text-muted-foreground">Marketing analytics</p>
                </div>
                <Badge>Template</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Data Processing</CardTitle>
            <CardDescription>Data automation solutions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Data Extraction</p>
                  <p className="text-sm text-muted-foreground">Document processing</p>
                </div>
                <Badge>Template</Badge>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Data Enrichment</p>
                  <p className="text-sm text-muted-foreground">Data enhancement</p>
                </div>
                <Badge>Template</Badge>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Data Validation</p>
                  <p className="text-sm text-muted-foreground">Quality assurance</p>
                </div>
                <Badge>Template</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Integration</CardTitle>
            <CardDescription>Third-party integration templates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">CRM Integration</p>
                  <p className="text-sm text-muted-foreground">CRM system connection</p>
                </div>
                <Badge>Template</Badge>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Email Integration</p>
                  <p className="text-sm text-muted-foreground">Email automation</p>
                </div>
                <Badge>Template</Badge>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div>
                  <p className="font-medium">Slack Integration</p>
                  <p className="text-sm text-muted-foreground">Slack bot creation</p>
                </div>
                <Badge>Template</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
