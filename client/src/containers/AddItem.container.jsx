import { connect } from 'react-redux';
import AddItemForm from '../components/AddItemForm.component';
import { addItem, editItem } from '../actions/items.actions';
import { exitEditItemMode } from '../actions/editMode.actions';

const getItemToEdit = (state) => {

  if (state.editItemMode.inEditMode) {
    return state.items.byId[state.editItemMode.id];
  }

  return null;
};


const mapStateToProps = (state) => {
  return {
    pastItemsWCat: state.items.pastItemsWCat,
    categories: state.items.categories,
    itemToEdit: getItemToEdit(state),
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
  };
};

const AddItem = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddItemForm);

export default AddItem;
