import { connect } from 'react-redux';
import { updateCurrentTrip } from '../actions/trips.actions';
import { loggedInAsync as LoggedIn } from '../actions/login.actions';
import TripMenu from '../components/TripMenu.component';


const mapStateToProps = state => ({
  trips: state.trips,
  isLoggedIn: state.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  onTripClick: (tripId) => {
    dispatch(updateCurrentTrip(tripId));
  },
  LoggedIn: () => {
    dispatch(LoggedIn());
  },
});

const TripMenuCont = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TripMenu);

export default TripMenuCont;