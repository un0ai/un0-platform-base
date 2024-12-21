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
    title: "FAQ",
    description: "Answers to commonly asked questions",
    icon: HelpCircle,
    href: "/dashboard/learn/faq",
  },
  {
    title: "Blog",
    description: "Latest news, updates and insights from the un0.ai team",
    icon: Newspaper,
    href: "/dashboard/learn/blog",
  },
  {
    title: "Documentation",
    description: "Comprehensive platform documentation and guides",
    icon: FileText,
    href: "/dashboard/learn/documentation",
  },
  {
    title: "Changelog",
    description: "Recent updates and improvements to the platform",
    icon: History,
    href: "/dashboard/learn/changelog",
  },
]

export default function LearnPage() {
  return (
    <div className="flex-1 space-y-8 p-8 pt-6">
      <PageHeader
        heading="Learn"
        subheading="Explore our documentation, guides, and resources"
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <SectionCard
            key={section.title}
            title={section.title}
            description={section.description}
            icon={section.icon}
            href={section.href}
          />
        ))}
      </div>
    </div>
  )
}
