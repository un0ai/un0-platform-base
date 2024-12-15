"use client"

import * as React from "react"
import { usePathname } from "next/navigation"

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

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()

  // Memoize breadcrumb info calculation
  const breadcrumbInfo = React.useMemo(() => {
    let showSeparator = true
    let parentSection = "Dashboard"
    let currentPage = null
    let parentPath = "/dashboard"

    const pathParts = pathname.split("/").filter(Boolean)
    if (pathParts.length > 1) {
      const section = pathParts[1]
      const subSection = pathParts[2]

      // Handle about page with empty breadcrumb
      if (section === "about") {
        showSeparator = false
        parentSection = ""
      }
      // Handle projects section
      else if (section === "projects") {
        parentSection = "Projects"
        parentPath = "/dashboard/projects"

        if (subSection) {
          if (subSection === "more") {
            currentPage = "More"
            showSeparator = true
          } else {
            currentPage = subSection
              .split("-")
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")
            showSeparator = true
          }
        } else {
          showSeparator = false
        }
      }
      // Handle other sections
      else if (section === "settings" && pathParts.length > 2) {
        parentSection = "Settings"
        currentPage = pathParts[2].charAt(0).toUpperCase() + pathParts[2].slice(1)
      } else if (section === "projects" && pathParts.length > 2) {
        parentSection = "Projects"
        currentPage = pathParts[2]
          .split("-")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      } else {
        parentSection = section.charAt(0).toUpperCase() + section.slice(1)
      }
    } else {
      // We're on the dashboard page
      showSeparator = false
    }

    return { showSeparator, parentSection, currentPage, parentPath }
  }, [pathname])

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
                  <BreadcrumbLink href={breadcrumbInfo.parentPath}>
                    {breadcrumbInfo.parentSection}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {breadcrumbInfo.showSeparator && breadcrumbInfo.currentPage && (
                  <>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>{breadcrumbInfo.currentPage}</BreadcrumbPage>
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
