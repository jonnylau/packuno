import { connect } from 'react-redux';
import AddTrip from '../components/AddTrip.component';
import { addTrip } from '../actions/trips.actions';


const mapStateToProps = state => ({
  trips: state.trips,
  userId: state.currentUserId || 1,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (destination, startDate, endDate, oldTripId, userId) => {
    dispatch(addTrip(destination, startDate, endDate, oldTripId, userId));
  },
  // fetchPastTrips: (userId) => {
   // dispatch(userItemsFetchData(userId));
  // },
});

const AddTripContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTrip);

export default AddTripContainer;
