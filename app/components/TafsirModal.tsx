'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

interface TafsirModalProps {
  surahId: string
  ayahNumber: number
  onClose: () => void
}

export default function TafsirModal({ surahId, ayahNumber, onClose }: TafsirModalProps) {
  const [tafsir, setTafsir] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedTafsir, setSelectedTafsir] = useState<string | null>(null)
  const [tafsirOptions, setTafsirsOptions] = useState<{ id: string; name: string }[]>([])

  // Fetch all available tafsirs when component mounts
  useEffect(() => {
    const fetchTafsirs = async () => {
      try {
        const res = await fetch('https://api.quran.com/api/v4/tafsirs')
        const data = await res.json()
        setTafsirsOptions(data.data) // Assuming 'data' contains the list of tafsirs
        setSelectedTafsir(data.data[0]?.id || null) // Set the first tafsir as the default selection
      } catch (error) {
        console.error('Error fetching tafsirs:', error)
      }
    }

    fetchTafsirs()
  }, [])

  // Fetch the tafsir for the selected tafsir and ayah
  useEffect(() => {
    if (!selectedTafsir) return

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
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Tafsir - Surah {surahId}, Ayah {ayahNumber}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-4">
          <select
            value={selectedTafsir || ''}
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
            <div
              className="prose dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: tafsir || '' }}
            />
          )}
        </div>
      </div>
    </div>
  )
}
