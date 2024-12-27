'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Loader2 } from 'lucide-react'

interface Verse {
  text: string
  translation: string
  surah: number
  ayah: number
}

export default function DailyVerse() {
  const [verse, setVerse] = useState<Verse | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDailyVerse = async () => {
      try {
        const res = await fetch('https://api.alquran.cloud/v1/ayah/random/editions/quran-uthmani,en.asad')
        const data = await res.json()
        setVerse({
          text: data.data[0].text,
          translation: data.data[1].text,
          surah: data.data[0].surah.number,
          ayah: data.data[0].numberInSurah,
        })
      } catch (error) {
        console.error('Error fetching daily verse:', error)
      }
      setLoading(false)
    }

    fetchDailyVerse()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <Loader2 className="w-8 h-8 animate-spin text-emerald-600" />
      </div>
    )
  }

  if (!verse) {
    return null
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
      <h3 className="text-2xl font-semibold mb-4 text-emerald-700 dark:text-emerald-300">Verse of the Day</h3>
      <p className="text-2xl mb-4 font-amiri text-right" dir="rtl">{verse.text}</p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{verse.translation}</p>
      <Link
        href={`/surah/${verse.surah}#${verse.ayah}`}
        className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors duration-300"
      >
        Read more (Surah {verse.surah}, Ayah {verse.ayah})
      </Link>
    </div>
  )
}

