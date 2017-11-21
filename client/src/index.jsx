import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import packunoApp from './reducers/index.reducers.jsx';
import Home from './components/Home.component.jsx';
import App from './components/App.component.jsx';
import Dashboard from './components/Dashboard.component.jsx';
import Weather from './containers/Weather.container.jsx';



let store = createStore(packunoApp);
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


  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <div id="sidebar">
          <button id="closeButton" onClick={handleClick}>&equiv;</button>
          <h1> Packuno </h1>
          <br />
          <h2> Upcoming Trips </h2>
        </div>
        <div id="content">
          <button id="openButton" onClick={handleOpen} />
          <h1> Create New Trip </h1>
          <br />
          1. <input type="text" className="destination" placeholder="Enter destination" />
          <br /><br />
          2. <input type="date" className="departureDate" value="2017-11-29" />
          <text> to </text>
          <input type="date" className="returnDate" value="2018-01-01" />
          <br /><br />
          3. Copy Packing List from Past Trips
          <br /><br />
          <button type="submit" className="submitButton"> Create Trip </button>
          <br /><br /><br /><br />
        </div>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));