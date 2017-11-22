import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import reducer from './reducers/index.reducers';
import seedState from './seedState';
import Trip from './components/Trip.component';
import App from './components/App.component';
import Dashboard from './components/Dashboard.component';
import Weather from './containers/Weather.container';

<<<<<<< HEAD
let store = createStore(packunoApp);
=======
let store = createStore(
  reducer,
  seedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
>>>>>>> 9a7129f1a80b451c7886b0f899efce44a4b9fb3d
window.store = store;

render(
  <Provider store={store}>
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/trip">Trip</Link></li>
          <li><Link to="/weather">Weather</Link></li>
        </ul>

        <hr />

        <Route path="/" component={App} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/trip" component={Trip} />
        <Route path="/weather" component={Weather} />
      </div>
    </Router>
<<<<<<< HEAD
  </Provider>
  , document.getElementById('app')
);
=======
  </Provider>,
  document.getElementById('app')
);
>>>>>>> 9a7129f1a80b451c7886b0f899efce44a4b9fb3d
