"use client"

import {
  GitPullRequest,
  Wrench,
  Server,
} from "lucide-react"

import { PageHeader } from "@/components/page-header"
import { SectionCard } from "@/components/section-card"

const sections = [
  {
    title: "CI/CD Pipelines",
    description: "Set up and manage continuous integration and deployment pipelines",
    icon: GitPullRequest,
    href: "/dashboard/deploy/cicd-pipelines",
  },
  {
    title: "MLOps Tools",
    description: "Access tools for machine learning operations and deployment",
    icon: Wrench,
    href: "/dashboard/deploy/mlops-tools",
  },
  {
    title: "Infrastructure",
    description: "Manage your deployment infrastructure and resources",
    icon: Server,
    href: "/dashboard/deploy/infrastructure",
  },
]

export default function DeployPage() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <PageHeader
        title="Deploy"
        description="Deploy and manage your AI solutions"
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
