import React from 'react';

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

const Dashboard = () => (
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
      3. Copy Packing List from Past Trips
      <br /><br />
      <button type="submit" className="submitButton"> Create Trip </button>
      <br /><br /><br /><br />
    </div>
  </div>
);

export default Dashboard;

/* When App renders, do a get request to our database to get the name and dates of
an upcoming trip for the logged in user
    For each upcoming trip, do a get request to the Flickr API to render new pictures
      https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
      rest endpoint: https://api.flickr.com/services/rest/

When App renders, do a get request to our database to get the name and dates of
past trips for the logged in user.
For each old trip, do a get request to the Flickr API to render new pictures
When user clicks "Create Trip", app reroutes to trip.html, with new trip info rendered
onto trip.html */
