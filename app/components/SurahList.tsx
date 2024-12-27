'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Loader2 } from 'lucide-react'

interface Surah {
  number: number
  name: string
  englishName: string
  englishNameTranslation: string
  numberOfAyahs: number
  revelationType: string
}

export default function SurahList() {
  const [surahs, setSurahs] = useState<Surah[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const response = await fetch('https://api.alquran.cloud/v1/surah')
        const data = await response.json()
        setSurahs(data.data)
      } catch (error) {
        console.error('Error fetching surahs:', error)
      }
      setLoading(false)
    }

    fetchSurahs()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-emerald-600" />
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {surahs.map((surah) => (
        <Link href={`/surah/${surah.number}`} key={surah.number}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{surah.number}</span>
              <span className="text-lg font-semibold text-gray-600 dark:text-gray-300">{surah.englishName}</span>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-right font-amiri">{surah.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{surah.englishNameTranslation}</p>
            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>{surah.numberOfAyahs} Ayahs</span>
              <span>{surah.revelationType}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

