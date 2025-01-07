import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LicensePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary">License</h1>
        <p className="text-lg text-muted-foreground">
          Information about the license under which the Quran JSON project is distributed.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>CC-BY-SA 4.0</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This project is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License.</p>
          <p className="mt-4">You are free to:</p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Share — copy and redistribute the material in any medium or format</li>
            <li>Adapt — remix, transform, and build upon the material for any purpose, even commercially</li>
          </ul>
          <p className="mt-4">Under the following terms:</p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made</li>
            <li>ShareAlike — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original</li>
          </ul>
          <p className="mt-4">
            For more details, please visit the <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Creative Commons CC-BY-SA 4.0 License</a> page.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

