"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Cloud, Code } from "lucide-react"

const connectorCategories = [
  {
    title: "AI Services",
    description: "Connect with popular AI and ML services",
    icon: Brain,
    connectors: [
      {
        name: "OpenAI",
        description: "GPT models and DALL-E integration",
      },
      {
        name: "Hugging Face",
        description: "Access to thousands of ML models",
      },
      {
        name: "Anthropic",
        description: "Claude and other AI models",
      },
    ],
  },
  {
    title: "Cloud Providers",
    description: "Integrate with major cloud platforms",
    icon: Cloud,
    connectors: [
      {
        name: "AWS",
        description: "Amazon Web Services integration",
      },
      {
        name: "Google Cloud",
        description: "Google Cloud Platform services",
      },
      {
        name: "Azure",
        description: "Microsoft Azure services",
      },
    ],
  },
  {
    title: "Development Tools",
    description: "Connect with development and DevOps tools",
    icon: Code,
    connectors: [
      {
        name: "GitHub",
        description: "Repository and CI/CD integration",
      },
      {
        name: "GitLab",
        description: "Complete DevOps platform",
      },
      {
        name: "Bitbucket",
        description: "Code collaboration platform",
      },
    ],
  },
]

export default function ThirdPartyConnectorsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent dark:from-primary dark:to-primary/70">
          Third-party Connectors
        </h1>
        <p className="text-lg text-foreground/80 dark:text-foreground/80 leading-relaxed">
          Connect with external services and platforms
        </p>
      </div>

      <div className="space-y-6">
        {connectorCategories.map((category) => {
          const Icon = category.icon
          return (
            <div key={category.title} className="space-y-4">
              <div className="flex items-center gap-2">
                <Icon className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold">{category.title}</h2>
              </div>
              <p className="text-muted-foreground">{category.description}</p>
              <div className="grid gap-4 md:grid-cols-3">
                {category.connectors.map((connector) => (
                  <Card key={connector.name} className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>{connector.name}</CardTitle>
                      <CardDescription>{connector.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded-lg border-2 border-dashed border-muted-foreground/20 p-4 text-center">
                        <p className="text-sm text-muted-foreground">Coming Soon</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
