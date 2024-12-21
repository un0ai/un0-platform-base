"use client"

import {
  Link2,
  Globe,
  Database,
  Puzzle,
} from "lucide-react"

import { PageHeader } from "@/components/page-header"
import { SectionCard } from "@/components/section-card"

const sections = [
  {
    title: "Third-party Connectors",
    description: "Connect with external services and tools to extend your platform's capabilities",
    icon: Link2,
    href: "/dashboard/integrate/third-party-connectors",
  },
  {
    title: "API Hub",
    description: "Access and manage API integrations for seamless service connections",
    icon: Globe,
    href: "/dashboard/integrate/api-hub",
  },
  {
    title: "Data Sources",
    description: "Configure and manage your data connections and sources",
    icon: Database,
    href: "/dashboard/integrate/data-sources",
  },
  {
    title: "Plugins",
    description: "Extend platform functionality with custom plugins and add-ons",
    icon: Puzzle,
    href: "/dashboard/integrate/plugins",
  },
]

export default function IntegratePage() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <PageHeader
        title="Integrate"
        description="Connect and extend your AI platform with powerful integrations"
      />
      <div className="grid gap-4 p-4 md:grid-cols-2">
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
