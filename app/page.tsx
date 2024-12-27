import SurahList from './components/SurahList'
import SearchBar from './components/SearchBar'
import QuickAccess from './components/QuickAccess'
import DailyVerse from './components/DailyVerse'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold mb-8 text-center text-emerald-800 dark:text-emerald-200 font-amiri">
        بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
      </h1>
      <h2 className="text-3xl font-semibold mb-8 text-center text-emerald-700 dark:text-emerald-300">
        Explore the Holy Quran
      </h2>
      <SearchBar />
      <DailyVerse />
      <QuickAccess />
      <SurahList />
    </div>
  )
}

