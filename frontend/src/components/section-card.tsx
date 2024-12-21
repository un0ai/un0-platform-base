"use client"

import { LucideIcon } from "lucide-react"
import Link from "next/link"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface SectionCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  className?: string
}

export function SectionCard({
  title,
  description,
  icon: Icon,
  href,
  className,
}: SectionCardProps) {
  return (
    <Link href={href} className="block h-full">
      <Card className={cn(
        "group relative h-full overflow-hidden transition-all hover:shadow-lg",
        "border border-border/50 hover:border-border/80 hover:bg-muted/50",
        className
      )}>
        <CardHeader className="space-y-2 pb-4">
          <div className="mb-2 inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20">
            <Icon className="size-5" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="text-sm">{description}</CardDescription>
        </CardHeader>
        <CardContent className="pb-6">
          <div className="flex items-center text-sm text-muted-foreground">
            <span className="group-hover:underline">Learn more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
              className="ml-1 size-4 transition-transform group-hover:translate-x-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m7.5 15 5-5-5-5"
              />
            </svg>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
