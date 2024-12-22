import { AlertCircle, Lock } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function BetaNotice() {
  return (
    <Alert variant="default" className="bg-primary-foreground border-primary/20 mb-6 shadow-sm">
      <AlertCircle className="h-5 w-5 text-primary" />
      <div className="flex-1 flex justify-between items-center">
        <div>
          <AlertTitle className="text-primary font-semibold">Private Beta Feature</AlertTitle>
          <AlertDescription className="text-muted-foreground text-sm">
            You are viewing simulated data. Apply for beta access to use this feature.
          </AlertDescription>
        </div>
        <Button variant="outline" size="sm" className="border-primary/20 hover:border-primary/40 hover:bg-primary/5">
          Apply for Beta
        </Button>
      </div>
    </Alert>
  )
}

interface BetaPageWrapperProps {
  children: React.ReactNode
  className?: string
}

export function BetaRestrictedAction({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5" />
            Beta Access Required
          </DialogTitle>
          <DialogDescription>
            This action is only available to beta users. Please apply for beta access to use this feature with real data.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end">
          <Button variant="default" size="sm">
            Apply for Beta Access
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function BetaPageWrapper({ children, className }: BetaPageWrapperProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <BetaNotice />
      {children}
    </div>
  )
}
