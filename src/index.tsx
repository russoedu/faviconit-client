import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { store } from './redux/store'
import { App } from './App'

import * as serviceWorker from './serviceWorker'

import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material'
import './index.css'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/i18n'

const theme = createTheme({
  palette: {
    mode:       'dark',
    background: {
      default: '#424242',
    },
    primary: {
      main: '#6C1DDB',
    },
    secondary: {
      main: '#FF9500',
    },
    error: {
      main: '#DB2740',
    },
    success: {
      main: '#07DB32',
    },
    info: {
      main: '#128DDB',
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <App />
          </CssBaseline>
        </ThemeProvider>
      </Provider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

/*
 * If you want your app to work offline and load faster, you can change
 * unregister() to register() below. Note this comes with some pitfalls.
 * Learn more about service workers: https://bit.ly/CRA-PWA
 */
serviceWorker.unregister()
