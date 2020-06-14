import React from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

export function LanguageList () {
  const language = useSelector(state => state.language)
  const { t } = useTranslation()

  return (
    <React.Fragment>
      {language.list.map((lang, index) => {
        const langActive = lang.key === language.selected.key ? ' active' : ''
        return (
          <li className={'language-selection' + langActive} key={index}>
            <a className="language-selection-link" rel="alternate" hrefLang={lang.key} href={'/' + lang.key}>
              <div className="language-selection-content" lang={lang.key} id={lang.key}>{lang.native}</div>
            </a>
          </li>
        )
      })}
      <li className="language-selection">
        <a className="language-selection-link" href={'/' + language.selected.key}>
          <span className="language-selection-content">
            {t('general.helpUsTranslate')}
          </span>
        </a>
      </li>
    </React.Fragment>
  )
}
