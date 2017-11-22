const request = require('request');
const rp = require('request-promise');
const countries = require('./countryCodes.js');
const Promise = require('bluebird');

const picture = 'https://raw.githubusercontent.com/tcellerier/jdigiclock/master/images/weather/aw1.png';
const grabWeather = isoCode => new Promise((resolve, reject) => {
  const options = {
    type: 'GET',
    uri: `http://climatedataapi.worldbank.org/climateweb/rest/v1/country/cru/tas/month/${isoCode}`,
  };
  rp(options).then(result => result).then((result) => {
    const countryWeatherInfo = JSON.parse(result);
    console.log(result);
    const farenheit = countryWeatherInfo.map(item =>
      Math.round((((item.data * 1.8) + 32) * 100) / 100));
    resolve(farenheit);
  });
}).then((result) => {
  const weatherWidget = [];
  for (let i = 0; i < result.length; i + 1) {
    const weatherElement = [];
    weatherElement.push(result[i]);
    weatherElement.push(picture);
    weatherWidget.push(weatherElement);
  }
  return weatherWidget;
});

const isoCode = (name) => {
  const splitName = name.split(' ');
  const correctedName = splitName.map((item) => {
    if (item !== 'of' || item !== 'and') {
      return item[0].toUpperCase() + item.slice(1, item.length).toLowerCase();
    }
    return item;
  }).join(' ');
  const countryInfo = countries.countries[correctedName];
  return grabWeather(countryInfo);
};


module.exports.isoCode = isoCode;
