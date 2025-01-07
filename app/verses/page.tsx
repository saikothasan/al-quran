import { CodeBlock } from "@/components/code-block"

export default function VersesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary">Verses</h1>
        <p className="text-lg text-muted-foreground">
          Access individual verses (ayahs) of the Quran with all available translations.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Single Verse</h2>
        <CodeBlock
          title="Get a Single Verse"
          description="Access a single verse by its number (1-6236)"
          code="https://cdn.jsdelivr.net/npm/quran-cloud@1.0.0/dist/verses/{verseNumber}.json"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Example Usage</h2>
        <CodeBlock
          title="Fetch the first verse of Al-Fatihah"
          code={`fetch('https://cdn.jsdelivr.net/npm/quran-cloud@1.0.0/dist/verses/1.json')
  .then(response => response.json())
  .then(verse => {
    console.log(verse.text); // Arabic text
    console.log(verse.transliteration); // English transliteration
    console.log(verse.translations.en); // English translation
    console.log(verse.translations.ar); // Arabic translation
  });`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Response Format</h2>
        <CodeBlock
          title="Single Verse Response"
          description="Structure of a single verse JSON response"
          code={`{
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
}`}
        />
      </section>
    </div>
  )
}

