import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import visaRequirement from '../../../visa.json';

class VisaInfo extends Component {
  renderInfo() {
    const tripCountry = this.props.trips[this.props.tripId].country;
    const message = visaRequirement[tripCountry.toLowerCase()];
    console.log(message);
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

VisaInfo.propTypes = {
  trips: PropTypes.object,
  tripId: PropTypes.number,
};

export default connect(mapStateToProps)(VisaInfo);
