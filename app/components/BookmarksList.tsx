'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Loader2, Trash2 } from 'lucide-react'

interface Bookmark {
  surahId: string
  ayahNumber: number
  text?: string
}

export default function BookmarksList() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    setBookmarks(storedBookmarks)
    setLoading(false)
  }, [])

  const removeBookmark = (surahId: string, ayahNumber: number) => {
    const updatedBookmarks = bookmarks.filter(
      (b) => !(b.surahId === surahId && b.ayahNumber === ayahNumber)
    )
    setBookmarks(updatedBookmarks)
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks))
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-emerald-600" />
      </div>
    )
  }

  if (bookmarks.length === 0) {
    return (
      <div className="text-center text-gray-600 dark:text-gray-400">
        You haven't bookmarked any ayahs yet.
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {bookmarks.map((bookmark, index) => (
        <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 flex justify-between items-center">
          <Link href={`/surah/${bookmark.surahId}#${bookmark.ayahNumber}`} className="flex-grow">
            <div className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
              Surah {bookmark.surahId}, Ayah {bookmark.ayahNumber}
            </div>
            {bookmark.text && (
              <div className="text-gray-600 dark:text-gray-300 mt-2">{bookmark.text}</div>
            )}
          </Link>
          <button
            onClick={() => removeBookmark(bookmark.surahId, bookmark.ayahNumber)}
            className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 ml-4"
          >
            <Trash2 size={20} />
          </button>
        </div>
      ))}
    </div>
  )
}

