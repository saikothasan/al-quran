import SurahDetails from '../../components/SurahDetails'

export default function SurahPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-emerald-50 to-teal-50">
      <main className="container mx-auto px-4 py-8">
        <SurahDetails surahId={params.id} />
      </main>
    </div>
  )
}

