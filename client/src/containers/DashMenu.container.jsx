import { connect } from 'react-redux';
import { updateCurrentTrip } from '../actions/trips.actions';
import { loggedInAsync as LoggedIn } from '../actions/login.actions';
import DashMenu from '../components/DashMenu.component';


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

const DashMenuCont = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashMenu);

export default DashMenuCont;
