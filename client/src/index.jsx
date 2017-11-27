import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import lightBlue from 'material-ui/colors/lightBlue';
import lime from 'material-ui/colors/lime';
import thunk from 'redux-thunk';
import reducer from './reducers/index.reducers';
import seedState from './seedState';
import App from './components/App.component';

const store = createStore(
  reducer,
  seedState,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);
window.store = store;

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: lime,
  },
  status: {
    danger: 'orange',
  },
});

render(
 <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router>
        <Route path="/" component={App} />
    </Router>
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('app')
);

// render(
//  <Provider store={store}>
//     <MuiThemeProvider theme={theme}>
//       <Router>
//         <div>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/dashboard">Dashboard</Link></li>
//             <li><Link to="/trip">Trip</Link></li>
//           </ul>

//           <hr />

//           <Route path="/" component={App} />
//           <Route path="/dashboard" component={Dashboard} />
//           <Route path="/trip" component={Trip} />
//         </div>
//       </Router>
//     </MuiThemeProvider>
//   </Provider>
//   , document.getElementById('app')
// );
