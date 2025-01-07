import { CodeBlock } from "@/components/code-block"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const languages = [
  { code: 'bn', name: 'Bengali', translator: 'Muhiuddin Khan' },
  { code: 'zh', name: 'Chinese', translator: 'Muhammad Makin' },
  { code: 'en', name: 'English', translator: 'Saheeh International' },
  { code: 'es', name: 'Spanish', translator: 'Muhammad Isa García' },
  { code: 'fr', name: 'French', translator: 'Muhammad Hamidullah' },
  { code: 'id', name: 'Indonesian', translator: 'Ministry of Religious Affairs' },
  { code: 'ru', name: 'Russian', translator: 'Elmir Kuliev' },
  { code: 'sv', name: 'Swedish', translator: 'Knut Bernström' },
  { code: 'tr', name: 'Turkish', translator: 'Diyanet İşleri' },
  { code: 'ur', name: 'Urdu', translator: 'Abul A\'la Maududi' }
]

export default function TranslationsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary">Translations</h1>
        <p className="text-lg text-muted-foreground">
          Access Quran translations in various languages.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Available Translations</h2>
        <Card>
          <CardHeader>
            <CardTitle>Language Codes and Translators</CardTitle>
            <CardDescription>List of available translations and their respective translators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {languages.map(({ code, name, translator }) => (
                <CodeBlock
                  key={code}
                  title={`${name} (${code})`}
                  description={`Translator: ${translator}`}
                  code={`https://cdn.jsdelivr.net/npm/quran-cloud@1.0.0/dist/quran_${code}.json`}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Example Usage</h2>
        <CodeBlock
          title="Fetch English Translation"
          code={`fetch('https://cdn.jsdelivr.net/npm/quran-cloud@1.0.0/dist/quran_en.json')
  .then(response => response.json())
  .then(data => {
    console.log(data.chapters[0].name); // "الفاتحة"
    console.log(data.chapters[0].translation); // "The Opening"
    console.log(data.chapters[0].verses[0].translation); // "In the name of Allah, the Entirely Merciful, the Especially Merciful"
  });`}
        />
      </section>
    </div>
  )
}

