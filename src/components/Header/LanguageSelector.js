import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { LanguageList } from '.'
import languageIcon from '../../_static/img/language-solid.svg'

import './LanguageSelector.css'

export function LanguageSelector () {
  const language = useSelector(state => state.language)
  const [menuVisible, setmMnuVisibility] = useState(false)

  // Hide the menu if clicked outside the menu items. It prevents the menu start closing and opening again when clicking on the menu items
  window.addEventListener('mousedown', (e) => {
    const targetClass = e.target.className

    if (
      targetClass !== 'nav-item dropdown nav-pills' &&
        targetClass !== 'nav-link dropdown-toggle active button' &&
        targetClass !== 'language-icon' &&
        targetClass !== 'language-selector-text' &&
        targetClass !== 'dropdown-menu' &&
        targetClass !== 'language-selection' &&
        targetClass !== 'language-selection-link' &&
        targetClass !== 'language-selection-content'
    ) {
      setmMnuVisibility(false)
    }
  })

  const showMenu = () => {
    setmMnuVisibility(!menuVisible)
  }

  return (
    <li
      className="nav-item dropdown nav-pills"
      tabIndex="2"
      role="button"
      onClick={showMenu}
    >
      <div
        className="nav-link dropdown-toggle active button"
        id="language-selector"
      >
        <img className="language-icon" src={languageIcon} aria-hidden="true" alt="language icon"/>
        <span className="language-selector-text">{language.selected.native}</span>
      </div>
      <ul
        className={'dropdown-menu' + language.selected.dirClass}
        aria-hidden={!menuVisible}
      >
        <LanguageList/>
      </ul>
    </li>
  )
}
