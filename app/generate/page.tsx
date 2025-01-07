import { CodeBlock } from "@/components/code-block"

export default function GeneratePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary">Generate JSON</h1>
        <p className="text-lg text-muted-foreground">
          Learn how to generate the JSON files yourself using the Quran Cloud project.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. Clone the Repository</h2>
        <CodeBlock
          title="Clone the Quran Cloud repository"
          code="git clone git@github.com:saikothasan/quran-cloud.git"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. Install Dependencies</h2>
        <CodeBlock
          title="Navigate to the project directory and install dependencies"
          code={`cd quran-cloud
npm install`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. Generate JSON Files</h2>
        <CodeBlock
          title="Run the build script to generate JSON files"
          code="npm run build"
        />
        <p className="text-muted-foreground">
          This will generate all the JSON files in the `dist` directory of the project.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Custom Usage</h2>
        <p className="text-muted-foreground">
          You can modify the source files or build scripts to customize the output according to your needs. 
          Refer to the project's README and source code for more details on the structure and build process.
        </p>
      </section>
    </div>
  )
}

