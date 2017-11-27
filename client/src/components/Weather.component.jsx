import React from 'react';
import Historical from './Historical.jsx';
import PropTypes from 'prop-types';
import Forecast from './Forecast.component.jsx';

const Weather = (props) => {
  const renderWeather = () => {
    if (props.weatherFilter === 'HISTORICAL') {
      return <Historical weather={props.historical} />;
    }
    if (props.weatherFilter === 'SHOW_CURRENT') {
      return <Forecast weather={props.forecast} />;
    }
    return (<h2>Weather</h2>);
  };
  return (renderWeather());
};

Weather.propTypes = {
  weatherFilter: PropTypes.string.isRequired,
  historical: PropTypes.arrayOf(PropTypes.string),
};

export default Weather;

