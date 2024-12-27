import SurahDetails from '../../components/SurahDetails'

export default function SurahPage({ params }: { params: { id: string } }) {
  return <SurahDetails surahId={params.id} />
}

