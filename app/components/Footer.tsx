import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-emerald-600 text-white py-8 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Quran App</h3>
            <p className="text-sm">Explore the Quran with translations, audio, and tafsir.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-emerald-200 transition-colors duration-200">Home</Link></li>
              <li><Link href="/bookmarks" className="hover:text-emerald-200 transition-colors duration-200">Bookmarks</Link></li>
              <li><Link href="/about" className="hover:text-emerald-200 transition-colors duration-200">About</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Contact</h4>
            <p className="text-sm">Email: info@quranapp.com</p>
            <p className="text-sm">Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Quran App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

