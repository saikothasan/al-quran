import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface CodeBlockProps {
  title?: string
  description?: string
  code: string
  className?: string
}

export function CodeBlock({ title, description, code, className }: CodeBlockProps) {
  return (
    <Card className={cn("hover-lift transition-all duration-300", className)}>
      {(title || description) && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent>
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
          <code>{code}</code>
        </pre>
      </CardContent>
    </Card>
  )
}

