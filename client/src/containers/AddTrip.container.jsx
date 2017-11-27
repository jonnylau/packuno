import { connect } from 'react-redux';
import React from 'react';
import { addTrip } from '../actions/trips.actions';
import { selectOldTrip } from '../actions/trips.actions';
import Dashboard from '../components/Dashboard.component';
import seedState from '../seedState';

const mapStateToProps = (state, ownProps) => {({trips: state})};

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