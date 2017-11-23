import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import { MenuItem } from 'material-ui/Menu';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import AutocompleteField from '../components/AutocompleteField.component';


const styles = theme => ({
  container: {
    width: 500,
    display: 'flex',
    flexWrap: 'wrap',
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
    };
  }

  handleItemInputChange = (value) => {
    this.setState({
      itemInput: value,
      categoryInput: this.props.pastItemsWCat[value] || '',
    });
  }

  handleCategoryInputChange = (value) => {
    this.setState({
      categoryInput: value,
    });
  }

  render() {
    const { pastItemsWCat, categories, classes } = this.props;
    const { itemInput, categoryInput } = this.state;
    return (
      <div>
        <form
          onSubmit={() => this.props.onSubmit(itemInput, categoryInput)}
          className={classes.container}
        >
          <AutocompleteField
            placeholderText="Item"
            suggestions={Object.keys(pastItemsWCat)}
            updateInput={this.handleItemInputChange}
            defaultVal={itemInput}
          />
          <AutocompleteField
            placeholderText="Category"
            suggestions={categories}
            updateInput={this.handleCategoryInputChange}
            defaultVal={categoryInput}
          />
          <Button color="primary" type="submit" className={classes.button}>
            Add
          </Button>
        </form>
      </div>
    );
  }
}


AddItemForm.propTypes = {
  pastItemsWCat: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(AddItemForm);
