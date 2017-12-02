import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
});

class CurrentTrip extends Component {
  render() {
    const currentCity = this.props.trips[this.props.currentTrip].destination;
    const departureDate = moment(this.props.trips[this.props.currentTrip].startDate).format('l');
    const returnDate = moment(this.props.trips[this.props.currentTrip].endDate).format('l');
    return (
      <div>
        <Typography 
        type="headline"
        component="h6"
        dense color="primary"
        >
          {`${currentCity}`}
        </Typography>
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

CurrentTrip.propTypes = {
  currentTrip: PropTypes.number.isRequired,
  trips: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(CurrentTrip));
