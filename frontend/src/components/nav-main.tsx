"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, type LucideIcon } from "lucide-react"
import { useCallback } from "react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { usePersistedState } from "@/hooks/use-persisted-state"
import { cn } from "@/lib/utils"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  const pathname = usePathname()
  const { state } = useSidebar()
  const [expandedItems, setExpandedItems] = usePersistedState<string[]>("nav-main:expanded-items", [])

  const isItemExpanded = useCallback((title: string) => {
    return expandedItems.includes(title)
  }, [expandedItems])

  const toggleItem = useCallback((title: string) => {
    setExpandedItems(current => 
      current.includes(title)
        ? current.filter(t => t !== title)
        : [...current, title]
    )
  }, [setExpandedItems])

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const isActive = pathname === item.url
          const hasActiveChild = item.items?.some(subItem => pathname === subItem.url)

          // Render non-collapsible item (Dashboard, Sales, etc)
          if (!item.items) {
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton tooltip={item.title} asChild isActive={isActive}>
                  <Link href={item.url} className="flex w-full items-center">
                    {item.icon && <item.icon className="h-5 w-5" />}
                    <span className={cn("ml-2", state === "collapsed" && "hidden")}>
                      {item.title}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          }

          // Render collapsible item (Models, Playground, etc)
          return (
            <Collapsible
              key={item.title}
              asChild
              open={state !== "collapsed" && (isItemExpanded(item.title) || hasActiveChild)}
              onOpenChange={() => toggleItem(item.title)}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <div className={cn(
                    "flex w-full items-center p-2 cursor-pointer select-none",
                    "hover:bg-transparent hover:text-current",
                    hasActiveChild && "text-sidebar-accent-foreground font-medium"
                  )}>
                    {item.icon && <item.icon className="h-5 w-5" />}
                    <span className={cn("ml-2", state === "collapsed" && "hidden")}>
                      {item.title}
                    </span>
                    <ChevronRight 
                      className={cn(
                        "ml-auto h-5 w-5 transition-transform duration-200",
                        "group-data-[state=open]/collapsible:rotate-90",
                        state === "collapsed" && "hidden"
                      )} 
                    />
                  </div>
                </CollapsibleTrigger>
                {state !== "collapsed" && (
                  <CollapsibleContent asChild>
                    <SidebarMenuSub>
                      {item.items.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild isActive={pathname === subItem.url}>
                            <Link href={subItem.url}>
                              {subItem.title}
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                )}
              </SidebarMenuItem>
            </Collapsible>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
