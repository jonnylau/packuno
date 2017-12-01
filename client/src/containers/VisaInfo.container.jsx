import React, { Component } from 'react';
import { connect } from 'react-redux';
import visaRequirement from '../../visa';

class VisaInfo extends Component {
  renderInfo() {
    const tripDestination = this.props.trips[this.props.tripId].country;
    const message = visaRequirement[tripDestination];
    if (message) {
      return message;
    }
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

export default connect(mapStateToProps)(VisaInfo);
