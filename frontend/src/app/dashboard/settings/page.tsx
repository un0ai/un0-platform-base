"use client"

import { SectionOverview } from "@/components/section-overview"

export default function SettingsPage() {
  return (
    <SectionOverview
      title="Settings"
      description="Configure and customize your account and platform settings."
      items={[
        {
          title: "General",
          description: "Manage your account settings and preferences.",
          url: "/dashboard/settings/general",
        },
        {
          title: "Team",
          description: "Manage team members and their access levels.",
          url: "/dashboard/settings/team",
        },
        {
          title: "Limits",
          description: "View and configure usage limits and quotas.",
          url: "/dashboard/settings/limits",
        },
        {
          title: "Billing",
          description: "Manage your subscription and billing information.",
          url: "/dashboard/settings/billing",
        },
      ]}
    />
  )
}
