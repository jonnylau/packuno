import { connect } from 'react-redux';
import AppMenu from '../components/AppMenu.component';



const getItemToEdit = (state) => {
  if (state.editItemMode.inEditMode) {
    return state.items.byId[state.editItemMode.id];
  }
  return null;
};

// Update userId when user data added to redux state

const mapStateToProps = state => ({
  trips: state.trips
});

const mapDispatchToProps = dispatch => ({
  onTripClick: (tripId) => {
    dispatch(updateCurrentTrip(tripId));
  },
});

const AppMenuCont = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppMenu);

export default AppMenuCont;
