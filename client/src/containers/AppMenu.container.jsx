import { connect } from 'react-redux';
import { updateCurrentTrip } from '../actions/trips.actions';
import { loggedInAsync as LoggedIn } from '../actions/login.actions';
import AppMenu from '../components/AppMenu.component';


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

const AppMenuCont = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppMenu);

export default AppMenuCont;
