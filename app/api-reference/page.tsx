import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ApiReference() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
        API Reference
      </h1>

      <Tabs defaultValue="formats" className="space-y-8">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-2">
          <TabsTrigger value="formats">Response Formats</TabsTrigger>
          <TabsTrigger value="languages">Language Codes</TabsTrigger>
        </TabsList>

        <TabsContent value="formats" className="space-y-8">
          <Card className="group transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle>Complete Quran Response</CardTitle>
              <CardDescription>Structure of the complete Quran JSON response</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`{
  "chapters": [
    {
      "id": 1,
      "name": "الفاتحة",
      "transliteration": "Al-Fatihah",
      "translation": "The Opening",
      "type": "meccan",
      "verses": [
        {
          "id": 1,
          "text": "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
          "transliteration": "Bismillaahir Rahmaanir Raheem",
          "translation": "In the name of Allah, the Entirely Merciful, the Especially Merciful"
        }
      ]
    }
  ]
}`}</code>
              </pre>
            </CardContent>
          </Card>

          <Card className="group transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle>Single Chapter Response</CardTitle>
              <CardDescription>Structure of individual chapter JSON response</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`{
  "id": 1,
  "name": "الفاتحة",
  "transliteration": "Al-Fatihah",
  "translation": "The Opening",
  "type": "meccan",
  "verses": [
    {
      "id": 1,
      "text": "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
      "transliteration": "Bismillaahir Rahmaanir Raheem",
      "translation": "In the name of Allah, the Entirely Merciful, the Especially Merciful"
    }
  ]
}`}</code>
              </pre>
            </CardContent>
          </Card>

          <Card className="group transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle>Single Verse Response</CardTitle>
              <CardDescription>Structure of individual verse JSON response with all translations</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`{
  "id": 1,
  "chapter_id": 1,
  "verse_number": 1,
  "text": "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
  "transliteration": "Bismillaahir Rahmaanir Raheem",
  "translations": {
    "en": "In the name of Allah, the Entirely Merciful, the Especially Merciful",
    "id": "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang",
    // ... other translations
  }
}`}</code>
              </pre>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="languages">
          <Card>
            <CardHeader>
              <CardTitle>Available Languages</CardTitle>
              <CardDescription>Supported language codes and their translators</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Code</TableHead>
                    <TableHead>Language</TableHead>
                    <TableHead>Translator</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-mono">bn</TableCell>
                    <TableCell>Bengali</TableCell>
                    <TableCell>Muhiuddin Khan</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-mono">en</TableCell>
                    <TableCell>English</TableCell>
                    <TableCell>Saheeh International</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-mono">es</TableCell>
                    <TableCell>Spanish</TableCell>
                    <TableCell>Muhammad Isa García</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-mono">fr</TableCell>
                    <TableCell>French</TableCell>
                    <TableCell>Muhammad Hamidullah</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-mono">id</TableCell>
                    <TableCell>Indonesian</TableCell>
                    <TableCell>Ministry of Religious Affairs</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-mono">ru</TableCell>
                    <TableCell>Russian</TableCell>
                    <TableCell>Elmir Kuliev</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-mono">sv</TableCell>
                    <TableCell>Swedish</TableCell>
                    <TableCell>Knut Bernström</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-mono">tr</TableCell>
                    <TableCell>Turkish</TableCell>
                    <TableCell>Diyanet İşleri</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-mono">ur</TableCell>
                    <TableCell>Urdu</TableCell>
                    <TableCell>Abul A'la Maududi</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-mono">zh</TableCell>
                    <TableCell>Chinese</TableCell>
                    <TableCell>Muhammad Makin</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

