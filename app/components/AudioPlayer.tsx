'use client'

import { useState, useRef } from 'react'
import { Play, Pause } from 'lucide-react'

interface AudioPlayerProps {
  src: string
}

export default function AudioPlayer({ src }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div>
      <button
        onClick={togglePlayPause}
        className="bg-emerald-500 text-white p-2 rounded-full hover:bg-emerald-600 transition-colors duration-300"
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
      <audio
        ref={audioRef}
        src={src}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  )
}

