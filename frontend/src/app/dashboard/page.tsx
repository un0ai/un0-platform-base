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
    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
      <div className="aspect-video rounded-xl bg-muted/50 p-4">
        <h2 className="text-lg font-semibold mb-2">Tool 1</h2>
        <p>Description of Tool 1 functionality</p>
      </div>
      <div className="aspect-video rounded-xl bg-muted/50 p-4">
        <h2 className="text-lg font-semibold mb-2">Tool 2</h2>
        <p>Description of Tool 2 functionality</p>
      </div>
      <div className="aspect-video rounded-xl bg-muted/50 p-4">
        <h2 className="text-lg font-semibold mb-2">Tool 3</h2>
        <p>Description of Tool 3 functionality</p>
      </div>
    </div>
  )
}
