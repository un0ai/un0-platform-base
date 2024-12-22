"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function TeamSwitcher() {
  const pathname = usePathname()
  const isActive = pathname === "/dashboard/about"

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" asChild isActive={isActive}>
          <Link href="/dashboard/about" className="flex w-full items-center">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground dark:bg-sidebar-primary/90">
              <Image
                src="/avatars/un0-image6.jpeg"
                alt="un0.ai Logo"
                width={32}
                height={32}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">
                [ un0.ai ]
              </span>
              <span className="truncate text-xs">AI Playground</span>
            </div>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
