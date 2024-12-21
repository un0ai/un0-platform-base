"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent dark:from-primary dark:to-primary/70">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-foreground/80 dark:text-foreground/80 leading-relaxed">
          Find answers to common questions about un0.ai
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>General Questions</CardTitle>
            <CardDescription>Basic information about un0.ai</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is un0.ai?</AccordionTrigger>
                <AccordionContent>
                  un0.ai is a powerful platform for building, deploying, and managing AI agents. It provides tools and infrastructure for creating intelligent applications that can automate tasks, process data, and interact with users.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How do I get started?</AccordionTrigger>
                <AccordionContent>
                  You can get started by signing up for an account, following our quick start guide, and using our Visual Agent Builder to create your first AI agent. We provide comprehensive documentation and tutorials to help you along the way.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What are the system requirements?</AccordionTrigger>
                <AccordionContent>
                  un0.ai is a cloud-based platform that runs in modern web browsers. You don't need to install any special software. We recommend using the latest versions of Chrome, Firefox, Safari, or Edge.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Technical Questions</CardTitle>
            <CardDescription>Technical details and specifications</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What programming languages are supported?</AccordionTrigger>
                <AccordionContent>
                  un0.ai supports multiple programming languages including Python, JavaScript, and TypeScript. Our SDKs are available in these languages, and you can use any language that can make HTTP requests to interact with our API.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How does the Visual Agent Builder work?</AccordionTrigger>
                <AccordionContent>
                  The Visual Agent Builder is a no-code tool that allows you to create AI agents through a graphical interface. You can define agent behaviors, connect to data sources, and set up workflows without writing code.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What deployment options are available?</AccordionTrigger>
                <AccordionContent>
                  We offer cloud deployment on our infrastructure, as well as options for private cloud and on-premises deployment for enterprise customers. You can also deploy to major cloud providers like AWS, GCP, and Azure.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Billing & Pricing</CardTitle>
            <CardDescription>Information about pricing and billing</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What pricing plans are available?</AccordionTrigger>
                <AccordionContent>
                  We offer flexible pricing plans including Free, Pro, and Enterprise tiers. Each plan includes different features and usage limits. You can view detailed pricing information on our pricing page.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How is usage calculated?</AccordionTrigger>
                <AccordionContent>
                  Usage is calculated based on API calls, compute resources, and storage. We provide detailed analytics and monitoring tools to help you track your usage and costs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I change plans anytime?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated based on your usage.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Support & Resources</CardTitle>
            <CardDescription>Help and documentation resources</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How can I get help?</AccordionTrigger>
                <AccordionContent>
                  We provide multiple support channels including documentation, community forums, email support, and priority support for enterprise customers. You can also join our Discord community for real-time help.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Where can I find documentation?</AccordionTrigger>
                <AccordionContent>
                  Our documentation is available in the Learn section of the platform. It includes guides, tutorials, API reference, and example projects to help you get started and solve common problems.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Do you offer training?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer training sessions and workshops for teams. Enterprise customers also get access to personalized onboarding and training programs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
