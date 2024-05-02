import { ReactNode, useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { VenueContext } from '../venue/context'
import { I18nContext } from './context'

export interface I18nProviderProps {
  children?: ReactNode
}

export function I18nProvider(props: I18nProviderProps) {
  const { venue } = useContext(VenueContext)
  const { i18n } = useTranslation()

  const locale = venue?.locale 
  const { changeLanguage } = i18n
  
  useEffect(() => {
    if (locale)
      changeLanguage(locale)
  }, [locale, changeLanguage])

  return (
    <I18nContext.Provider value={{}}>
      {props.children}
    </I18nContext.Provider>
  )
}