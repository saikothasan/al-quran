import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '@/components/navigation'
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from '@/lib/utils'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Quran JSON API Documentation',
    template: '%s | Quran JSON API'
  },
  description: 'Documentation for the Quran JSON API with text, transliteration, and translations',
  keywords: ['Quran', 'JSON', 'API', 'transliteration', 'translation'],
  authors: [{ name: 'Saikot Hasan', url: 'https://nullbite.net' }],
  creator: 'Saikot Hasan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://quran-json-docs.vercel.app',
    siteName: 'Quran JSON API Documentation',
    images: [
      {
        url: 'https://quran-json-docs.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Quran JSON API Documentation'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quran JSON API Documentation',
    description: 'Documentation for the Quran JSON API with text, transliteration, and translations',
    images: ['https://quran-json-docs.vercel.app/og-image.png'],
    creator: '@saikothasan'
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  },
  manifest: 'https://quran-json-docs.vercel.app/site.webmanifest'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "antialiased min-h-screen")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen">
            <Navigation />
            <div className="flex-1 md:pl-72">
              <main className="container mx-auto px-4 py-16 md:px-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

