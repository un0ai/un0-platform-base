"use client"

import {
  GraduationCap,
  Code2,
  FileText,
  History,
  HelpCircle,
  Newspaper,
} from "lucide-react"

import { PageHeader } from "@/components/page-header"
import { SectionCard } from "@/components/section-card"

const sections = [
  {
    title: "Getting Started",
    description: "Begin your journey with un0.ai platform basics and fundamentals",
    icon: GraduationCap,
    href: "/dashboard/learn/getting-started",
  },
  {
    title: "Developer Guides",
    description: "In-depth technical documentation and API references",
    icon: Code2,
    href: "/dashboard/learn/developer-guides",
  },
  {
    title: "Playbooks",
    description: "Step-by-step guides and best practices for common scenarios",
    icon: FileText,
    href: "/dashboard/learn/playbooks",
  },
  {
    title: "Changelog",
    description: "Stay updated with the latest platform changes and features",
    icon: History,
    href: "/dashboard/learn/changelog",
  },
  {
    title: "FAQ",
    description: "Find answers to commonly asked questions",
    icon: HelpCircle,
    href: "/dashboard/learn/faq",
  },
  {
    title: "Blog",
    description: "Read about AI trends, updates, and success stories",
    icon: Newspaper,
    href: "/dashboard/learn/blog",
  },
]

export default function LearnPage() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <PageHeader
        title="Learn"
        description="Explore our comprehensive learning resources and documentation"
      />
      <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {sections.map((section) => (
          <SectionCard
            key={section.title}
            {...section}
          />
        ))}
      </div>
    </div>
  )
}
