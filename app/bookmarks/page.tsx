import BookmarksList from '../components/BookmarksList'

export default function BookmarksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-emerald-800 dark:text-emerald-200">
          Your Bookmarks
        </h1>
        <BookmarksList />
      </div>
    </div>
  )
}

