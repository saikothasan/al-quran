import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Globe, FileJson, Languages } from 'lucide-react'

const features = [
  {
    icon: Book,
    title: "Complete Quran Text",
    description: "Access the complete Quran text in Uthmani script with precise formatting"
  },
  {
    icon: Globe,
    title: "Multiple Languages",
    description: "Translations available in 11 different languages from trusted sources"
  },
  {
    icon: FileJson,
    title: "JSON Format",
    description: "Clean and structured JSON format for easy integration in any application"
  },
  {
    icon: Languages,
    title: "Transliteration",
    description: "English transliteration to help with proper pronunciation"
  }
]

export function FeatureShowcase() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {features.map(({ icon: Icon, title, description }, index) => (
        <Card key={title} className="group transition-all duration-300 hover:shadow-lg overflow-hidden animate-fade-in hover-lift" style={{ animationDelay: `${index * 100}ms` }}>
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary text-primary-foreground animate-float">
                <Icon className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg">{title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription>{description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

