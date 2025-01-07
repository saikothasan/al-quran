import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const sources = [
  { name: "Quran Text", source: "The Noble Qur'an Encyclopedia", url: "https://quranenc.com/en/home" },
  { name: "English Transliteration", source: "tanzil.net", url: "https://tanzil.net/trans/en.transliteration" },
  { name: "Bengali Translation", translator: "Muhiuddin Khan", source: "tanzil.net", url: "https://tanzil.net/trans/bn.bengali" },
  { name: "English Translation", translator: "Saheeh International", source: "tanzil.net", url: "https://tanzil.net/trans/en.sahih" },
  { name: "Spanish Translation", translator: "Muhammad Isa García", source: "tanzil.net", url: "https://tanzil.net/trans/es.garcia" },
  { name: "French Translation", translator: "Muhammad Hamidullah", source: "tanzil.net", url: "https://tanzil.net/trans/fr.hamidullah" },
  { name: "Indonesian Translation", translator: "Indonesian Islamic Affairs Ministry", source: "The Noble Qur'an Encyclopedia", url: "https://quranenc.com/en/browse/indonesian_affairs" },
  { name: "Russian Translation", translator: "Elmir Kuliev", source: "tanzil.net", url: "https://tanzil.net/trans/ru.kuliev" },
  { name: "Swedish Translation", translator: "Knut Bernström", source: "tanzil.net", url: "https://tanzil.net/trans/sv.bernstrom" },
  { name: "Turkish Translation", translator: "Turkish Directorate of Religious Affairs", source: "tanzil.net", url: "https://tanzil.net/trans/tr.diyanet" },
  { name: "Urdu Translation", translator: "Abul A'la Maududi", source: "tanzil.net", url: "https://tanzil.net/trans/ur.maududi" },
  { name: "Chinese Translation", translator: "Muhammad Makin", source: "The Noble Qur'an Encyclopedia", url: "https://quranenc.com/en/browse/chinese_makin" }
]

export default function SourcesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary">Data Sources</h1>
        <p className="text-lg text-muted-foreground">
          Information about the sources of the Quran text, transliterations, and translations used in this project.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Sources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sources.map((source, index) => (
            <Card key={index} className="hover-lift transition-all duration-300">
              <CardHeader>
                <CardTitle>{source.name}</CardTitle>
                {source.translator && (
                  <CardDescription>Translator: {source.translator}</CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <p>Source: <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{source.source}</a></p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

