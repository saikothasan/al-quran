import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { FileJson, Globe, Book, Languages } from 'lucide-react'

const features = [
  {
    icon: Book,
    title: "Complete Quran Text",
    description: "Access the complete Quran text in Uthmani script from The Noble Qur'an Encyclopedia"
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
    description: "English transliteration sourced from Tanzil.net"
  }
]

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto space-y-24 px-4 sm:px-6 lg:px-8">
      <section className="text-center space-y-8 relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-primary/10 animate-pulse-slow" />
        <div className="relative z-10 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Badge variant="outline" className="text-sm font-medium animate-fade-in px-3 py-1">
              v1.0.0
            </Badge>
            <Link href="https://www.npmjs.com/package/quran-cloud" className="hover:opacity-80">
              <img src="https://badgen.net/npm/v/quran-cloud" alt="Latest Version" className="h-6" />
            </Link>
          </div>
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl text-primary animate-slide-in">
            Quran JSON
          </h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Access Quran text, transliteration, and translations in JSON format through a simple and powerful API.
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 animate-float hover-lift">
            <Link href="/cdn">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="animate-float hover-lift" style={{ animationDelay: '0.2s' }}>
            <Link href="https://github.com/saikothasan/quran-cloud">View on GitHub</Link>
          </Button>
        </div>
      </section>

      <section>
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
      </section>

      <section>
        <Card className="border-primary/20 bg-primary/5 overflow-hidden hover-lift">
          <div className="absolute inset-0 bg-primary/5 animate-pulse-slow" />
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Quick Example</CardTitle>
            <CardDescription>
              Start using the Quran JSON API in your project with a simple fetch request.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-card p-4 rounded-lg overflow-x-auto relative">
              <div className="absolute inset-0 bg-primary/5 animate-pulse-slow" />
              <code className="text-sm relative z-10">{`fetch('https://cdn.jsdelivr.net/npm/quran-cloud@1.0.0/dist/quran.json')
  .then(response => response.json())
  .then(data => console.log(data));`}</code>
            </pre>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

