import { connect } from 'react-redux';
import AddItemForm from '../components/AddItemForm.component';
import { addItem } from '../actions/packingList.actions';


const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (item, category) => {
      dispatch(addItem(item, category));
    },
  };
};

const AddItem = connect(null, mapDispatchToProps)(AddItemForm);

export default AddItem;
