import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import packunoApp from './reducers/index.reducers.jsx';
import Weather from './containers/Weather.container.jsx';
import thunk from 'redux-thunk';
import reducer from './reducers/index.reducers';
import seedState from './seedState';
import Trip from './components/Trip.component';
import Dashboard from './components/Dashboard.component';
import LoginCont from './containers/Login.container';

const store = createStore(
  reducer,
  seedState,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);
window.store = store;

render(
  <Provider store={store}>
    <Router>
      <div>
        <ul>
          <li><Link to="/login">Login</Link></li>
        </ul>

        <Route path="/login" component={LoginCont} />

      </div>
    </Router>
  </Provider>
  , document.getElementById('app'),
);
