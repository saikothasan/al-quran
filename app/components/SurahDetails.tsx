'use client'

import { useState, useEffect } from 'react'
import { Loader2, Volume2, Share2, Download } from 'lucide-react'
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

const availableTranslations = [
  { code: 'en.asad', name: 'Muhammad Asad (English)' },
  { code: 'en.pickthall', name: 'Pickthall (English)' },
  { code: 'en.yusufali', name: 'Yusuf Ali (English)' },
  { code: 'fr.hamidullah', name: 'Hamidullah (French)' },
  { code: 'de.aburida', name: 'Abu Rida (German)' },
  { code: 'es.bornez', name: 'Bornez (Spanish)' },
  { code: 'ru.kuliev', name: 'Kuliev (Russian)' },
  { code: 'tr.diyanet', name: 'Diyanet İşleri (Turkish)' },
  { code: 'id.indonesian', name: 'Indonesian Ministry of Religious Affairs (Indonesian)' },
  { code: 'ur.jalandhry', name: 'Jalandhry (Urdu)' },
  { code: 'hi.hindi', name: 'Suhel Farooq Khan and Saifur Rahman Nadwi (Hindi)' },
  { code: 'bn.bengali', name: 'Muhiuddin Khan (Bengali)' },
  { code: 'pt.portuguese', name: 'Samir El-Hayek (Portuguese)' },
  { code: 'fa.makarem', name: 'Makarem Shirazi (Persian)' },
  { code: 'it.piccardo', name: 'Hamza Roberto Piccardo (Italian)' },
]

export default function SurahDetails({ surahId }: { surahId: string }) {
  const [surahInfo, setSurahInfo] = useState<SurahInfo | null>(null)
  const [ayahs, setAyahs] = useState<Ayah[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedTranslations, setSelectedTranslations] = useState(['en.asad'])
  const [showTafsir, setShowTafsir] = useState(false)
  const [selectedAyah, setSelectedAyah] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentAyah, setCurrentAyah] = useState(0)

  useEffect(() => {
    const fetchSurahDetails = async () => {
      setLoading(true)
      try {
        const [surahInfoRes, ayahsRes] = await Promise.all([
          fetch(`https://api.alquran.cloud/v1/surah/${surahId}`),
          fetch(`https://api.alquran.cloud/v1/surah/${surahId}/editions/quran-uthmani,${availableTranslations.map(t => t.code).join(',')}`)
        ])
        const surahInfoData = await surahInfoRes.json()
        const ayahsData = await ayahsRes.json()

        setSurahInfo(surahInfoData.data)
        setAyahs(ayahsData.data[0].ayahs.map((ayah: any, index: number) => ({
          number: ayah.numberInSurah,
          text: ayah.text,
          translations: Object.fromEntries(
            availableTranslations.map((t, i) => [t.code, ayahsData.data[i + 1].ayahs[index].text])
          ),
          audio: `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${ayah.number}.mp3`
        })))
      } catch (error) {
        console.error('Error fetching surah details:', error)
      }
      setLoading(false)
    }

    fetchSurahDetails()
  }, [surahId])

  const playAllAudio = () => {
    setIsPlaying(true)
    setCurrentAyah(0)
  }

  const stopAudio = () => {
    setIsPlaying(false)
    setCurrentAyah(0)
  }

  const onAyahPlayComplete = () => {
    if (currentAyah < ayahs.length - 1) {
      setCurrentAyah(currentAyah + 1)
    } else {
      stopAudio()
    }
  }

  const shareAyah = async (ayahNumber: number) => {
    const ayah = ayahs.find(a => a.number === ayahNumber);
    if (ayah) {
      const text = `${ayah.text}\n\n${ayah.translations[selectedTranslations[0]]}\n\nSurah ${surahId}, Ayah ${ayahNumber}`;
      const url = `${window.location.origin}/surah/${surahId}#${ayahNumber}`;

      if (navigator.share) {
        try {
          await navigator.share({
            title: `Quran - Surah ${surahId}, Ayah ${ayahNumber}`,
            text: text,
            url: url
          });
        } catch (error) {
          console.error('Error sharing:', error);
          await fallbackCopyToClipboard(text, url);
        }
      } else {
        await fallbackCopyToClipboard(text, url);
      }
    }
  };

  const fallbackCopyToClipboard = async (text: string, url: string) => {
    try {
      await navigator.clipboard.writeText(`${text}\n\n${url}`);
      alert('Ayah copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
      alert('Failed to copy ayah. Please try again.');
    }
  };

  const downloadSurah = () => {
    const content = ayahs.map(ayah => 
      `Ayah ${ayah.number}:
${ayah.text}

${selectedTranslations.map(t => `${availableTranslations.find(tr => tr.code === t)?.name}: ${ayah.translations[t]}`).join('\n\n')}

`
    ).join('---\n\n')

    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `surah_${surahId}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-12 h-12 animate-spin text-emerald-600" />
      </div>
    )
  }

  if (!surahInfo) {
    return <div className="text-center text-red-600 text-xl">Surah not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-gray-900 dark:to-emerald-900 min-h-screen">
      <h1 className="text-5xl font-bold mb-4 text-center text-emerald-800 dark:text-emerald-200 font-amiri">{surahInfo.name}</h1>
      <h2 className="text-3xl mb-4 text-center text-emerald-600 dark:text-emerald-300">{surahInfo.englishName} - {surahInfo.englishNameTranslation}</h2>
      <div className="mb-6 text-center text-gray-600 dark:text-gray-300 text-lg">
        <span className="mr-4">{surahInfo.numberOfAyahs} Ayahs</span>
        <span>{surahInfo.revelationType}</span>
      </div>
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={isPlaying ? stopAudio : playAllAudio}
          className="bg-emerald-500 text-white px-6 py-3 rounded-full hover:bg-emerald-600 transition-colors duration-300 flex items-center shadow-lg"
        >
          <Volume2 className="mr-2" size={24} />
          {isPlaying ? 'Stop Audio' : 'Play All'}
        </button>
        <button
          onClick={downloadSurah}
          className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300 flex items-center shadow-lg"
        >
          <Download className="mr-2" size={24} />
          Download Surah
        </button>
      </div>
      <TranslationSelector
        value={selectedTranslations}
        onChange={setSelectedTranslations}
        options={availableTranslations}
      />
      <div className="space-y-8 mt-8">
        {ayahs.map((ayah) => (
          <div key={ayah.number} className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 transition-all duration-300 hover:shadow-2xl" id={`${ayah.number}`}>
            <div className="flex justify-between items-center mb-4">
              <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-300">{ayah.number}</span>
              <div className="flex space-x-3">
                <AudioPlayer
                  src={ayah.audio}
                  isPlaying={isPlaying && currentAyah === ayah.number - 1}
                  onComplete={onAyahPlayComplete}
                />
                <button
                  onClick={() => shareAyah(ayah.number)}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                  <Share2 size={20} />
                </button>
                <BookmarkButton surahId={surahId} ayahNumber={ayah.number} />
              </div>
            </div>
            <p className="text-3xl mb-6 font-amiri text-right leading-relaxed" dir="rtl">{ayah.text}</p>
            {selectedTranslations.map((code) => (
              <p key={code} className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">{availableTranslations.find(t => t.code === code)?.name}: </span>
                {ayah.translations[code]}
              </p>
            ))}
            <button
              onClick={() => {
                setSelectedAyah(ayah.number)
                setShowTafsir(true)
              }}
              className="mt-4 text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors duration-300 font-semibold"
            >
              View Tafsir
            </button>
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

