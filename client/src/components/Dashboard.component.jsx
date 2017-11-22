import React from 'react';
import $ from 'jquery';
import Moment from 'moment';
import seedState from '../seedState.js';

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

const now = Moment();

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: seedState,
    };
  }

  // fetchTrips() {
    // $.get('/alltrips', (err, data) => {
    //  if (err) {
    //    console.log('error fetching old trips', err);
    //  }
    //  console.log('success fetching old trips', data);
    //  this.setState({data: data});
    // }, 'json');
  // }

  render() {
    return (
      <div>
        <div id="sidebar">
          <button id="closeButton" onClick={handleClick}>&equiv;</button>
          <h1> Packuno </h1>
          <br />
          <h2> Upcoming Trips </h2>
          <div id="upcoming">
            <ul>
              {this.state.data.trips.allIds.map (element => {
              const dateLimit = Moment(this.state.data.trips.byId[element].returnDate);
              if (this.state.data.trips.byId[element].returnDate
                != null && now.isBefore(dateLimit)) {
                return (<li>
                  {this.state.data.trips.byId[element].destination}
                  <br />
                  From: {this.state.data.trips.byId[element].departureDate}
                  <br />
                  To: {this.state.data.trips.byId[element].returnDate}
                  <br /></li>
                  );
              }
              },
              )}
            </ul>
          </div>
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
          <div id="menu">
            <ul>
              {this.state.data.trips.allIds.map (element => {
              const dateLimit = Moment(this.state.data.trips.byId[element].returnDate);
              if (this.state.data.trips.byId[element].returnDate != null && now.isAfter(dateLimit)) {
                return <li><a href="#">
                  {this.state.data.trips.byId[element].destination}
                  <br /><br />
                  From: {this.state.data.trips.byId[element].departureDate}
                  <br /><br />
                  To: {this.state.data.trips.byId[element].returnDate}
                  </a></li>;
                }
              }
            )}
            </ul>
          </div>
          <br /><br />
          <button type="submit" className="submitButton"> Create Trip </button>
          <br /><br /><br /><br />
        </div>
      </div>
    );
  }
}

export default Dashboard;