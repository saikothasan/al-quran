'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

interface TafsirModalProps {
  surahId: string
  ayahNumber: number
  onClose: () => void
}

// Extended list of Tafsir options with more languages
const tafsirOptions = [
  { id: 'en-tafisr-ibn-kathir', name: 'Ibn Kathir (English)' },
  { id: 'ar-tafsir-al-jalalayn', name: 'Al-Jalalayn (Arabic)' },
  { id: 'ur-tafsir-bayan-ul-quran', name: 'Bayan-ul-Quran (Urdu)' },
  { id: 'en-tafsir-qurtubi', name: 'Al-Qurtubi (English)' },
  { id: 'ar-tafsir-al-tabari', name: 'Al-Tabari (Arabic)' },
  { id: 'en-tafsir-al-rafi', name: 'Al-Rafi (English)' },
  { id: 'en-tafsir-asbab', name: 'Asbab al-Nuzul (English)' },
  { id: 'fr-tafsir-al-wahidi', name: 'Al-Wahidi (French)' },
  { id: 'de-tafsir-al-rahman', name: 'Al-Rahman (German)' },
  { id: 'es-tafsir-al-jalalayn', name: 'Al-Jalalayn (Spanish)' },
  { id: 'id-tafsir-al-hamidi', name: 'Al-Hamidi (Indonesian)' },
  { id: 'it-tafsir-al-azhari', name: 'Al-Azhari (Italian)' },
  { id: 'pt-tafsir-al-nasafi', name: 'Al-Nasafi (Portuguese)' },
  { id: 'ru-tafsir-al-maturidi', name: 'Al-Maturidi (Russian)' },
  { id: 'zh-tafsir-al-maududi', name: 'Al-Maududi (Chinese)' },
  { id: 'tr-tafsir-al-durr-al-manthur', name: 'Al-Durr al-Manthur (Turkish)' },
  { id: 'ar-tafsir-al-qushayri', name: 'Al-Qushayri (Arabic)' },
  { id: 'en-tafsir-muhammad-ali', name: 'Muhammad Ali (English)' },
  { id: 'ur-tafsir-ma’ariful-quran', name: 'Ma’ariful Quran (Urdu)' },
  { id: 'bn-tafsir-tafsir-al-husayn', name: 'Tafsir al-Husayn (Bengali)' },
  { id: 'fr-tafsir-tafsir-abdel-malik', name: 'Tafsir Abdel Malik (French)' },
  { id: 'ms-tafsir-al-bidayah', name: 'Al-Bidayah (Malay)' },
  { id: 'pt-tafsir-tasfir-ibn-kathir', name: 'Ibn Kathir (Portuguese)' },
  { id: 'ar-tafsir-al-baydawi', name: 'Al-Baydawi (Arabic)' },
  { id: 'en-tafsir-al-quran', name: 'Al-Quran Tafsir (English)' },
  { id: 'fa-tafsir-tafsir-jawadi', name: 'Tafsir Jawadi (Persian)' },
  { id: 'tr-tafsir-al-fakhr', name: 'Al-Fakhr (Turkish)' },
  { id: 'en-tafsir-suyuti', name: 'Suyuti (English)' },
  { id: 'ar-tafsir-al-ghazali', name: 'Al-Ghazali (Arabic)' },
  { id: 'pt-tafsir-ma’ariful-quran', name: 'Ma’ariful Quran (Portuguese)' },
  { id: 'zh-tafsir-tafsir-wahid', name: 'Tafsir Wahid (Chinese)' },
  { id: 'ar-tafsir-ibn-ashur', name: 'Ibn Ashur (Arabic)' },
  { id: 'en-tafsir-al-samarqandi', name: 'Al-Samarqandi (English)' },
  { id: 'en-tafsir-ibn-azim', name: 'Ibn Azim (English)' },
  { id: 'fr-tafsir-al-suyuti', name: 'Al-Suyuti (French)' },
  { id: 'de-tafsir-al-nasafi', name: 'Al-Nasafi (German)' },
  { id: 'fa-tafsir-murtada', name: 'Murtada (Persian)' },
  { id: 'ru-tafsir-al-razzaq', name: 'Al-Razzaq (Russian)' },
  { id: 'id-tafsir-al-baydawi', name: 'Al-Baydawi (Indonesian)' },
  { id: 'es-tafsir-al-hamidi', name: 'Al-Hamidi (Spanish)' },
  { id: 'tr-tafsir-al-suyuti', name: 'Al-Suyuti (Turkish)' },
  { id: 'en-tafsir-al-baydawi', name: 'Al-Baydawi (English)' },
  { id: 'ar-tafsir-al-durr-al-manthur', name: 'Al-Durr al-Manthur (Arabic)' },
  // Add more options as needed
]

export default function TafsirModal({ surahId, ayahNumber, onClose }: TafsirModalProps) {
  const [tafsir, setTafsir] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedTafsir, setSelectedTafsir] = useState(tafsirOptions[0].id)

  useEffect(() => {
    const fetchTafsir = async () => {
      setLoading(true)
      try {
        const res = await fetch(`https://api.quran.com/api/v4/tafsirs/${selectedTafsir}/by_ayah/${surahId}:${ayahNumber}`)
        const data = await res.json()
        setTafsir(data.tafsir.text)
      } catch (error) {
        console.error('Error fetching tafsir:', error)
        setTafsir('Failed to load tafsir.')
      }
      setLoading(false)
    }

    fetchTafsir()
  }, [surahId, ayahNumber, selectedTafsir])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Tafsir - Surah {surahId}, Ayah {ayahNumber}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <X size={24} />
          </button>
        </div>
        <div className="p-4">
          <select
            value={selectedTafsir}
            onChange={(e) => setSelectedTafsir(e.target.value)}
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            {tafsirOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
          {loading ? (
            <div className="text-center text-gray-600 dark:text-gray-400">Loading tafsir...</div>
          ) : (
            <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: tafsir || '' }} />
          )}
        </div>
      </div>
    </div>
  )
}
