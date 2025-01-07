import { CodeBlock } from "@/components/code-block"

export default function InstallationPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary">Installation</h1>
        <p className="text-lg text-muted-foreground">
          Get started with Quran JSON by installing via npm or using the CDN.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">NPM Installation</h2>
        <CodeBlock
          code="npm install quran-cloud"
          description="Install using npm"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">CDN Usage</h2>
        <p className="text-muted-foreground">
          All JSON files are available through JSDELIVR CDN. You can access them directly using the following URL pattern:
        </p>
        <CodeBlock
          code="https://cdn.jsdelivr.net/npm/quran-cloud@1.0.0/dist/{file}"
          description="General CDN URL pattern"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Quick Example</h2>
        <CodeBlock
          code={`// Fetch complete Quran
fetch('https://cdn.jsdelivr.net/npm/quran-cloud@1.0.0/dist/quran.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });`}
          description="Simple example using fetch"
        />
      </section>
    </div>
  )
}

