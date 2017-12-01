import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import HealthList from '../../../vaccines.json';

class CurrentTrip extends Component {
  render() {
    const currentCity = this.props.trips[this.props.currentTrip].destination;
    const vaccinesByCity = HealthList[currentCity] ? HealthList[currentCity].vaccines : '';
    const currentWarning = HealthList[currentCity] ? HealthList[currentCity].warnings : '';
    return (
      <div>
        <Card>
          <CardContent>
            <Typography
              type="headline"
              component="h2"
            >
              Health Recommendations
            </Typography>
            <Typography component="ul">
              <Typography component="li">
                {currentWarning}
              </Typography>
            </Typography>
            <Button
              dense
              color="primary"
            >
              Add Vaccines to List
            </Button>
          </CardContent>
        </Card>
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
};

export default connect(mapStateToProps)(CurrentTrip);