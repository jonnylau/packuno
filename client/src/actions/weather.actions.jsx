import isoCode from '../utils/weatherHelper.js';

const request = require('request');
const rp = require('request-promise');

export const showCurrent = filter => ({
  type: 'SHOW_CURRENT',
  filter,
});

export const setHistorical = historicalArray => ({
  type: 'SET_HISTORICAL',
  historical: historicalArray,
});

export const setHistoricalAsync = () => (dispatch, getState) => {
  const options = {
    type: 'GET',
    uri: 'http://localhost:3000/weather',
  };
  return rp(options).then((result) => {
    dispatch(setHistorical(result));
  });
};

export const setForecast = forecastArray => ({
  type: 'SET_FORECAST',
  forecast: forecastArray,
});

export const setForecastAsync = () => (dispatch, getState) => {
  const options = {
    type: 'GET',
    uri: 'http://localhost:3000/forecast',
  };
  return rp(options).then((result) => {
    const forecast = JSON.parse(result);
    const txtForecast = forecast.forecast.txt_forecast.forecastday;
    const finalForecast = txtForecast.filter((item, i) => i % 2 === 0);
    dispatch(setForecast(finalForecast));
  });
};

