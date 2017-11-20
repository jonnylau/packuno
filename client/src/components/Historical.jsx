import React from 'react';

const Historical = props => (
  <div className="weather-widget">
    {props.weather.map(item => (
      <div className="weather-item">
        <h2>{item[0]}</h2>
        <div className="temp">
          {item[1][0] += '\u00B0'}
        </div>
        <div className="weather-pic">
          <img src={item[1][1]} />
        </div>
      </div>))}
  </div>
);

export default Historical;
