import { connect } from 'react-redux';
import AddItemForm from '../components/AddItemForm.component';
import { addItem } from '../actions/items.actions';


const mapStateToProps = (state) => {
  return {
    pastItemsWCat: state.items.pastItemsWCat,
    categories: state.items.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (item, category, quantity) => {
      dispatch(addItem(item, category, quantity));
    },
  };
};

const AddItem = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddItemForm);

export default AddItem;
