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
    <Link href={href} className="block">
      <Card className="group relative overflow-hidden border bg-card transition-all hover:border-primary/50 hover:shadow-md hover:shadow-primary/5">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-primary/5 p-2 transition-colors group-hover:bg-primary/10">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-1">
              <CardTitle className="transition-colors group-hover:text-primary">{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="mt-2">
          <div className="text-sm text-muted-foreground/60">
            Click to explore
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
