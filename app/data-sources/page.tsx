import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Globe, Database } from 'lucide-react'

export default function DataSources() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
        Data Sources
      </h1>
      
      <p className="text-xl text-muted-foreground mb-8">
        The Quran JSON API sources its data from reputable Quran translation projects and organizations.
      </p>

      <div className="grid gap-6">
        <Card className="group transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Book className="h-6 w-6" />
              </div>
              <div>
                <CardTitle>Quran Text</CardTitle>
                <CardDescription>The Noble Qur&apos;an Encyclopedia</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              The Uthmani Quran text is sourced from The Noble Qur&apos;an Encyclopedia (quranenc.com).
            </p>
          </CardContent>
        </Card>

        <Card className="group transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Globe className="h-6 w-6" />
              </div>
              <div>
                <CardTitle>English Transliteration</CardTitle>
                <CardDescription>Tanzil.net</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              The English transliteration is sourced from tanzil.net.
            </p>
          </CardContent>
        </Card>

        <Card className="group transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Database className="h-6 w-6" />
              </div>
              <div>
                <CardTitle>Translations</CardTitle>
                <CardDescription>Various Sources</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="font-medium">Tanzil.net Translations</div>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Bengali by Muhiuddin Khan</li>
                  <li>English by Saheeh International</li>
                  <li>Spanish by Muhammad Isa García</li>
                  <li>French by Muhammad Hamidullah</li>
                  <li>Russian by Elmir Kuliev</li>
                </ul>
              </div>
              <div className="space-y-2">
                <div className="font-medium">Other Sources</div>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Indonesian by Ministry of Religious Affairs</li>
                  <li>Swedish by Knut Bernström</li>
                  <li>Turkish by Diyanet İşleri</li>
                  <li>Urdu by Abul A'la Maududi</li>
                  <li>Chinese by Muhammad Makin</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle>License</CardTitle>
            <CardDescription>CC-BY-SA 4.0</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This project is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License.
              You are free to use, share, and adapt the data, provided you give appropriate credit and share under the same license.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

