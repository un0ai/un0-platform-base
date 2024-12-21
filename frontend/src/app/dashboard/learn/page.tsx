"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  BookOpen,
  GraduationCap,
  BookMarked,
  History,
  HelpCircle,
  Newspaper,
} from "lucide-react"

export default function LearnPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Learn
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Explore our comprehensive learning resources and documentation
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="group relative overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Getting Started</h3>
            <p className="mt-2 text-muted-foreground">
              Begin your journey with un0.ai platform
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-4 w-full justify-start p-0 hover:bg-transparent hover:text-primary"
            >
              <Link href="/dashboard/learn/getting-started">
                Learn more
                <span className="sr-only">Getting Started</span>
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Developer Guides</h3>
            <p className="mt-2 text-muted-foreground">
              In-depth technical documentation and guides
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-4 w-full justify-start p-0 hover:bg-transparent hover:text-primary"
            >
              <Link href="/dashboard/learn/developer-guides">
                Learn more
                <span className="sr-only">Developer Guides</span>
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4">
              <BookMarked className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Playbooks</h3>
            <p className="mt-2 text-muted-foreground">
              Step-by-step tutorials and best practices
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-4 w-full justify-start p-0 hover:bg-transparent hover:text-primary"
            >
              <Link href="/dashboard/learn/playbooks">
                Learn more
                <span className="sr-only">Playbooks</span>
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4">
              <History className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Changelog</h3>
            <p className="mt-2 text-muted-foreground">
              Latest updates and platform changes
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-4 w-full justify-start p-0 hover:bg-transparent hover:text-primary"
            >
              <Link href="/dashboard/learn/changelog">
                Learn more
                <span className="sr-only">Changelog</span>
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">FAQ</h3>
            <p className="mt-2 text-muted-foreground">
              Common questions and answers
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-4 w-full justify-start p-0 hover:bg-transparent hover:text-primary"
            >
              <Link href="/dashboard/learn/faq">
                Learn more
                <span className="sr-only">FAQ</span>
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4">
              <Newspaper className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Blog</h3>
            <p className="mt-2 text-muted-foreground">
              News, insights, and announcements
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-4 w-full justify-start p-0 hover:bg-transparent hover:text-primary"
            >
              <Link href="/dashboard/learn/blog">
                Learn more
                <span className="sr-only">Blog</span>
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
