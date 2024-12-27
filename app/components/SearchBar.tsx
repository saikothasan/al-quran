'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="mb-8">
      <div className="flex">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search the Quran..."
          className="flex-grow px-4 py-2 rounded-l-lg border-2 border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-300"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-emerald-500 text-white rounded-r-lg hover:bg-emerald-600 transition-colors duration-300"
        >
          Search
        </button>
      </div>
    </form>
  )
}

