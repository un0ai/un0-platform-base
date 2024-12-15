import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Children, isValidElement, ReactNode } from "react"

export interface StepsProps extends React.HTMLAttributes<HTMLDivElement> {
  steps?: { title: string; description?: string }[]
  currentStep?: number
  children?: ReactNode
}

export function Steps({
  steps,
  currentStep = 1,
  className,
  children,
  ...props
}: StepsProps) {
  // If children are provided, extract step data from them
  const stepsFromChildren = children
    ? Children.toArray(children)
        .filter(child => isValidElement(child) && child.type === Step)
        .map((child: any) => ({
          title: child.props.title,
          description: child.props.description,
        }))
    : []

  // Use provided steps array or steps extracted from children
  const stepsToRender = steps || stepsFromChildren

  return (
    <div className={cn("space-y-4", className)} {...props}>
      {stepsToRender.map((step, index) => (
        <Step
          key={index}
          title={step.title}
          description={step.description}
          isCompleted={currentStep > index + 1}
          isActive={currentStep === index + 1}
          position={index + 1}
        />
      ))}
    </div>
  )
}

interface StepProps {
  title: string
  description?: string
  isCompleted?: boolean
  isActive?: boolean
  position?: number
}

export function Step({
  title,
  description,
  isCompleted,
  isActive,
  position,
}: StepProps) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full border-2",
            isCompleted && "border-primary bg-primary text-primary-foreground",
            isActive && "border-primary",
            !isCompleted && !isActive && "border-muted"
          )}
        >
          {isCompleted ? (
            <Check className="h-4 w-4" />
          ) : (
            <span className="text-sm font-medium">{position}</span>
          )}
        </div>
        {position !== 4 && (
          <div
            className={cn(
              "h-12 w-0.5",
              isCompleted ? "bg-primary" : "bg-muted"
            )}
          />
        )}
      </div>
      <div className="flex flex-col">
        <h3 className="font-medium leading-none">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  )
}
