import { connect } from 'react-redux';
import { itemsFetchData, togglePacked, deleteItem } from '../actions/items.actions';
import { enterEditItemMode } from '../actions/editMode.actions';
import ItemList from '../components/ItemList.component';

const getVisibleItems = (items, filter) => {
  if (filter === 'SHOW_ALL') {
    return items;
  }
  if (filter === 'SHOW_PACKED') {
    return items.filter(item => item.packed);
  }
  if (filter === 'SHOW_UNPACKED') {
    return items.filter(item => !item.packed);
  }
  return items;
};

// Update trip when trip data added to redux state

const mapStateToProps = state => ({
  items: getVisibleItems(
    state.items.allIds.map(id => state.items.byId[id]),
    state.visibilityFilter,
  ),
  categories: state.items.categories,
  tripId: state.currentTripId || 1,
});

const mapDispatchToProps = dispatch => ({
  onItemClick: (id) => {
    dispatch(togglePacked(id));
  },
  onDeleteClick: (id) => {
    dispatch(deleteItem(id));
  },
  onEditClick: (id) => {
    dispatch(enterEditItemMode(id));
  },
  fetchItems: (tripId) => {
    dispatch(itemsFetchData(tripId));
  },
});

const VisibleItemList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemList);

export default VisibleItemList;
