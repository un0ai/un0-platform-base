"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AudioWaveform } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface TeamSwitcherProps {
  teams: {
    label: string
    teams: {
      name: string
      id: string
    }[]
  }[]
}

export function TeamSwitcher({ teams }: TeamSwitcherProps) {
  const pathname = usePathname()
  const isActive = pathname === "/dashboard/about"

  return (
    <Link
      href="/dashboard/about"
      className={cn(
        buttonVariants({ variant: "ghost", size: "lg" }),
        "w-full justify-start",
        isActive && "bg-muted"
      )}
    >
      <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <AudioWaveform className="size-4" />
      </div>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold">
          [ un0.ai ]
        </span>
        <span className="truncate text-xs">AI Playground</span>
      </div>
    </Link>
  )
}
