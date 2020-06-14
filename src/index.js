import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';

import { store } from './_helpers'
import { App } from './App'

ReactDOM.render(
  <Provider store={store} role="region" aria-label="page">
    <App />
  </Provider>,
  document.getElementById('root')
)
