import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from 'lucide-react'

export default function GettingStarted() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">
        Getting Started
      </h1>
      
      <Alert className="mb-8">
        <Info className="h-4 w-4" />
        <AlertTitle>Quick Tip</AlertTitle>
        <AlertDescription>
          All JSON files are served through JSDELIVR CDN for fast and reliable access worldwide.
        </AlertDescription>
      </Alert>
      
      <Tabs defaultValue="complete" className="space-y-8">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
          <TabsTrigger value="complete">Complete Quran</TabsTrigger>
          <TabsTrigger value="chapters">Chapters</TabsTrigger>
          <TabsTrigger value="verses">Verses</TabsTrigger>
        </TabsList>

        <TabsContent value="complete" className="space-y-6">
          <Card className="hover-lift" >
            <CardHeader>
              <CardTitle>Complete Quran</CardTitle>
              <CardDescription>Access the entire Quran text with translations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Arabic Text Only</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>https://cdn.jsdelivr.net/npm/quran-cloud@1.0.0/dist/quran.json</code>
                </pre>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">With Transliteration</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>https://cdn.jsdelivr.net/npm/quran-cloud@1.0.0/dist/quran_transliteration.json</code>
                </pre>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">With Translation</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>https://cdn.jsdelivr.net/npm/quran-cloud@1.0.0/dist/quran_{'{langCode}'}.json</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardHeader>
              <CardTitle>Example Usage</CardTitle>
              <CardDescription>How to fetch and use the complete Quran data</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`// Fetch complete Quran with English translation
const response = await fetch(
  'https://cdn.jsdelivr.net/npm/quran-cloud@1.0.0/dist/quran_en.json'
);
const data = await response.json();

// Access first chapter (Al-Fatihah)
const alFatihah = data.chapters[0];
console.log(alFatihah.name); // "الفاتحة"
console.log(alFatihah.translation); // "The Opening"`}</code>
              </pre>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="chapters" className="space-y-6">
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle>Chapter Access</CardTitle>
              <CardDescription>Access individual chapters (surahs) of the Quran</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Single Chapter</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>https://cdn.jsdelivr.net/npm/quran-cloud@1.0.0/dist/chapters/{'{chapterNumber}'}.json</code>
                </pre>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Chapter with Translation</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>https://cdn.jsdelivr.net/npm/quran-cloud@1.0.0/dist/chapters/{'{langCode}'}/{'{chapterNumber}'}.json</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardHeader>
              <CardTitle>Example Usage</CardTitle>
              <CardDescription>How to fetch and use chapter data</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`// Fetch Al-Fatihah with English translation
const response = await fetch(
  'https://cdn.jsdelivr.net/npm/quran-cloud@1.0.0/dist/chapters/en/1.json'
);
const chapter = await response.json();

// Access verses
chapter.verses.forEach(verse => {
  console.log(verse.text); // Arabic text
  console.log(verse.translation); // English translation
});`}</code>
              </pre>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="verses" className="space-y-6">
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle>Verse Access</CardTitle>
              <CardDescription>Access individual verses (ayahs) with all translations</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                <code>https://cdn.jsdelivr.net/npm/quran-cloud@1.0.0/dist/verses/{'{verseNumber}'}.json</code>
              </pre>
              <p className="text-sm text-muted-foreground mt-2">
                Verse numbers range from 1 to 6236
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardHeader>
              <CardTitle>Example Usage</CardTitle>
              <CardDescription>How to fetch and use verse data</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`// Fetch first verse of Al-Fatihah
const response = await fetch(
  'https://cdn.jsdelivr.net/npm/quran-cloud@1.0.0/dist/verses/1.json'
);
const verse = await response.json();

console.log(verse.text); // Arabic text
console.log(verse.transliteration); // English transliteration
console.log(verse.translations.en); // English translation
console.log(verse.translations.ar); // Arabic translation`}</code>
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

