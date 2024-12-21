"use client"

import {
  BarChart,
  Activity,
  Bot,
  Bell,
} from "lucide-react"

import { PageHeader } from "@/components/page-header"
import { SectionCard } from "@/components/section-card"

const sections = [
  {
    title: "Performance Metrics",
    description: "Monitor and analyze your AI system's performance metrics",
    icon: BarChart,
    href: "/dashboard/monitor/performance-metrics",
  },
  {
    title: "System Health",
    description: "Track the overall health and status of your platform",
    icon: Activity,
    href: "/dashboard/monitor/system-health",
  },
  {
    title: "Agent Analytics",
    description: "Analyze agent behavior and performance patterns",
    icon: Bot,
    href: "/dashboard/monitor/agent-analytics",
  },
  {
    title: "Logs & Alerts",
    description: "View system logs and manage alert configurations",
    icon: Bell,
    href: "/dashboard/monitor/logs-alerts",
  },
]

export default function MonitorPage() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <PageHeader
        title="Monitor"
        description="Monitor and analyze your AI platform's performance"
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
