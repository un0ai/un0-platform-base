"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Cog, Plug2, Code } from "lucide-react"

const pluginCategories = [
  {
    title: "Data Processing",
    description: "Plugins for data transformation and processing",
    icon: Cog,
    plugins: [
      "Data Cleaner",
      "Format Converter",
      "Data Validator",
    ],
  },
  {
    title: "AI & ML",
    description: "Machine learning and AI model integrations",
    icon: Brain,
    plugins: [
      "Model Trainer",
      "Inference Engine",
      "Feature Extractor",
    ],
  },
  {
    title: "Integration",
    description: "Connect with external services and APIs",
    icon: Plug2,
    plugins: [
      "API Gateway",
      "Event Bus",
      "Message Queue",
    ],
  },
]

export default function PluginsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent dark:from-primary dark:to-primary/70">
          Plugins
        </h1>
        <p className="text-lg text-foreground/80 dark:text-foreground/80 leading-relaxed">
          Extend platform functionality with plugins
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {pluginCategories.map((category) => {
          const Icon = category.icon
          return (
            <Card key={category.title} className="border-none shadow-md">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Icon className="h-6 w-6 text-primary" />
                  <CardTitle>{category.title}</CardTitle>
                </div>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                  {category.plugins.map((plugin) => (
                    <li key={plugin}>{plugin}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card className="border-none shadow-md">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6 text-primary" />
            <CardTitle>Plugin Development</CardTitle>
          </div>
          <CardDescription>Resources for building custom plugins</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Create your own plugins to extend the platform&apos;s capabilities. Access our
              comprehensive documentation and development tools to get started.
            </p>
            <div className="rounded-lg border-2 border-dashed border-muted-foreground/20 p-6 text-center">
              <p className="text-sm text-muted-foreground">Documentation Coming Soon</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
