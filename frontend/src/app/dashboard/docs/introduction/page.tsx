"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function IntroductionPage() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to un0.ai Tools</CardTitle>
          <CardDescription>Your gateway to advanced AI tools and capabilities</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <section>
            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <p className="text-muted-foreground">
              un0.ai Tools is a comprehensive suite of AI-powered utilities designed to enhance your workflow.
              From natural language processing to image generation, our tools provide cutting-edge capabilities
              with a simple, intuitive interface.
            </p>
          </section>
          <section>
            <h3 className="text-lg font-semibold mb-2">Key Features</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Advanced AI Models Integration</li>
              <li>Real-time Processing</li>
              <li>Customizable Workflows</li>
              <li>Enterprise-grade Security</li>
              <li>Comprehensive API Access</li>
            </ul>
          </section>
          <section>
            <h3 className="text-lg font-semibold mb-2">Getting Started</h3>
            <p className="text-muted-foreground">
              To begin using un0.ai Tools, navigate to the Tools section in the sidebar.
              Each tool comes with detailed documentation and examples to help you get started quickly.
            </p>
          </section>
        </CardContent>
      </Card>
      <div className="flex-1 rounded-xl bg-muted/50" />
    </div>
  )
}
