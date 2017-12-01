import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';

class CurrentTrip extends Component {
  render() {
    const currentCity = this.props.trips[this.props.currentTrip].destination;
    const departureDate = moment(this.props.trips[this.props.currentTrip].startDate).format('l');
    const returnDate = moment(this.props.trips[this.props.currentTrip].endDate).format('l');
    return (
      <div>
        <div className="Destination Intro">
          {`${currentCity}`}
        </div>
        <div>
          {`${departureDate} to ${returnDate}`}
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    currentTrip: state.currentTripId,
    trips: state.trips.byId,
  };
}

export default connect(mapStateToProps)(CurrentTrip);
