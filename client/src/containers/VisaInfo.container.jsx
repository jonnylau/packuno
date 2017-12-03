import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import visaRequirement from '../../../visa.json';

class VisaInfo extends Component {
  renderInfo() {
    const destination = this.props.trips[this.props.tripId];
    const message = visaRequirement[destination.destination.toLowerCase()] || destination.country ? visaRequirement[destination.country.toLowerCase()] : '';
    return message;
  }

  render() {
    return (
      <span className="reminder">
        {this.renderInfo()}
      </span>
    );
  }
}

const mapStateToProps = state => ({
  tripId: state.currentTripId,
  trips: state.trips.byId,
});

VisaInfo.propTypes = {
  trips: PropTypes.object,
  tripId: PropTypes.number,
};

export default connect(mapStateToProps)(VisaInfo);
