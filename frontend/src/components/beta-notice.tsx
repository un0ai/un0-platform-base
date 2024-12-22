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
import { useRouter } from "next/navigation"

export function BetaNotice() {
  const router = useRouter()
  return (
    <div className="rounded-lg border-2 border-yellow-500/20 bg-yellow-500/5 dark:border-yellow-400/20 dark:bg-yellow-400/5 p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent dark:from-yellow-400/10" />
      <div className="relative flex items-center gap-2">
        <AlertCircle className="h-5 w-5 text-yellow-500 dark:text-yellow-400" />
        <div>
          <h3 className="font-semibold text-yellow-500 dark:text-yellow-400">Private Beta Feature</h3>
          <p className="text-sm text-yellow-600/90 dark:text-yellow-300/90">
            You are viewing simulated data. Apply for beta access to use this feature.
          </p>
        </div>
        <div className="ml-auto">
          <Button
            variant="outline"
            onClick={() => {
              router.push("/dashboard/playground/private-beta")
            }}
            className="border-yellow-500/20 hover:border-yellow-500/40 dark:border-yellow-400/20 dark:hover:border-yellow-400/40"
          >
            Apply for Beta
          </Button>
        </div>
      </div>
    </div>
  )
}

interface BetaPageWrapperProps {
  children: React.ReactNode
  className?: string
}

export function BetaRestrictedAction({ children }: { children: React.ReactNode }) {
  const router = useRouter()
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
            This action is only available to beta users. Please apply for beta access to use this feature.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end">
          <Button
            variant="default"
            onClick={() => {
              router.push("/dashboard/playground/private-beta")
            }}
            size="sm"
          >
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
