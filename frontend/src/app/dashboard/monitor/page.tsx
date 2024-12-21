"use client"

import {
  ActivitySquare,
  AlertCircle,
  BarChart3,
  Bot,
} from "lucide-react"

import { PageHeader } from "@/components/page-header"
import { SectionCard } from "@/components/section-card"

const sections = [
  {
    title: "Agent Analytics",
    description: "Track and analyze your AI agents' performance, usage patterns, and interactions",
    icon: Bot,
    href: "/dashboard/monitor/agent-analytics",
  },
  {
    title: "Performance Metrics",
    description: "Monitor key performance indicators and system metrics in real-time",
    icon: BarChart3,
    href: "/dashboard/monitor/performance-metrics",
  },
  {
    title: "Logs & Alerts",
    description: "View system logs and configure alert notifications for critical events",
    icon: AlertCircle,
    href: "/dashboard/monitor/logs-alerts",
  },
  {
    title: "System Health",
    description: "Monitor overall system health, resource usage, and infrastructure status",
    icon: ActivitySquare,
    href: "/dashboard/monitor/system-health",
  },
]

export default function MonitorPage() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <PageHeader
        title="Monitor"
        description="Monitor and analyze your AI platform's performance and health"
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
