'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Book, BookOpen, FileJson, Database, Menu, Search, Code, FileCode2, CopyrightIcon, Globe2, BookText } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

const navItems = [
  { name: 'Introduction', href: '/', icon: Book },
  { name: 'Installation', href: '/installation', icon: FileJson },
  { name: 'Complete Quran', href: '/complete-quran', icon: BookText },
  { name: 'Chapters', href: '/chapters', icon: BookOpen },
  { name: 'Verses', href: '/verses', icon: FileCode2 },
  { name: 'Translations', href: '/translations', icon: Globe2 },
  { name: 'Generate JSON', href: '/generate', icon: Code },
  { name: 'Data Sources', href: '/sources', icon: Database },
  { name: 'License', href: '/license', icon: CopyrightIcon },
]

export default function Navigation() {
  const pathname = usePathname()

  const NavContent = () => (
    <>
      <div className="mb-4 px-4">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
          <Input className="pl-8" placeholder="Search documentation..." />
        </div>
      </div>
      <div className="space-y-1 px-2">
        {navItems.map(({ name, href, icon: Icon }, index) => (
          <Button
            key={href}
            asChild
            variant="ghost"
            className={cn(
              "w-full justify-start gap-2 transition-all duration-200 hover:bg-muted animate-fade-in",
              pathname === href ? "bg-muted font-semibold" : ""
            )}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <Link href={href}>
              <Icon className="h-4 w-4" />
              {name}
            </Link>
          </Button>
        ))}
      </div>
    </>
  )

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:fixed md:inset-y-0 md:z-50 md:flex md:w-72 md:flex-col">
        <div className="border-b px-6 py-4 flex items-center justify-between bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <Link href="/" className="flex items-center space-x-2 group">
            <Book className="h-6 w-6 bg-primary text-primary-foreground rounded-md p-1 group-hover:animate-float hover-lift" />
            <span className="font-bold text-2xl text-primary">Quran JSON</span>
          </Link>
          <ThemeToggle />
        </div>
        <ScrollArea className="flex-1 py-4 border-r">
          <nav>
            <NavContent />
          </nav>
        </ScrollArea>
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden fixed top-0 inset-x-0 h-16 items-center justify-between border-b px-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <Link href="/" className="flex items-center space-x-2">
          <Book className="h-6 w-6 bg-primary text-primary-foreground rounded-md p-1 hover-lift" />
          <span className="font-bold text-xl text-primary">Quran JSON</span>
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <nav className="mt-8">
                <NavContent />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  )
}

