import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';

const categories = require('../../../data/categories.json');


// STYLES
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

// PRIMARY COMPONENT

class CategoryDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.updateInput(event.target.value);
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="categoryDropdown">Category</InputLabel>
          <Select
            displayEmpty
            input={<Input name="category" id="categoryDropdown" />}
            value={this.state.value}
            onChange={this.handleChange}
          >
            {categories.data.map((category) => {
              return (
                <MenuItem
                  key={category.id}
                  value={category.name}
                >
                  {category.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </form>
    );
  }
}


CategoryDropdown.propTypes = {
  classes: PropTypes.object,
  updateInput: PropTypes.func.isRequired,
};


export default withStyles(styles)(CategoryDropdown);

