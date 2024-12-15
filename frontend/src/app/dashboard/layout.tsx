"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation"

// Navigation structure mapping
const navigationMap = {
  playground: {
    parent: "Playground",
    path: "/dashboard/playground",
    items: [
      { title: "Tool1", url: "/dashboard/playground/tool1" },
      { title: "Tool2", url: "/dashboard/playground/tool2" },
      { title: "Tool3", url: "/dashboard/playground/tool3" },
    ],
  },
  models: {
    parent: "Models",
    path: "/dashboard/models",
    items: [
      { title: "Genesis", url: "/dashboard/models/genesis" },
      { title: "Explorer", url: "/dashboard/models/explorer" },
      { title: "Quantum", url: "/dashboard/models/quantum" },
    ],
  },
  docs: {
    parent: "Documentation",
    path: "/dashboard/docs",
    items: [
      { title: "Tutorials", url: "/dashboard/docs/tutorials" },
      { title: "Get Started", url: "/dashboard/docs/get-started" },
      { title: "Changelog", url: "/dashboard/docs/changelog" },
    ],
  },
  settings: {
    parent: "Settings",
    path: "/dashboard/settings",
    items: [
      { title: "General", url: "/dashboard/settings/general" },
      { title: "Team", url: "/dashboard/settings/team" },
      { title: "Limits", url: "/dashboard/settings/limits" },
      { title: "Billing", url: "/dashboard/settings/billing" },
    ],
  },
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const pathParts = pathname.split("/").filter(Boolean)
  
  // Get breadcrumb info
  let showSeparator = true
  let parentSection = "Dashboard"
  let currentPage = null
  let parentPath = "/dashboard"
  
  if (pathParts.length > 1) {
    const section = pathParts[1]
    const subSection = pathParts[2]

    // Handle projects section
    if (section === "projects") {
      if (subSection) {
        parentSection = "Projects"
        currentPage = subSection.charAt(0).toUpperCase() + subSection.slice(1)
        parentPath = "/dashboard/projects"
      } else {
        parentSection = "Projects"
        showSeparator = false
      }
    }
    // Handle other sections
    else if (section in navigationMap) {
      parentSection = navigationMap[section].parent
      parentPath = navigationMap[section].path
      if (subSection) {
        const subItem = navigationMap[section].items.find(item => item.url.endsWith(subSection))
        if (subItem) {
          currentPage = subItem.title
        }
      }
    }
  } else {
    // We're on the dashboard page
    showSeparator = false
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href={parentPath}>
                    {parentSection}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {showSeparator && currentPage && (
                  <>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>{currentPage}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                )}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center gap-2 px-4 ml-auto">
            <ModeToggle />
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
