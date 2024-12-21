"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Frame, Map, PieChart } from "lucide-react"
import { useEffect } from "react"

const projectCategories = [
  {
    name: "Sales & Marketing",
    description: "Projects focused on market analysis, customer engagement, and sales optimization",
    icon: PieChart,
    url: "/dashboard/projects/sales-marketing",
    lastUpdated: "2 days ago",
  },
  {
    name: "Research & Development",
    description: "Innovation projects exploring new technologies and methodologies",
    icon: Map,
    url: "/dashboard/projects/research-development",
    lastUpdated: "5 days ago",
  },
  {
    name: "Design Engineering",
    description: "Projects focused on UI/UX and technical design solutions",
    icon: Frame,
    url: "/dashboard/projects/design-engineering",
    lastUpdated: "1 week ago",
  },
]

export default function ProjectsPage() {
  const router = useRouter()

  // Prefetch all project category routes
  useEffect(() => {
    projectCategories.forEach(category => {
      router.prefetch(category.url)
    })
  }, [router])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Project Categories</h1>
        <p className="text-muted-foreground">
          Browse and manage projects by category
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projectCategories.map((category) => (
          <Link 
            key={category.name} 
            href={category.url}
            prefetch={true}
          >
            <Card className="hover:bg-muted/50 transition-colors">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-2">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                  <CardDescription>Last updated: {category.lastUpdated}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
