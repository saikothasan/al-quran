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
    setIsBookmarked(bookmarks.some((b: any) => b.surahId === surahId && b.ayahNumber === ayahNumber))
  }, [surahId, ayahNumber])

  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    const bookmarkIndex = bookmarks.findIndex((b: any) => b.surahId === surahId && b.ayahNumber === ayahNumber)

    if (bookmarkIndex === -1) {
      bookmarks.push({ surahId, ayahNumber })
    } else {
      bookmarks.splice(bookmarkIndex, 1)
    }

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    setIsBookmarked(!isBookmarked)
  }

  return (
    <button
      onClick={toggleBookmark}
      className={`p-2 rounded-full transition-colors duration-300 ${
        isBookmarked
          ? 'text-yellow-500 hover:text-yellow-600'
          : 'text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300'
      }`}
    >
      <Bookmark size={20} fill={isBookmarked ? 'currentColor' : 'none'} />
    </button>
  )
}

