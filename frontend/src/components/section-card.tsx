import Link from "next/link"
import { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
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
    <Link href={href} className="block h-full">
      <Card className="group relative flex h-full flex-col overflow-hidden border bg-card transition-all hover:border-primary/50 hover:shadow-md hover:shadow-primary/5">
        <CardHeader className="flex-1">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-primary/5 p-2 transition-colors group-hover:bg-primary/10">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-1.5">
              <CardTitle className="text-lg transition-colors group-hover:text-primary">{title}</CardTitle>
              <CardDescription className="line-clamp-2 text-sm text-muted-foreground/80">{description}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="text-sm text-muted-foreground/60">
            Click to explore
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
