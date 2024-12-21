import Link from "next/link"
import { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface SectionCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
}

export function SectionCard({ title, description, icon: Icon, href }: SectionCardProps) {
  return (
    <Card className="relative overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
      <Link href={href} className={cn(buttonVariants({ variant: "ghost" }), "absolute inset-0 h-full w-full")}>
        <span className="sr-only">Go to {title}</span>
      </Link>
      <CardHeader>
        <div className="flex items-center gap-4">
          <Icon className="h-8 w-8 text-primary" />
          <div className="space-y-1">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="mt-2">
        <div className="text-sm text-muted-foreground">
          Click to explore
        </div>
      </CardContent>
    </Card>
  )
}
