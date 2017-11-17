import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import packingList from './reducers'
import Home from './components/Home.component'

let store = createStore(todoApp)

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('home')
)
