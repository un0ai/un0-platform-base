"use client"

import { cn } from "@/lib/utils"
import React from "react"
import { ClientOnly } from "@/components/client-only"

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <ClientOnly>
        <svg
          ref={ref}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn("size-4", className)}
          {...props}
        />
      </ClientOnly>
    )
  }
)

Icon.displayName = "Icon"
