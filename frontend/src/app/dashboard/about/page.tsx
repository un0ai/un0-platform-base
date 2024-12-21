"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-8">
      <Card className="border-none shadow-md">
        <CardContent className="flex flex-col items-center justify-center space-y-6 p-8">
          <h1 className="text-3xl font-bold tracking-tight text-center">About un0.ai</h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl">
            Learn more about un0.ai by visiting our landing page or exploring our platform documentation.
          </p>
          <div className="flex gap-4">
            <a
              href="https://un0.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Visit Landing Page
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
            <Link
              href="/dashboard/platform/about"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              Platform Documentation
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}