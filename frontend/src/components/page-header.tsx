interface PageHeaderProps {
  title: string
  description?: string
  children?: React.ReactNode
}

export function PageHeader({
  title,
  description,
  children,
}: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="grid gap-1">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        {description && (
          <p className="text-lg text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      {children}
    </div>
  )
}
