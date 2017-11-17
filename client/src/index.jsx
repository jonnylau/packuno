import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import packingList from './reducers/home.reducers.jsx'
import Home from './components/Home.component.jsx'

<<<<<<< HEAD
<<<<<<< HEAD
import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
=======
let store = createStore(todoApp)
=======
let store = createStore(packingList)
>>>>>>> Add React import to top of each page

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('home')
)
>>>>>>> Add top-level redux-react components
