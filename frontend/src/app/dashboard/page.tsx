import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50 p-4">
          <h2 className="text-lg font-semibold mb-2"></h2>
          <p></p>
        </div>
        <div className="aspect-video rounded-xl bg-muted/50 p-4">
          <h2 className="text-lg font-semibold mb-2"></h2>
          <p></p>
        </div>
        <div className="aspect-video rounded-xl bg-muted/50 p-4">
          <h2 className="text-lg font-semibold mb-2"></h2>
          <p></p>
        </div>
      </div>
      <div className="flex-1 rounded-xl bg-muted/50" />
    </div>
  )
}
