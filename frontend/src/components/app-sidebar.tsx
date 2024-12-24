"use client"

import * as React from "react"
import {
  Book,
  Blocks,
  Cpu,
  Gauge,
  Network,
  Bot,
  Command,
  Frame,
  Info,
  Lightbulb,
  FlaskConical,
  Briefcase,
  HelpCircle,
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
      logo: Command,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Frame,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      protected: true,
    },
    {
      title: "Build",
      url: "/dashboard/build",
      icon: Cpu,
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
          protected: true,
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
      icon: Network,
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
      icon: Gauge,
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
      icon: Book,
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
    /* {
      title: "Platform",
      url: "/dashboard/platform",
      icon: Blocks,
      items: [
        {
          title: "About",
          url: "/dashboard/platform/about",
        },
        {
          title: "Use Cases",
          url: "/dashboard/platform/use-cases",
        },
        {
          title: "R&D",
          url: "/dashboard/platform/research-development",
        },
        {
          title: "Contact / Support",
          url: "/dashboard/platform/contact",
        },
        {
          title: "Careers",
          url: "/dashboard/platform/careers",
        },
      ],
    }, */
  ],
  navProjects: [
    {
      name: "About",
      url: "/dashboard/platform/about",
      icon: Info,
    },
    {
      name: "Use Cases",
      url: "/dashboard/platform/use-cases",
      icon: Lightbulb,
    },
    {
      name: "R&D",
      url: "/dashboard/platform/research-development",
      icon: FlaskConical,
    },
    {
      name: "Careers",
      url: "/dashboard/platform/careers",
      icon: Briefcase,
    },
    {
      name: "Contact / Support",
      url: "/dashboard/platform/contact",
      icon: HelpCircle,
    },
  ],
}

// Memoize AppSidebar component
export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
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
}
