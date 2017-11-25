import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import thunk from 'redux-thunk';
import reducer from './reducers/index.reducers';
import seedState from './seedState';
import Trip from './components/Trip.component';
import App from './components/App.component';
import Dashboard from './components/Dashboard.component';


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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/trip">Trip</Link></li>
        </ul>

        <hr />

        <Route path="/" component={App} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/trip" component={Trip} />
      </div>
    </Router>
  </Provider>
  , document.getElementById('app')
);
