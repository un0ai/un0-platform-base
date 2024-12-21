"use client"

import {
  Info,
  PieChart,
  Lightbulb,
  MessageCircle,
  Users,
} from "lucide-react"

import { PageHeader } from "@/components/page-header"
import { SectionCard } from "@/components/section-card"

const sections = [
  {
    title: "About",
    description: "Learn about un0.ai's mission, vision, and team",
    icon: Info,
    href: "/dashboard/platform/about",
  },
  {
    title: "Use Cases",
    description: "Explore real-world applications and success stories",
    icon: PieChart,
    href: "/dashboard/platform/use-cases",
  },
  {
    title: "R&D",
    description: "Discover our research and development initiatives",
    icon: Lightbulb,
    href: "/dashboard/platform/research-development",
  },
  {
    title: "Contact / Support",
    description: "Get help and connect with our support team",
    icon: MessageCircle,
    href: "/dashboard/platform/contact",
  },
  {
    title: "Careers",
    description: "Join our team and help shape the future of AI",
    icon: Users,
    href: "/dashboard/platform/careers",
  },
]

export default function PlatformPage() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <PageHeader
        title="Platform"
        description="Explore un0.ai platform information and resources"
      />
      <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
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
