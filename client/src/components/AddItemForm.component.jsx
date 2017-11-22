import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class AddItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item_input: '',
      category_input: '',
    };
  }

  render() {
    const { classes } = this.props;
    const { item_input, category_input } = this.state;
    return (
      <div>
        <form
          onSubmit={() => this.props.onSubmit(item_input, category_input)}
          className={classes.container}
        >
          <TextField
            value={this.state.item_input}
            onChange={e => this.setState({ item_input: e.target.value })}
            label="Item"
            className="textField"
            margin="normal"
          />
          <TextField
            value={this.state.category_input}
            onChange={e => this.setState({ category_input: e.target.value })}
            label="Category"
            className={classes.textField}
            margin="normal"
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
  onSubmit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(AddItemForm);
