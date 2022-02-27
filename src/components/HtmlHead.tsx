import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

export const HtmlHead = function HtmlHead () {
  const { t, i18n } = useTranslation()

  /*
   * Include lang refs
   * <xhtml:link
   *   rel="alternate"
   *   hreflang="de"
   *   href="https://www.example.com/deutsch/page.html"/>
   * 
   * https://developers.google.com/search/docs/advanced/crawling/international-overview
   */
  return (
    <Helmet>
      <html lang={i18n.language} dir={i18n.dir()}/>
      <title>{t('general.pageTitle')}</title>
      <meta name='Description' content={t('home.meta')} />
      <meta name='twitter:site:id' content='2318538170' />
      <meta property='og:url' content="http://faviconit.com" />
      <meta property='og:site_name' content='faviconit' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={t('general.ogTitle')} />
      <meta property='og:description' content={t('home.meta')} />
      <meta property='og:locale' content={i18n.language} />
    </Helmet>
  )
}
