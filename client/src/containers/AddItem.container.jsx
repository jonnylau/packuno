import { connect } from 'react-redux';
import AddItemForm from '../components/AddItemForm.component';
import { addItem, editItem } from '../actions/items.actions';
import { exitEditItemMode } from '../actions/editMode.actions';
import { userItemsFetchData } from '../actions/loadItems.actions';

const getItemToEdit = (state) => {

  if (state.editItemMode.inEditMode) {
    return state.items.byId[state.editItemMode.id];
  }

  return null;
};


const mapStateToProps = (state) => {
  return {
    categories: state.items.categories,
    itemToEdit: getItemToEdit(state),
    userItems: state.userItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (item, category, quantity) => {
      dispatch(addItem(item, category, quantity));
    },
    onEditSubmit: (id, item, category, quantity) => {
      dispatch(editItem(id, item, category, quantity));
    },
    exitEditItemMode: () => {
      dispatch(exitEditItemMode());
    },
    fetchUserItems: () => {
      dispatch(userItemsFetchData());
    },
  };
};

const AddItem = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddItemForm);

export default AddItem;
