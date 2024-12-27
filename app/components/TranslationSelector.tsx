'use client'

interface TranslationOption {
  code: string
  name: string
}

interface TranslationSelectorProps {
  value: string[]
  onChange: (value: string[]) => void
  options: TranslationOption[]
}

export default function TranslationSelector({ value, onChange, options }: TranslationSelectorProps) {
  const handleChange = (code: string) => {
    const newValue = value.includes(code)
      ? value.filter(v => v !== code)
      : [...value, code]
    onChange(newValue)
  }

  return (
    <div className="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-semibold mb-4 text-emerald-700 dark:text-emerald-300">
        Select Translations
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {options.map((option) => (
          <label
            key={option.code}
            className="inline-flex items-center bg-emerald-50 dark:bg-gray-700 rounded-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-gray-600 cursor-pointer transition-colors duration-200"
          >
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-emerald-600 transition duration-150 ease-in-out mr-2"
              checked={value.includes(option.code)}
              onChange={() => handleChange(option.code)}
            />
            {option.name}
          </label>
        ))}
      </div>
    </div>
  )
}

