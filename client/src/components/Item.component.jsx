import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

const Item = ({ onClick, item, category, packed, classes }) => (
  <ListItem
    key={item}
    dense={true}
    button
    disableRipple
    onClick={onClick}
    className={classes.listItem}
  >
    <Checkbox
      checked={packed}
      disableRipple
    />
    <ListItemText primary={`${item}, ${category}`} />
  </ListItem>
);

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  packed: PropTypes.bool.isRequired,
  item: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default withStyles()(Item);
