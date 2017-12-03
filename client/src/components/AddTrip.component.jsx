import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import moment from 'moment';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 600,
    background: theme.palette.background.paper,
    margin: 20,
    marginBottom: 40,
    padding: 20,
  },
  textField: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    marginTop: 20,
    width: 200,
  },
  stepHeading: {
    display: 'flex',
    width: '100%',
    height: 40,
    alignItems: 'center',
  },
  stepNum: {
    color: 'white',
    display: 'inlineBlock',
    height: 40,
    width: 40,
    borderRadius: '50%',
    textAlign: 'center',
    fontSize: 24,
    lineHeight: '40px',
    marginRight: 20,
    background: theme.palette.primary[500],
  },
  stepTitle: {
    flex: 1,
    display: 'inlineBlock',
    fontSize: 24,
    lineHeight: '40px',
  },
  stepContent: {
    marginLeft: 40,
  },
  tripsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 600,
    textAlign: 'center',
  },
  tripBox: {
    width: 140,
    height: 210,
    margin: 5,
    padding: 10,
    textAlign: 'center',
    '&:hover': {
      background: '#eeeeee',
    },
  },
  selectedTripBox: {
    width: 140,
    height: 210,
    margin: 5,
    padding: 10,
    textAlign: 'center',
    background: '#eeeeee',
  },
  photo: {
    width: 120,
    height: 120,
    overflow: 'hidden',
    borderRadius: '50%',
  },
  skip: {
    width: 120,
    height: 120,
    borderRadius: '50%',
    fontSize: 24,
    marginLeft: 10,
    lineHeight: '120px',
    background: theme.palette.secondary['A200'],
  },
  tripDetail: {
    margin: 0,
    lineHeight: '16px',
  },
  saveButton: {
    color: 'white',
    float: 'right',
    position: 'relative',
    margin: 10,
  },
});


class AddTrip extends React.Component {
  state = {
    destination: '',
    country: '',
    startDate: moment().format('YYYY-MM-DD'),
    endDate: moment().format('YYYY-MM-DD'),
    selectedTrip: null,
  };

  onFormSubmit = (e) => {
    const { destination, country, startDate, endDate, selectedTrip } = this.state;
    const { onSubmit, userId } = this.props;
    e.preventDefault();

    onSubmit(destination, country, startDate, endDate, selectedTrip, userId);

    this.setState({
      destination: '',
      country: '',
      startDate: '',
      endDate: '',
      selectedTrip: null,
    });
  };

  render = () => {
    const { trips, recentTrips, classes } = this.props;


    return (
      <div className={classes.root}>
        <h1>Create a new packing list</h1>
        <br />
        <form onSubmit={this.onFormSubmit}>
          <div className={classes.stepHeading}>
            <div className={classes.stepNum}>1</div>
            <h3 className={classes.stepTitle}>Where are you going?</h3>
          </div>
          <div className={classes.stepContent}>
            <TextField
              id="destination"
              label="Destination"
              className={classes.textField}
              value={this.state.destination}
              onChange={e => this.setState({ destination: e.target.value })}
              margin="normal"
            />
            <TextField
              id="country"
              label="Country"
              className={classes.textField}
              value={this.state.country}
              onChange={e => this.setState({ country: e.target.value })}
              margin="normal"
            />
          </div>

          <div className={classes.stepHeading}>
            <div className={classes.stepNum}>2</div>
            <h3 className={classes.stepTitle}>What dates?</h3>
          </div>
          <div className={classes.stepContent}>
            <TextField
              id="start_date"
              label="Departure Date"
              type="date"
              value={this.state.startDate}  
              onChange={e => this.setState({ startDate: e.target.value })}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="end_date"
              label="Return Date"
              type="date"
              value={this.state.endDate}  
              onChange={e => this.setState({ endDate: e.target.value })}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>

          <div className={classes.stepHeading}>
            <div className={classes.stepNum}>3</div>
            <h3 className={classes.stepTitle}>Start with a list from a previous trip?</h3>
          </div>
          <div className={classes.stepContent}>
            <div className={classes.tripsContainer}>
              <div
                key={0}
                onClick={() => this.setState({selectedTrip: 0})}
                className={(0 === this.state.selectedTrip) ? classes.selectedTripBox : classes.tripBox}
              >
                <div className={classes.skip} >
                  <Link to="/trip" style={{ color: 'black', textDecoration: 'none' }}>
                  Skip
                  </Link>
                </div>
              </div>
              {recentTrips.map(tripId => (
                <div
                  key={tripId}
                  onClick={() => this.setState({ selectedTrip: tripId })}
                  className={(this.state.selectedTrip === tripId) ? classes.selectedTripBox : classes.tripBox}
                >
                  <img src={ trips.byId[tripId].photoUrl} className={classes.photo} />
                  {/* <Link to="/trips/:tripId/items" > */}
                    <h4>{ trips.byId[tripId].destination }</h4>
                  {/* </Link>  */}
                  <span>{moment(trips.byId[tripId].startDate).format('MMMM YYYY')}</span>
                </div>
                ))}
            </div>
            <br />
            <Button type="submit" raised color="primary" className={classes.saveButton}>
              Save
            </Button>
            <br />
          </div>
        </form>
      </div>
      );
  }
}

AddTrip.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  trips: PropTypes.object,
  recentTrips: PropTypes.array,
  userId: PropTypes.number.isRequired,
  classes: PropTypes.object,
};

export default withStyles(styles)(AddTrip);
