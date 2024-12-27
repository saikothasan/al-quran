'use client'

import { useState, useEffect } from 'react'
import { X, Loader2, AlertTriangle } from 'lucide-react'

interface TafsirModalProps {
  surahId: string
  ayahNumber: number
  onClose: () => void
}

const tafsirOptions = [
  { id: 'en-tafisr-ibn-kathir', name: 'Ibn Kathir (English)' },
  { id: 'ar-tafsir-al-jalalayn', name: 'Al-Jalalayn (Arabic)' },
  { id: 'ur-tafsir-bayan-ul-quran', name: 'Bayan-ul-Quran (Urdu)' },
  { id: 'fr-tafsir-al-quran', name: 'Tafsir Al-Quran (French)' },
  { id: 'de-tafsir-al-quran', name: 'Tafsir Al-Quran (German)' },
  { id: 'es-tafsir-quran', name: 'Tafsir del Corán (Spanish)' },
  { id: 'ru-tafsir-quran', name: 'Тафсир Корана (Russian)' },
  { id: 'tr-tafsir-quran', name: 'Kuran Tefsiri (Turkish)' },
  { id: 'id-tafsir-jalalayn', name: 'Tafsir Jalalayn (Indonesian)' },
  { id: 'bn-tafsir-ahsanul-bayan', name: 'তাফসীর আহসানুল বায়ান (Bengali)' },
]

export default function TafsirModal({ surahId, ayahNumber, onClose }: TafsirModalProps) {
  const [tafsir, setTafsir] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedTafsir, setSelectedTafsir] = useState(tafsirOptions[0].id)

  useEffect(() => {
    const fetchTafsir = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`https://api.quran.com/api/v4/tafsirs/${selectedTafsir}/by_ayah/${surahId}:${ayahNumber}`)
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        const data = await res.json()
        if (data.tafsir && data.tafsir.text) {
          setTafsir(data.tafsir.text)
        } else {
          throw new Error('Tafsir text not found in the response')
        }
      } catch (error) {
        console.error('Error fetching tafsir:', error)
        setError('Failed to load tafsir. Please try again later.')
        setTafsir(null)
      } finally {
        setLoading(false)
      }
    }

    fetchTafsir()
  }, [surahId, ayahNumber, selectedTafsir])

  const handleRetry = () => {
    setLoading(true)
    setError(null)
    // This will trigger the useEffect to run again
    setSelectedTafsir(selectedTafsir)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b dark:border-gray-700">
          <h3 className="text-2xl font-semibold text-emerald-800 dark:text-emerald-200">Tafsir - Surah {surahId}, Ayah {ayahNumber}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200">
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <select
            value={selectedTafsir}
            onChange={(e) => setSelectedTafsir(e.target.value)}
            className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            {tafsirOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="w-12 h-12 animate-spin text-emerald-600" />
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center h-64 text-red-500">
              <AlertTriangle size={48} className="mb-4" />
              <p className="text-center mb-4">{error}</p>
              <button
                onClick={handleRetry}
                className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors duration-200"
              >
                Retry
              </button>
            </div>
          ) : (
            <div className="prose dark:prose-invert max-w-none overflow-y-auto max-h-[60vh]" dangerouslySetInnerHTML={{ __html: tafsir || '' }} />
          )}
        </div>
      </div>
    </div>
  )
}

