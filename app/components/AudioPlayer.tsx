'use client'

import { useEffect, useRef } from 'react'
import { Play, Pause } from 'lucide-react'

interface AudioPlayerProps {
  src: string
  isPlaying: boolean
  onComplete: () => void
}

export default function AudioPlayer({ src, isPlaying, onComplete }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }
  }, [isPlaying, src])

  return (
    <div>
      <button
        className="p-3 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-colors duration-300 shadow-lg"
        onClick={onComplete}
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>
      <audio
        ref={audioRef}
        src={src}
        onEnded={onComplete}
      />
    </div>
  )
}

