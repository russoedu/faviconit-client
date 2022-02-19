import { HashRouter, Routes, Route } from 'react-router-dom'
// import { Provider } from 'react-redux'
import { Header } from './components/Header'
import { Home } from './pages/Home'

import { useEffect } from 'react'

import './App.css'

export function App() {

  useEffect(() => {
    document.title = 'faviconit :: free favicon & apple touch icon generator for all devices and browsers'
  }, [])

  return (
    <HashRouter>
      <Header></Header>
      <Routes>
        <Route
          path='/'
          element={<Home/>}
        />
      </Routes>
    </HashRouter>
  )
}
