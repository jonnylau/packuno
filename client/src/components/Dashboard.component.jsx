import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import Moment from 'moment';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddTripContainer from '../containers/AddTrip.container';


//Styling-related functions
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

const identifyPicture = (key, event) => {
  this.props.onSelect(key);
  if (this.state.oldTripSelected) {
    event.target.style.background = 'Transparent';
  } else {
    event.target.style.background = 'grey';
  }
  this.setState({oldTripSelected: !this.state.oldTripSelected});
};

const onHover = (event) => {
  if(this.state.oldTripSelected === false) {
    event.target.style.background = 'grey';
  }
};

const offHover = (event) => {
  if(this.state.oldTripSelected === false) {
    event.target.style.background = 'Transparent';
  }
};

const now = Moment();

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      destination: '',
      departureDate: '',
      returnDate: '',
      oldTripSelected: false,
    };
  }

  render() {
    const { destination, departureDate, returnDate } = this.state;
    return (
      <div>
        <AddTripContainer />
        <div id="sidebar">
          <button id="closeButton" onClick={handleClick}>&equiv;</button>
          <h1> Packuno </h1>
          <br />
          <h2> Upcoming Trips </h2>
          <div id="upcoming">
            <ul>
              {props.data.trips.allIDs.map (element => {
              const dateLimit = Moment(props.data.trips.byID[element].returnDate);
              if (props.data.trips.byID[element].returnDate
                != null && now.isBefore(dateLimit)) {
                return (<li key={props.data.trips.byID[element].id}>
                  {props.data.trips.byID[element].destination}
                  <br />
                  From: {props.data.trips.byID[element].departureDate}
                  <br />
                  To: {props.data.trips.byID[element].returnDate}
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
          1. <input type="text" className="destination" placeholder="Enter destination" value={this.state.destination} onChange={e => this.setState({ destination: e.target.value })} />
          <br /><br />
          2. <input type="date" className="departureDate" value={this.state.departureDate}  onChange={e => this.setState({ departureDate: e.target.value })} />
          <text> to </text>
          <input type="date" className="returnDate" value={this.state.returnDate} onChange={e => this.setState({ returnDate: e.target.value })} />
          <br /><br />
          3. Copy Packing List from Past Trips
          <br /><br />
          <div id="menu">
            <ul>
              {props.data.trips.allIDs.map (element => {
              const dateLimit = Moment(props.data.trips.byID[element].returnDate);
              if (props.data.trips.byID[element].returnDate != null && now.isAfter(dateLimit)) {
                return <li onClick={()=>this.identifyPicture(element, event)} onMouseEnter={e => onHover(e)} onMouseLeave={e => offHover(e)}><a href="#" value={element}>
                  <img key={element} src={props.pictures[element]} className="image" />
                  <br /><br />
                  {props.data.trips.byID[element].destination}
                  <br /><br />
                  From: {props.data.trips.byID[element].departureDate}
                  <br /><br />
                  To: {props.data.trips.byID[element].returnDate}
                  </a></li>;
                }
              }
            )}
           <li onMouseEnter={e => onHover(e)} onMouseLeave={e => offHover(e)} onClick={()=>this.identifyPicture(0, event)}><a href="#"> <br /> (None) <br /><br /></a></li>
            </ul>
          </div>
          <br /><br />
          <Link to="/trip"><button type="submit" className="submitButton" onClick={this.props.onSubmit(destination, departureDate, returnDate)}> Create Trip </button></Link>
          <br /><br /><br /><br />
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Dashboard;