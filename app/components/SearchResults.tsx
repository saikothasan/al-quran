'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface SearchResult {
  surah: number
  ayah: number
  text: string
  translation: string
}

export default function SearchResults({ query }: { query: string }) {
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true)
      try {
        const res = await fetch(`https://api.quran.com/api/v4/search?q=${encodeURIComponent(query)}&size=20&language=en`)
        const data = await res.json()
        setResults(data.search.results.map((result: any) => ({
          surah: result.verse_key.split(':')[0],
          ayah: result.verse_key.split(':')[1],
          text: result.text,
          translation: result.translations[0].text
        })))
      } catch (error) {
        console.error('Error fetching search results:', error)
      }
      setLoading(false)
    }

    fetchSearchResults()
  }, [query])

  if (loading) {
    return <div className="text-center">Loading...</div>
  }

  if (results.length === 0) {
    return <div className="text-center">No results found for "{query}"</div>
  }

  return (
    <div className="space-y-6">
      {results.map((result, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <Link href={`/surah/${result.surah}#${result.ayah}`} className="block hover:underline">
            <h2 className="text-xl font-semibold mb-2">
              Surah {result.surah}, Ayah {result.ayah}
            </h2>
          </Link>
          <p className="text-lg mb-2 font-arabic text-right" dir="rtl">{result.text}</p>
          <p className="text-gray-700">{result.translation}</p>
        </div>
      ))}
    </div>
  )
}

