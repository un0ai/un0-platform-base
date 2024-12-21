"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  LayoutDashboard,
  Map,
  PieChart,
  PlayCircle,
  Settings2,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { UserNavWrapper } from "@/components/user-nav-wrapper"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// Static navigation data
const navigationData = {
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Build",
      url: "/dashboard/build",
      icon: PlayCircle,
      items: [
        {
          title: "Playground",
          url: "/dashboard/build/playground",
        },
        {
          title: "Visual Agent Builder",
          url: "/dashboard/build/visual-agent-builder",
        },
        {
          title: "Workflow Orchestration",
          url: "/dashboard/build/workflow-orchestration",
        },
        {
          title: "Model Management",
          url: "/dashboard/build/model-management",
        },
      ],
    },
    {
      title: "Deploy",
      url: "/dashboard/deploy",
      icon: Bot,
      items: [
        {
          title: "CI/CD Pipelines",
          url: "/dashboard/deploy/cicd-pipelines",
        },
        {
          title: "MLOps Tools",
          url: "/dashboard/deploy/mlops-tools",
        },
        {
          title: "Infrastructure",
          url: "/dashboard/deploy/infrastructure",
        },
      ],
    },
    {
      title: "Integrate",
      url: "/dashboard/integrate",
      icon: BookOpen,
      items: [
        {
          title: "Third-party Connectors",
          url: "/dashboard/integrate/third-party-connectors",
        },
        {
          title: "API Hub",
          url: "/dashboard/integrate/api-hub",
        },
        {
          title: "Data Sources",
          url: "/dashboard/integrate/data-sources",
        },
        {
          title: "Plugins",
          url: "/dashboard/integrate/plugins",
        },
      ],
    },
    {
      title: "Monitor",
      url: "/dashboard/monitor",
      icon: Settings2,
      items: [
        {
          title: "Performance Metrics",
          url: "/dashboard/monitor/performance-metrics",
        },
        {
          title: "System Health",
          url: "/dashboard/monitor/system-health",
        },
        {
          title: "Agent Analytics",
          url: "/dashboard/monitor/agent-analytics",
        },
        {
          title: "Logs & Alerts",
          url: "/dashboard/monitor/logs-alerts",
        },
      ],
    },
    {
      title: "Learn",
      url: "/dashboard/learn",
      icon: BookOpen,
      items: [
        {
          title: "Getting Started",
          url: "/dashboard/learn/getting-started",
        },
        {
          title: "Developer Guides",
          url: "/dashboard/learn/developer-guides",
        },
        {
          title: "Playbooks",
          url: "/dashboard/learn/playbooks",
        },
        {
          title: "Changelog",
          url: "/dashboard/learn/changelog",
        },
        {
          title: "FAQ",
          url: "/dashboard/learn/faq",
        },
        {
          title: "Blog",
          url: "/dashboard/learn/blog",
        },
      ],
    },
  ],
  navProjects: [
    {
      name: "About",
      url: "/dashboard/platform/about",
      icon: Frame,
    },
    {
      name: "Use Cases",
      url: "/dashboard/platform/use-cases",
      icon: PieChart,
    },
    {
      name: "R&D",
      url: "/dashboard/platform/research-development",
      icon: Map,
    },
    {
      name: "Careers",
      url: "/dashboard/platform/careers",
      icon: Map,
    },
    {
      name: "Contact / Support",
      url: "/dashboard/platform/contact",
      icon: Map,
    },
  ],
}

// Memoize AppSidebar component
export const AppSidebar = React.memo(function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={navigationData.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navigationData.navMain} />
        <NavProjects projects={navigationData.navProjects} />
      </SidebarContent>
      <SidebarFooter>
        <UserNavWrapper />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
})
