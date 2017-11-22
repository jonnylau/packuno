import { combineReducers } from 'redux';
import packingList from './packingList.reducers.jsx';
import visibilityFilter from './visibilityFilter.reducers.jsx';
import weatherWidget from './weather.reducers.jsx';
import setHistorical from './historical.reducers.jsx';
import setForecast from './forecast.reducers.jsx';

const packunoApp = combineReducers({
  packingList,
  visibilityFilter,
  weatherWidget,
  setHistorical,
  setForecast,
});

export default packunoApp;
