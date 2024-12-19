"use client"

import { cn } from "@/lib/utils"
import React from "react"

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("size-4", className)}
        {...props}
      />
    )
  }
)
