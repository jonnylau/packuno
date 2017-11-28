import 'babel-polyfill';
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import WeatherCont from '../client/src/containers/Weather.container';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import reducer from '../client/src/reducers/index.reducers';
import Trip from '../client/src/components/Trip.component';
import Dashboard from '../client/src/components/Dashboard.component';
import LoginCont from '../client/src/containers/Login.container';
import App from '../client/src/components/App.components';
import { loggedIn, currentUser } from '../client/src/actions/login.actions';
import { setHistoricalAsync as Historical, setForecastAsync as Forecast } from '../client/src/actions/weather.actions';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);
describe('should work as a testing suite', () => {

  test('should be able to run tests', () => {
    expect(1 + 2).toEqual(3);
  });
});

describe('should render components as pure functions', () => {
  test('renders login correctly', () => {
    const tree = renderer.create(<Provider store={store}><LoginCont /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

test('should create an action', () => {
  const loggedInTest = {
    type: 'LOG_IN',
    loggedIn: 'true',
  };
  expect(loggedIn('true')).toEqual(loggedInTest);
});

describe('should create actions when passed correct data', () => {
  test('should create an action when passed a login', () => {
    const loggedInTest = {
      type: 'LOG_IN',
      loggedIn: 'true',
    };
    expect(loggedIn('true')).toEqual(loggedInTest);
  });

  test('should create an action when passed historical data', () => {
    const expected = {
      type: 'SET_CURRENT_USER',
      userId: 11,
    };
    expect(currentUser(11)).toEqual(expected);
  });
});

describe('should dispatch reducers', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {}).currentTripId).toEqual(null);
  });
  test('should return the initial state', () => {
    expect(reducer(undefined, {}).currentTripId).toEqual(null);
  });
  test('reducer should have combined actions', () => {
    expect(Object.keys(reducer(undefined, {})).length).toEqual(17);
});
});

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })
  test('returns array with length greater than 0 when fetching information has been done', () => {
    const expected = [ { type: 'SET_HISTORICAL', historical: '[["August",65],["September",60]]' } ]
    const store = mockStore({ setHistorical: [] })
    return store.dispatch(Historical()).then(() => {
      expect(store.getActions().length).toBeGreaterThan(0);
    });
  });
  test('returns array with length greater than 0 when fetching information has been done', () => {
    const expected = [ { type: 'SET_FORECAST', historical: [] } ]
    const store = mockStore({ Forecast: [] })
    return store.dispatch(Forecast()).then(() => {
      expect(store.getActions().length).toBeGreaterThan(0);
    });
  });
});
