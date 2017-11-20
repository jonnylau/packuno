import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import packunoApp from './reducers/index.reducers.jsx';
import Home from './components/Home.component.jsx';


let store = createStore(packunoApp);


render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('home')
)