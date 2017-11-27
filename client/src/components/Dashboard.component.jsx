import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import Moment from 'moment';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import AddTripContainer from '../containers/AddTrip.container';
import { connect } from 'react-redux';

//Temporarily moved AddTrip.container to bottom of document
import { addTrip } from '../actions/trips.actions';
import { selectOldTrip } from '../actions/trips.actions';
import seedState from '../seedState';

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
      data: seedState,
      pictures: [],
      trips: props.trips,
    };
  }

  render() {
    const { destination, departureDate, returnDate } = this.state;
    return (
      <div>
        <div id="sidebar">
        <button id="closeButton" onClick={handleClick}>&equiv;</button>
          <h1> Packuno </h1>
          <h2> Upcoming Trips </h2>
          <div id="upcoming">
            <ul>
              {console.log(this.state.trips)}
              {this.state.data.trips.allIDs.map (element => {
              const dateLimit = Moment(this.state.data.trips.byID[element].returnDate);
              if (this.state.data.trips.byID[element].returnDate
                != null && now.isBefore(dateLimit)) {
                return (<li key={this.state.data.trips.byID[element].id}>
                  {this.state.data.trips.byID[element].destination}
                  <br />
                  From: {this.state.data.trips.byID[element].departureDate}
                  <br />
                  To: {this.state.data.trips.byID[element].returnDate}
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
              {this.state.data.trips.allIDs.map (element => {
              const dateLimit = Moment(this.state.data.trips.byID[element].returnDate);
              if (this.state.data.trips.byID[element].returnDate != null && now.isAfter(dateLimit)) {
                return 
                <li>
                <a href="#" value={element}>
                  <br /><br />
                  {this.state.data.trips.byID[element].destination}
                  <br /><br />
                  From: {this.state.data.trips.byID[element].departureDate}
                  <br /><br />
                  To: {this.state.data.trips.byID[element].returnDate}
                </a>
                </li>;
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

const mapStateToProps = (state) => {({trips: state})};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (destination, departureDate, returnDate) => {
      dispatch(addTrip(destination, departureDate, returnDate));
    },
    onSelect: (oldTripId) => {
      dispatch(selectOldTrip(oldTripId));
    },
  };
};

const AddTripContainer = connect(mapStateToProps, mapDispatchToProps)(Dashboard);

export default AddTripContainer;