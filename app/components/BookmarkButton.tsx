'use client'

import { useState, useEffect } from 'react'
import { Bookmark } from 'lucide-react'

interface BookmarkButtonProps {
  surahId: string
  ayahNumber: number
}

export default function BookmarkButton({ surahId, ayahNumber }: BookmarkButtonProps) {
  const [isBookmarked, setIsBookmarked] = useState(false)

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    setIsBookmarked(bookmarks.some((b: string) => b === `${surahId}:${ayahNumber}`))
  }, [surahId, ayahNumber])

  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    const bookmarkKey = `${surahId}:${ayahNumber}`
    
    if (isBookmarked) {
      const updatedBookmarks = bookmarks.filter((b: string) => b !== bookmarkKey)
      localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks))
    } else {
      bookmarks.push(bookmarkKey)
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    }
    
    setIsBookmarked(!isBookmarked)
  }

  return (
    <button
      onClick={toggleBookmark}
      className={`p-3 rounded-full transition-colors duration-300 ${
        isBookmarked
          ? 'bg-yellow-500 text-white hover:bg-yellow-600'
          : 'bg-gray-200 text-gray-600 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
      }`}
    >
      <Bookmark size={24} fill={isBookmarked ? 'currentColor' : 'none'} />
    </button>
  )
}

