import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { languages } from '../i18n/i18n'

export const HtmlHead = function HtmlHead () {
  const { t, i18n } = useTranslation()

  const languageLinks = languages.map(language => {
    return (
      // eslint-disable-next-line react/jsx-key
      <link rel="alternate" hrefLang={language.key} href={'http://faviconit.com/' + language.key} />
    )
  })

  return (
    <Helmet>
      <html lang={i18n.language} dir={i18n.dir()}/>
      <title>{t('head.title')}</title>
      {languageLinks}
      <link rel="alternate" href="http://faviconit.com/" hrefLang="x-default" />
      <meta name='Description' content={t('head.description')} />
      <meta name='twitter:site:id' content='2318538170' />
      <meta property='og:url' content="http://faviconit.com" />
      <meta property='og:site_name' content='faviconit' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={t('head.ogTitle')} />
      <meta property='og:description' content={t('head.description')} />
      <meta property='og:locale' content={i18n.language} />
    </Helmet>
  )
}
