import { CodeBlock } from "@/components/code-block"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const languages = [
  { code: 'bn', name: 'Bengali' },
  { code: 'zh', name: 'Chinese' },
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'id', name: 'Indonesian' },
  { code: 'ru', name: 'Russian' },
  { code: 'sv', name: 'Swedish' },
  { code: 'tr', name: 'Turkish' },
  { code: 'ur', name: 'Urdu' }
]

export default function ChaptersPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary">Chapters</h1>
        <p className="text-lg text-muted-foreground">
          Access individual chapters (surahs) of the Quran in various languages.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">List of Chapters</h2>
        <CodeBlock
          title="Arabic Only"
          description="Get the list of chapters in Arabic"
          code="https://cdn.jsdelivr.net/npm/quran-cloud@1.0.0/dist/chapters/index.json"
        />
        <Card>
          <CardHeader>
            <CardTitle>Chapters with Translations</CardTitle>
            <CardDescription>Get the list of chapters with translations in various languages</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {languages.map(({ code, name }) => (
                <CodeBlock
                  key={code}
                  title={name}
                  code={`https://cdn.jsdelivr.net/npm/quran-cloud@1.0.0/dist/chapters/${code}/index.json`}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Single Chapter</h2>
        <CodeBlock
          title="Arabic Text & Transliteration"
          description="Get a single chapter with Arabic text and transliteration"
          code="https://cdn.jsdelivr.net/npm/quran-cloud@1.0.0/dist/chapters/{chapterNumber}.json"
        />
        <CodeBlock
          title="With Translation"
          description="Get a single chapter with translation"
          code="https://cdn.jsdelivr.net/npm/quran-cloud@1.0.0/dist/chapters/{langCode}/{chapterNumber}.json"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Example Usage</h2>
        <CodeBlock
          title="Fetch Al-Fatihah with English translation"
          code={`fetch('https://cdn.jsdelivr.net/npm/quran-cloud@1.0.0/dist/chapters/en/1.json')
  .then(response => response.json())
  .then(chapter => {
    console.log(chapter.name); // "الفاتحة"
    console.log(chapter.translation); // "The Opening"
    chapter.verses.forEach(verse => {
      console.log(verse.text); // Arabic text
      console.log(verse.translation); // English translation
    });
  });`}
        />
      </section>
    </div>
  )
}

