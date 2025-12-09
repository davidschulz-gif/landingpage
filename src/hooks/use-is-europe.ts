import { useEffect, useState } from 'react'

/**
 * European language codes (ISO 639-1)
 */
const EUROPEAN_LANGUAGES = [
  'de', // German
  'fr', // French
  'es', // Spanish
  'it', // Italian
  'pt', // Portuguese
  'nl', // Dutch
  'pl', // Polish
  'ru', // Russian
  'cs', // Czech
  'ro', // Romanian
  'hu', // Hungarian
  'sv', // Swedish
  'da', // Danish
  'fi', // Finnish
  'no', // Norwegian
  'el', // Greek
  'bg', // Bulgarian
  'hr', // Croatian
  'sk', // Slovak
  'sl', // Slovenian
  'et', // Estonian
  'lv', // Latvian
  'lt', // Lithuanian
  'ga', // Irish
  'mt', // Maltese
  'is', // Icelandic
  'uk', // Ukrainian
  'be', // Belarusian
  'mk', // Macedonian
  'sq', // Albanian
  'sr', // Serbian
  'bs', // Bosnian
  'ca', // Catalan
  'eu', // Basque
  'cy', // Welsh
  'gl', // Galician
]

/**
 * Hook to detect if the user is likely in Europe based on browser language
 */
export function useIsEurope() {
  const [isEurope, setIsEurope] = useState<boolean>(true) // Default to Europe

  useEffect(() => {
    if (typeof navigator === 'undefined' || !('language' in navigator)) {
      return
    }

    try {
      // Get primary language (e.g., "de-DE" -> "de")
      const primaryLanguage = navigator.language.split('-')[0].toLowerCase()

      // Check if language is European
      const isEuropeanLanguage = EUROPEAN_LANGUAGES.includes(primaryLanguage)

      setIsEurope(isEuropeanLanguage)
    } catch (error) {
      // If detection fails, default to Europe
      console.warn('Failed to detect language:', error)
      setIsEurope(true)
    }
  }, [])

  return isEurope
}
