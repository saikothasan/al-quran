interface TranslationSelectorProps {
  value: string
  onChange: (value: string) => void
}

const translations = [
  { code: 'en.asad', name: 'Muhammad Asad (English)' },
  { code: 'en.pickthall', name: 'Pickthall (English)' },
  { code: 'fr.hamidullah', name: 'Hamidullah (French)' },
  { code: 'de.aburida', name: 'Abu Rida (German)' },
]

export default function TranslationSelector({ value, onChange }: TranslationSelectorProps) {
  return (
    <div className="mb-4">
      <label htmlFor="translation" className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
        Select Translation:
      </label>
      <select
        id="translation"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        {translations.map((t) => (
          <option key={t.code} value={t.code}>
            {t.name}
          </option>
        ))}
      </select>
    </div>
  )
}

