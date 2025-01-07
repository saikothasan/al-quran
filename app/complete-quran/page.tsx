import { CodeBlock } from "@/components/code-block"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const languages = [
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
  { code: 'zh', name: 'Chinese', native: '中文' },
  { code: 'en', name: 'English', native: 'English' },
  { code: 'es', name: 'Spanish', native: 'Español' },
  { code: 'fr', name: 'French', native: 'Français' },
  { code: 'id', name: 'Indonesian', native: 'Indonesia' },
  { code: 'ru', name: 'Russian', native: 'Русский' },
  { code: 'sv', name: 'Swedish', native: 'Svenska' },
  { code: 'tr', name: 'Turkish', native: 'Türkçe' },
  { code: 'ur', name: 'Urdu', native: 'اردو' }
]

export default function CompleteQuranPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary">Complete Quran</h1>
        <p className="text-lg text-muted-foreground">
          Access the complete Quran text, transliteration, and translations in JSON format.
        </p>
      </div>

      <Tabs defaultValue="text" className="space-y-8">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
          <TabsTrigger value="text">Arabic Text</TabsTrigger>
          <TabsTrigger value="transliteration">Transliteration</TabsTrigger>
          <TabsTrigger value="translations">Translations</TabsTrigger>
        </TabsList>

        <TabsContent value="text">
          <CodeBlock
            title="Complete Quran Text"
            description="Access the entire Quran text in Uthmani script"
            code="https://cdn.jsdelivr.net/npm/quran-cloud@1.0.0/dist/quran.json"
          />
        </TabsContent>

        <TabsContent value="transliteration">
          <CodeBlock
            title="English Transliteration"
            description="Access the English transliteration from Tanzil.net"
            code="https://cdn.jsdelivr.net/npm/quran-cloud@1.0.0/dist/quran_transliteration.json"
          />
        </TabsContent>

        <TabsContent value="translations">
          <Card>
            <CardHeader>
              <CardTitle>Available Translations</CardTitle>
              <CardDescription>Access translations in various languages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {languages.map(({ code, name, native }) => (
                  <CodeBlock
                    key={code}
                    title={`${name} (${code})`}
                    description={native}
                    code={`https://cdn.jsdelivr.net/npm/quran-cloud@1.0.0/dist/quran_${code}.json`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Response Format</h2>
        <CodeBlock
          title="Example Response"
          description="Structure of the complete Quran JSON response"
          code={`{
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
}`}
        />
      </section>
    </div>
  )
}

