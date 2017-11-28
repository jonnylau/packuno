import React from 'react';

const Forecast = props => (
  <div className="weather-widget">
    {props.weather.map(item => (
      <div className="weather-item">
        <h3>{item.title}</h3>
        <div className="temp">
          {item.fcttext}
        </div>
        <div className="weather-pic">
          <img src={item.icon_url} />
        </div>
      </div>))}
  </div>
);

export default Forecast;