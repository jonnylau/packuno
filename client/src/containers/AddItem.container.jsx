import { connect } from 'react-redux';
import AddItemForm from '../components/AddItemForm.component';
import { addItem } from '../actions/items.actions';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';


const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (item, category) => {
      dispatch(addItem(item, category));
    },
  };
};

const AddItem = connect(null, mapDispatchToProps)(AddItemForm);

export default AddItem;
