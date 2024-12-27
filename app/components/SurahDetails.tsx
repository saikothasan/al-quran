'use client'

import { useState, useEffect } from 'react'
import { Loader2 } from 'lucide-react'
import AudioPlayer from './AudioPlayer'
import TranslationSelector from './TranslationSelector'
import TafsirModal from './TafsirModal'
import BookmarkButton from './BookmarkButton'

interface Ayah {
  number: number
  text: string
  translations: { [key: string]: string }
  audio: string
}

interface SurahInfo {
  name: string
  englishName: string
  englishNameTranslation: string
  numberOfAyahs: number
  revelationType: string
}

interface Translation {
  code: string
  name: string
}

export default function SurahDetails({ surahId }: { surahId: string }) {
  const [surahInfo, setSurahInfo] = useState<SurahInfo | null>(null)
  const [ayahs, setAyahs] = useState<Ayah[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedTranslation, setSelectedTranslation] = useState('en.asad')
  const [showTafsir, setShowTafsir] = useState(false)
  const [selectedAyah, setSelectedAyah] = useState<number | null>(null)
  const [translations, setTranslations] = useState<Translation[]>([])

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await fetch('http://api.alquran.cloud/v1/edition')
        const data = await response.json()
        if (data && data.data) {
          setTranslations(data.data.map((t: { id: string, name: string }) => ({
            code: t.id,
            name: t.name
          })))
        }
      } catch (error) {
        console.error('Error fetching translations:', error)
      }
    }

    fetchTranslations()
  }, [])

  useEffect(() => {
    const fetchSurahDetails = async () => {
      setLoading(true)
      try {
        // Construct dynamic translation query based on available translations
        const translationCodes = translations.map((t) => t.code).join(',')
        const [surahInfoRes, ayahsRes] = await Promise.all([
          fetch(`https://api.alquran.cloud/v1/surah/${surahId}`),
          fetch(`https://api.alquran.cloud/v1/surah/${surahId}/editions/quran-uthmani,${translationCodes}`)
        ])
        const surahInfoData = await surahInfoRes.json()
        const ayahsData = await ayahsRes.json()

        setSurahInfo(surahInfoData.data)
        setAyahs(ayahsData.data[0].ayahs.map((ayah: any, index: number) => ({
          number: ayah.numberInSurah,
          text: ayah.text,
          translations: translations.reduce((acc, t, i) => {
            acc[t.code] = ayahsData.data[i + 1].ayahs[index].text
            return acc
          }, {} as { [key: string]: string }),
          audio: `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${ayah.number}.mp3`
        })))
      } catch (error) {
        console.error('Error fetching surah details:', error)
      }
      setLoading(false)
    }

    if (translations.length > 0) {
      fetchSurahDetails()
    }
  }, [surahId, translations])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-emerald-600" />
      </div>
    )
  }

  if (!surahInfo) {
    return <div className="text-center text-red-600">Surah not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center text-emerald-800 dark:text-emerald-200">{surahInfo.name}</h1>
      <h2 className="text-2xl mb-4 text-center text-emerald-600 dark:text-emerald-300">{surahInfo.englishName} - {surahInfo.englishNameTranslation}</h2>
      <div className="mb-4 text-center text-gray-600 dark:text-gray-300">
        <span>{surahInfo.numberOfAyahs} Ayahs</span> | <span>{surahInfo.revelationType}</span>
      </div>
      <TranslationSelector
        value={selectedTranslation}
        onChange={setSelectedTranslation}
        translations={translations} // Pass available translations as props
      />
      <div className="space-y-8 mt-8">
        {ayahs.map((ayah) => (
          <div key={ayah.number} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-300">{ayah.number}</span>
              <AudioPlayer src={ayah.audio} />
            </div>
            <p className="text-2xl mb-4 font-arabic text-right" dir="rtl">{ayah.text}</p>
            <p className="text-gray-700 dark:text-gray-200">{ayah.translations[selectedTranslation]}</p>
            <div className="mt-4 flex justify-between items-center">
              <button
                onClick={() => {
                  setSelectedAyah(ayah.number)
                  setShowTafsir(true)
                }}
                className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors duration-300"
              >
                View Tafsir
              </button>
              <BookmarkButton surahId={surahId} ayahNumber={ayah.number} />
            </div>
          </div>
        ))}
      </div>
      {showTafsir && selectedAyah && (
        <TafsirModal
          surahId={surahId}
          ayahNumber={selectedAyah}
          onClose={() => setShowTafsir(false)}
        />
      )}
    </div>
  )
}
