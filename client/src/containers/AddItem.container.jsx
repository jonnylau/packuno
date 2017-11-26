import { connect } from 'react-redux';
import AddItemForm from '../components/AddItemForm.component';
import { addItem, editItem } from '../actions/items.actions';
import { exitEditItemMode } from '../actions/editMode.actions';
import { userItemsFetchData } from '../actions/userItems.actions';

const getItemToEdit = (state) => {
  if (state.editItemMode.inEditMode) {
    return state.items.byId[state.editItemMode.id];
  }
  return null;
};

// Update userId when user data added to redux state

const mapStateToProps = state => ({
  categories: state.items.categories,
  itemToEdit: getItemToEdit(state),
  userItems: state.userItems,
  userId: state.currentUserId || 1,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (item, category, quantity) => {
    dispatch(addItem(item, category, quantity));
  },
  onEditSubmit: (id, item, category, quantity) => {
    dispatch(editItem(id, item, category, quantity));
  },
  exitEditItemMode: () => {
    dispatch(exitEditItemMode());
  },
  fetchUserItems: (userId) => {
    dispatch(userItemsFetchData(userId));
  },
});

const AddItem = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddItemForm);

export default AddItem;
