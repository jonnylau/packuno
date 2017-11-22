import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import packunoApp from './reducers/index.reducers.jsx';
import Home from './components/Home.component.jsx';
import App from './components/App.component.jsx';
import Dashboard from './components/Dashboard.component.jsx';
import Weather from './containers/Weather.container.jsx';
import thunk from 'redux-thunk';



let store = createStore(packunoApp, applyMiddleware(thunk));
window.store = store;





render(
  <Provider store={store}>
    <Router>
      <div>
    
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Topics</Link></li>
          <li><Link to="/trip">Trip</Link></li>
          <li><Link to="/weather">Weather</Link></li>
        </ul>

        <hr/>

        <Route path="/" component={App} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/trip" component={Home} />
        <Route path="/weather" component={Weather} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
);