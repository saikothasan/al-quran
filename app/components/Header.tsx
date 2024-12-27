import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true'
    setIsDarkMode(isDark)
    if (isDark) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="bg-emerald-600 text-white shadow-md dark:bg-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Quran App
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-emerald-200 transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/bookmarks" className="hover:text-emerald-200 transition-colors duration-200">
                Bookmarks
              </Link>
            </li>
            <li>
              <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-emerald-700 dark:hover:bg-gray-700 transition-colors duration-200">
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

