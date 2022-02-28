import React from 'react'
import ReactDOM from 'react-dom'

import { I18nextProvider } from 'react-i18next'

import i18n from './i18n/i18n'

import { HtmlHead } from './components/HtmlHead'
import { App } from './App'

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <HtmlHead/>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)