import Link from 'next/link'

const quickAccessSurahs = [
  { number: 1, name: 'Al-Fatihah' },
  { number: 36, name: 'Ya-Sin' },
  { number: 55, name: 'Ar-Rahman' },
  { number: 67, name: 'Al-Mulk' },
]

export default function QuickAccess() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-emerald-800 dark:text-emerald-200">Quick Access</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickAccessSurahs.map((surah) => (
          <Link
            key={surah.number}
            href={`/surah/${surah.number}`}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">{surah.name}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Surah {surah.number}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

