import { connect } from 'react-redux';
import AddTrip from '../components/AddTrip.component';
import { addTrip, tripsFetchData } from '../actions/trips.actions';

const getRecent5Trips = state => (
  state.trips.allIds.slice(-5).reverse()
);


const mapStateToProps = state => ({
  trips: state.trips,
  userId: state.currentUserId || 1,
  recentTrips: getRecent5Trips(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (destination, startDate, endDate, oldTripId, userId) => {
    dispatch(addTrip(destination, startDate, endDate, oldTripId, userId));
  },
  fetchTrips: (userId) => {
    dispatch(tripsFetchData(userId));
  },
});

const AddTripContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTrip);

export default AddTripContainer;
