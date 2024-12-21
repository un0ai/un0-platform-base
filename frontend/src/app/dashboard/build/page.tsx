"use client"

import {
  PlayCircle,
  GitBranch,
  Box,
  Database,
} from "lucide-react"

import { PageHeader } from "@/components/page-header"
import { SectionCard } from "@/components/section-card"

const sections = [
  {
    title: "Playground",
    description: "Experiment with AI models and test your ideas in a sandbox environment",
    icon: PlayCircle,
    href: "/dashboard/build/playground",
  },
  {
    title: "Visual Agent Builder",
    description: "Create and customize AI agents using our visual interface",
    icon: Box,
    href: "/dashboard/build/visual-agent-builder",
  },
  {
    title: "Workflow Orchestration",
    description: "Design and manage complex AI workflows and pipelines",
    icon: GitBranch,
    href: "/dashboard/build/workflow-orchestration",
  },
  {
    title: "Model Management",
    description: "Manage, version, and deploy your AI models",
    icon: Database,
    href: "/dashboard/build/model-management",
  },
]

export default function BuildPage() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <PageHeader
        title="Build"
        description="Create, test, and manage your AI solutions"
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
