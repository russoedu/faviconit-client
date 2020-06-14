import React from 'react'
import { useSelector } from 'react-redux'

import { SocialFacebook, SocialTwitter, LanguageSelector } from '.'

import './Header.css'

export function Header () {
  const language = useSelector(state => state.language)

  return (
    <header className="navbar navbar-dark sticky-top" role="region" aria-label="Header">
      <a className="brand" href={'/' + language.selected.key} tabIndex="0">
        <img id="logo" src='/img/faviconit-logo.svg' alt='logo' />
      </a>
      <ul className="nav justify-content-end">
        <SocialFacebook/>
        <SocialTwitter/>
        <LanguageSelector />
      </ul>
    </header>
  )
}
