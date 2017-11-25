import React from 'react';

const Forecast = props => (
  <div className="weather-widget">
    {props.weather.map(item => (
      <div className="weather-item">
        <p>{item.title}</p>
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