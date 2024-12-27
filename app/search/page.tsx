import SearchResults from '../components/SearchResults'

export default function SearchPage({ searchParams }: { searchParams: { q: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-emerald-50 to-teal-50">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-emerald-800">Search Results</h1>
        <SearchResults query={searchParams.q} />
      </main>
    </div>
  )
}

