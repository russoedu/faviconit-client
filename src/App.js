import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import { HtmlHead, Header, Footer } from './components'
import { Home, NoMatchedRoute } from './routes'
import { LanguageService as Language } from './_services'
export function App () {
  const language = new Language()
  language.setLanguage()

  require(`./_static/css/${language.selected.dir}-bootstrap.css`)
  require('./_static/css/bootstrap-grid.min.css')
  require('./_static/css/bootstrap-reboot.min.css')
  require('./_static/css/app.css')
  // TODO: Improve language detection, redirect and 404 for unknown languages
  return (
    <Suspense>
      <HtmlHead/>
      <Router>
        <Header />
        <main className="container-fluid" role="main" aria-label="content">
          <Switch>
            <Route exact path='/'>
              <Redirect to={'/' + language.selected.key} />
            </Route>
            <Route path={'/:language'}>
              <Home />
            </Route>
            <Route path='/error'>
              <NoMatchedRoute/>
            </Route>
            <Redirect from='*' to='/error' />
          </Switch>
        </main>
        <Footer/>
      </Router>
    </Suspense>
  )
}
