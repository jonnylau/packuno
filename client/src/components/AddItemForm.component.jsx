import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { MenuItem } from 'material-ui/Menu';
import AutocompleteField from '../components/AutocompleteField.component';
import CategoryDropdown from '../components/CategoryDropdown.component';


const styles = theme => ({
  container: {
    width: 600,
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 70,
    marginRight: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class AddItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemInput: '',
      categoryInput: '',
      quantityInput: 0,
    };
  }

  componentDidMount = () => {
    this.props.fetchUserItems(this.props.userId);
  }

  componentWillReceiveProps = (nextProps) => {
    const { itemToEdit } = nextProps;

    if (itemToEdit) {
      this.setState({
        itemInput: itemToEdit.item,
        categoryInput: itemToEdit.category,
        quantityInput: itemToEdit.quantity,
      });
    }
  }


  onFormSubmit = (e) => {
    const { itemInput, categoryInput, quantityInput } = this.state;
    const { onSubmit, onEditSubmit, exitEditItemMode, itemToEdit, tripId, userId } = this.props;
    e.preventDefault();

    if (itemToEdit) {
      onEditSubmit(itemToEdit.id, itemInput, categoryInput, quantityInput, itemToEdit.itemId);
      exitEditItemMode();
    } else {
      onSubmit(itemInput, categoryInput, quantityInput || null, tripId, userId);
    }

    this.setState({
      itemInput: '',
      categoryInput: '',
      quantityInput: 0,
    });
  }

  handleItemInputChange = (value) => {
    this.setState({
      itemInput: value,
      categoryInput: this.props.userItems[value] || '',
    });
  }

  handleCategoryInputChange = (value) => {
    this.setState({
      categoryInput: value,
    });
  }

  handleQuantityInputChange = (e) => {
    this.setState({
      quantityInput: e.target.value * 1,
    });
  }


  render() {
    const { userItems, classes, itemToEdit } = this.props;
    const { itemInput, categoryInput, quantityInput } = this.state;

    return (

      <div>
        <form
          onSubmit={this.onFormSubmit}
          className={classes.container}
        >
          <TextField
            id="number"
            type="number"
            value={quantityInput || ''}
            placeholder="Number"
            onChange={this.handleQuantityInputChange}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <AutocompleteField
            placeholderText="Item"
            suggestions={Object.keys(userItems)}
            updateInput={this.handleItemInputChange}
            defaultVal={itemInput}
          />
          <CategoryDropdown
            placeholderText="Category"
            updateInput={this.handleCategoryInputChange}
            defaultVal={categoryInput}
          />
          <Button color="primary" type="submit" className={classes.button}>
            { (itemToEdit) ? 'Save' : 'Add' }
          </Button>
        </form>
      </div>
    );
  }
}


AddItemForm.propTypes = {
  userItems: PropTypes.object.isRequired,
  itemToEdit: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onEditSubmit: PropTypes.func.isRequired,
  exitEditItemMode: PropTypes.func.isRequired,
  fetchUserItems: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  tripId: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(AddItemForm);
