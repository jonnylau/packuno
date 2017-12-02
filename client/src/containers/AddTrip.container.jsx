import { connect } from 'react-redux';
import AddTrip from '../components/AddTrip.component';
import { addTrip } from '../actions/trips.actions';

const getRecent5Trips = state => (
  state.trips.allIds.slice(-5).reverse()
);


const mapStateToProps = state => ({
  trips: state.trips,
  userId: state.userId,
  recentTrips: getRecent5Trips(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (destination, country, startDate, endDate, oldTripId, userId) => {
    dispatch(addTrip(destination, country, startDate, endDate, oldTripId, userId));
  },
});

const AddTripContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTrip);

export default AddTripContainer;
