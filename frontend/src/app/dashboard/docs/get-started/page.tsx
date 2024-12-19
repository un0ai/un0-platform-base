"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Steps, Step } from "@/components/ui/steps"

export default function GetStartedPage() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Getting Started with un0.ai Tools</CardTitle>
          <CardDescription>Follow these steps to begin your journey</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <section>
            <h3 className="text-lg font-semibold mb-4">Quick Start Guide</h3>
            <Steps>
              <Step title="Set Up Your Account" description="Create and configure your un0.ai account with proper credentials." />
              <Step title="Choose Your Tools" description="Select the AI tools that best fit your needs from our comprehensive suite." />
              <Step title="Configure Settings" description="Adjust tool settings and parameters to match your requirements." />
              <Step title="Run Your First Task" description="Execute your first AI task using our intuitive interface." />
              <Step title="Monitor Results" description="Track and analyze the results of your AI operations." />
            </Steps>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">System Requirements</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Modern web browser (Chrome, Firefox, Safari)</li>
              <li>Stable internet connection</li>
              <li>Minimum 4GB RAM</li>
              <li>API key for advanced features</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">Next Steps</h3>
            <p className="text-muted-foreground">
              Once you&apos;ve completed the initial setup, explore our tutorials section for detailed guides
              on specific tools and advanced features. Join our community forum to connect with other users
              and share experiences.
            </p>
          </section>
        </CardContent>
      </Card>
      <div className="flex-1 rounded-xl bg-muted/50" />
    </div>
  )
}
