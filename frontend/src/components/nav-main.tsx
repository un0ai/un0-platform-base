"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ChevronRight, type LucideIcon } from "lucide-react"
import { useCallback, useEffect, useState } from "react"

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
  const router = useRouter()
  const { state } = useSidebar()
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  // Memoize the parent item lookup
  const getParentItem = useCallback((pathname: string) => {
    return items.find(item => 
      item.url === pathname || // Current category page
      item.items?.some(subItem => pathname === subItem.url) // Or has active child
    )
  }, [items])

  // Auto-expand parent when navigating directly to a child or when switching from collapsed to expanded
  useEffect(() => {
    const parentItem = getParentItem(pathname)
    
    if (parentItem && !expandedItems.includes(parentItem.title) && state !== "collapsed") {
      setExpandedItems((current: string[]) => [...current, parentItem.title])
    }
  }, [pathname, getParentItem, expandedItems, setExpandedItems, state])

  const isItemExpanded = useCallback(
    (title: string) => expandedItems.includes(title),
    [expandedItems]
  )

  const toggleItem = useCallback(
    (title: string) => {
      setExpandedItems((current: string[]) =>
        current.includes(title)
          ? current.filter((t) => t !== title)
          : [...current, title]
      )
    },
    [setExpandedItems]
  )

  const handleItemClick = useCallback(
    (e: React.MouseEvent, item: typeof items[0]) => {
      e.preventDefault()
      e.stopPropagation()
      
      if (state === "collapsed") {
        router.prefetch(item.url)
        router.push(item.url)
      } else if (item.items) {
        toggleItem(item.title)
      } else {
        router.prefetch(item.url)
        router.push(item.url)
      }
    },
    [router, state, toggleItem]
  )

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const isActive = pathname === item.url
          const hasActiveChild = item.items?.some(
            (subItem) => pathname === subItem.url
          )

          // Render non-collapsible item (Dashboard, etc)
          if (!item.items) {
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  onClick={(e) => handleItemClick(e, item)}
                  isActive={pathname === item.url}
                  size="lg"
                  className={cn(
                    "flex w-full items-center",
                    state === "collapsed" && "justify-center"
                  )}
                >
                  {item.icon && <item.icon className="h-5 w-5" />}
                  <div className={cn("grid flex-1 text-left leading-tight", state === "collapsed" && "hidden")}>
                    <span className="truncate font-semibold text-base">
                      {item.title}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          }

          // Render collapsible item (Models, Playground, etc)
          return (
            <Collapsible
              key={item.title}
              asChild
              open={state !== "collapsed" && isItemExpanded(item.title)}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <div className="flex items-center">
                  <button
                    onClick={(e) => handleItemClick(e, item)}
                    className={cn(
                      "flex items-center p-2 cursor-pointer select-none grow",
                      "hover:bg-transparent hover:text-current",
                      // Apply highlight styles based on sidebar state
                      state === "collapsed" && "hover:bg-accent hover:text-accent-foreground",
                      state === "collapsed" && (isActive || hasActiveChild) && "bg-accent text-accent-foreground",
                      state !== "collapsed" && hasActiveChild && "text-sidebar-accent-foreground font-medium",
                    )}
                  >
                    {item.icon && <item.icon className="h-5 w-5" />}
                    <span className={cn("ml-2", state === "collapsed" && "hidden")}>
                      {item.title}
                    </span>
                  </button>
                  {!state.includes("collapsed") && (
                    <CollapsibleTrigger asChild>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleItem(item.title)
                        }}
                        className="p-2"
                      >
                        <ChevronRight
                          className={cn(
                            "h-5 w-5 transition-transform duration-200",
                            "group-data-[state=open]/collapsible:rotate-90"
                          )}
                        />
                      </button>
                    </CollapsibleTrigger>
                  )}
                </div>
                {state !== "collapsed" && (
                  <CollapsibleContent asChild>
                    <SidebarMenuSub>
                      {item.items.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton
                            asChild
                            isActive={pathname === subItem.url}
                            size="md"
                          >
                            <Link href={subItem.url}>{subItem.title}</Link>
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
