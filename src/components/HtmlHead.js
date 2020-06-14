import React from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'

export const HtmlHead = function HtmlHead () {
  const environment = process.env.REACT_APP_ENVIRONMENT
  const language = useSelector(state => state.language)
  const { t } = useTranslation()

  return (
    <Helmet>
      <html lang={language.selected.key} dir={language.selected.dir} />
      <title>Faviconit - {environment}</title>
      <meta name='Description' content={t('general.pageTitle')} />
      <meta name='Description' content={t('home.meta')} />
      <meta property='fb:admins' content='634567411' />
      <meta name='twitter:site:id' content='2318538170' />
      <meta property='og:url' content="http://faviconit.com" />
      <meta property='og:site_name' content='faviconit' />
      <meta property='og:title' content={t('general.ogTitle')} />
      <meta property='og:description' content={t('general.ogDescription')} />
      <meta property='og:locale' content={language.selected.social} />
    </Helmet>
  )
}
