import Link from 'next/link'

const quickAccessSurahs = [
  { number: 1, name: 'Al-Fatihah' },
  { number: 36, name: 'Ya-Sin' },
  { number: 55, name: 'Ar-Rahman' },
  { number: 67, name: 'Al-Mulk' },
  { number: 112, name: 'Al-Ikhlas' },
]

export default function QuickAccess() {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-4 text-emerald-700 dark:text-emerald-300">Quick Access</h3>
      <div className="flex flex-wrap gap-4">
        {quickAccessSurahs.map((surah) => (
          <Link
            key={surah.number}
            href={`/surah/${surah.number}`}
            className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-200 rounded-full hover:bg-emerald-200 dark:hover:bg-emerald-800 transition-colors duration-300"
          >
            {surah.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

