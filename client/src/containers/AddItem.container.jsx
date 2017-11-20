import { connect } from 'react-redux';
import AddItemForm from '../components/AddItemForm.component.jsx';
import { addItem } from '../actions/home.actions.jsx';


const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (item, category) => {
      dispatch(addItem(item, category));
    },
  };
};

const AddItem = connect(null, mapDispatchToProps)(AddItemForm);

export default AddItem;
