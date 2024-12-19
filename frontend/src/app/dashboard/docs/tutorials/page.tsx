"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TutorialsPage() {
  const tutorials = [
    {
      title: "Getting Started with AI pipelines",
      description: "Learn the basics of working with our AI models using Lanflow",
      difficulty: "Beginner",
      duration: "20 mins",
      category: "AI, MLOps",
    },
    {
      title: "Integrating Services",
      description: "Learn to integrate external services into our platform",
      difficulty: "Beginner",
      duration: "40 mins",
      category: "Development",
    },
    {
      title: "API Integration Guide",
      description: "How to integrate our APIs into your application",
      difficulty: "Intermediate",
      duration: "30 mins",
      category: "Development",
    },
    {
      title: "Advanced Data Processing",
      description: "Deep dive into data processing techniques",
      difficulty: "Advanced",
      duration: "45 mins",
      category: "Data Pipelines",
    },

    {
      title: "Custom Model Training",
      description: "Train and/or fine-tune your AI models using leveraging advance techniques",
      difficulty: "Expert",
      duration: "60 mins",
      category: "AI, MLOps",
    },
  ]

  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        {tutorials.map((tutorial, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{tutorial.title}</CardTitle>
                <Badge variant={
                  tutorial.difficulty === "Beginner" ? "default" :
                  tutorial.difficulty === "Intermediate" ? "secondary" :
                  tutorial.difficulty === "Advanced" ? "destructive" : "outline"
                }>
                  {tutorial.difficulty}
                </Badge>
              </div>
              <CardDescription>{tutorial.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Duration: {tutorial.duration}</span>
                <span>Category: {tutorial.category}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex-1 rounded-xl bg-muted/50" />
    </div>
  )
}
