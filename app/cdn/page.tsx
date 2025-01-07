import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const languages = [
  { code: 'bn', name: 'Bengali', url: 'quran_bn.json' },
  { code: 'zh', name: 'Chinese', url: 'quran_zh.json' },
  { code: 'en', name: 'English', url: 'quran_en.json' },
  { code: 'es', name: 'Spanish', url: 'quran_es.json' },
  { code: 'fr', name: 'French', url: 'quran_fr.json' },
  { code: 'id', name: 'Indonesian', url: 'quran_id.json' },
  { code: 'ru', name: 'Russian', url: 'quran_ru.json' },
  { code: 'sv', name: 'Swedish', url: 'quran_sv.json' },
  { code: 'tr', name: 'Turkish', url: 'quran_tr.json' },
  { code: 'ur', name: 'Urdu', url: 'quran_ur.json' }
]

export default function CDNPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">
        CDN Usage
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8">
        All JSON files are available through JSDELIVR CDN. Check out the examples below to get started.
      </p>
      
      <Tabs defaultValue="complete" className="space-y-8">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
          <TabsTrigger value="complete">Complete Quran</TabsTrigger>
          <TabsTrigger value="transliteration">Transliteration</TabsTrigger>
          <TabsTrigger value="translations">Translations</TabsTrigger>
        </TabsList>

        <TabsContent value="complete">
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle>Complete Quran Text</CardTitle>
              <CardDescription>Access the entire Quran text in Uthmani script</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                <code>https://cdn.jsdelivr.net/npm/quran-cloud@1.0.0/dist/quran.json</code>
              </pre>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transliteration">
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle>English Transliteration</CardTitle>
              <CardDescription>Access the English transliteration from Tanzil.net</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                <code>https://cdn.jsdelivr.net/npm/quran-cloud@1.0.0/dist/quran_transliteration.json</code>
              </pre>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="translations">
          <div className="space-y-6">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Available Translations</CardTitle>
                <CardDescription>Access translations in various languages</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {languages.map(({ code, name, url }) => (
                  <div key={code}>
                    <h3 className="text-sm font-medium mb-2">{name} ({code})</h3>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`https://cdn.jsdelivr.net/npm/quran-cloud@1.0.0/dist/${url}`}</code>
                    </pre>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

