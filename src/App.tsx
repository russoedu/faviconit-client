import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'

import { ThemeProvider } from '@emotion/react'
import { createTheme, CssBaseline } from '@mui/material'

import { LanguageRedirect } from './i18n/LanguageRedirect'
import { useTranslation } from 'react-i18next'

import { Home } from './pages/Home'
import { Favicon } from './pages/Favicon'

import './App.css'

export function App () {
  const { i18n } = useTranslation()

  const theme = createTheme({
    direction: i18n.dir(),
    palette:   {
      mode:    'dark',
      /*
       * background: {
       *   default: '#424242',
       * },
       */
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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route index element={<LanguageRedirect/>}/>
            <Route path=':language' element={<Home/>}/>
            <Route path='favicon' element={<Favicon/>}/>
          </Routes>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  )
}
