import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="text-center space-y-8 relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-primary/10 animate-pulse-slow" />
      <div className="relative z-10 space-y-4">
        <Badge variant="outline" className="text-sm font-medium animate-fade-in px-3 py-1">
          v1.0.0
        </Badge>
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl text-primary animate-slide-in">
          Quran JSON API
        </h1>
      </div>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
        Access Quran text, transliteration, and translations in JSON format through a simple and powerful API.
      </p>
      <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 animate-float hover-lift">
          <Link href="/getting-started">Get Started</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="animate-float hover-lift" style={{ animationDelay: '0.2s' }}>
          <Link href="/api-reference">API Reference</Link>
        </Button>
      </div>
    </section>
  )
}

