import React from 'react';
import ReactDOM from 'react-dom';

const handleClick = () => {
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("content").style.marginLeft = "0%";
  document.getElementById("openButton").innerHTML = "&equiv;";
};

const handleOpen = () => {
  document.getElementById("sidebar").style.display = "block";
  document.getElementById("content").style.marginLeft = "25%";
  document.getElementById("openButton").innerHTML = "";
};


const App = () => (
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
      <button type="submit" className="submitButton"> Submit </button>
      <br /><br /><br /><br />
      3. Copy Packing List from Past Trips
    </div>
  </div>

);

ReactDOM.render(<App />, document.getElementById('app'));

