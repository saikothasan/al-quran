import { useEffect, useState } from 'react';

interface TranslationSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

interface Translation {
  code: string;
  name: string;
}

export default function TranslationSelector({ value, onChange }: TranslationSelectorProps) {
  const [translations, setTranslations] = useState<Translation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch translations from the "edition" endpoint
  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await fetch('https://api.alquran.cloud/v1/edition');
        const data = await response.json();

        if (data.code === 200 && data.data) {
          // Map the edition data into the desired format
          const formattedTranslations = data.data.map((edition: { language: string, name: string }) => ({
            code: edition.language,  // the code corresponds to the language
            name: edition.name,      // the name of the translation
          }));
          setTranslations(formattedTranslations);
        } else {
          setError('Failed to load translations');
        }
      } catch (err) {
        setError('Error fetching translations');
      } finally {
        setLoading(false);
      }
    };

    fetchTranslations();
  }, []);

  return (
    <div className="mb-4">
      <label htmlFor="translation" className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
        Select Translation:
      </label>
      {loading ? (
        <p>Loading translations...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
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
      )}
    </div>
  );
}
