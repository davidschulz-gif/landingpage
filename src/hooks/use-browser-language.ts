import { useEffect, useState } from 'react'

export interface BrowserLanguageState {
  language: string
  languages: readonly string[]
  isSupported: boolean
}

export function useBrowserLanguage() {
  const [state, setState] = useState<BrowserLanguageState>({
    language: 'en',
    languages: ['en'],
    isSupported: typeof navigator !== 'undefined' && 'language' in navigator,
  })

  useEffect(() => {
    if (typeof navigator === 'undefined' || !('language' in navigator)) {
      return
    }

    const updateLanguage = () => {
      setState({
        language: navigator.language,
        languages: navigator.languages || [navigator.language],
        isSupported: true,
      })
    }

    // Set initial language
    updateLanguage()

    // Note: Browser language changes are rare and typically require browser restart,
    // but we can listen to languagechange event if needed
    window.addEventListener('languagechange', updateLanguage)

    return () => {
      window.removeEventListener('languagechange', updateLanguage)
    }
  }, [])

  return state
}
