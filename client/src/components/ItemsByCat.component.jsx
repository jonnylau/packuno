import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import ListSubheader from 'material-ui/List/ListSubheader';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';

const ItemsByCat = ({ items, category, onItemClick, onDeleteClick, classes }) => {

  const catItems = items.filter(item => item.category === category);

  if (catItems.length > 0) {
    return (
      <div>
        <ListSubheader>{category}</ListSubheader>
        {catItems.map(item => (
          <ListItem
            key={item.id}
            dense={true}
            button
            disableRipple
            onClick={() => onItemClick(item.id)}
            className={classes.listItem}
          >
            <Checkbox
              checked={item.packed}
              disableRipple
            />
            <ListItemText primary={item.item} />
            <ListItemSecondaryAction >
              <IconButton
                aria-label="Delete"
                onClick={() => onDeleteClick(item.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          ))}
      </div>
    );
  }
  return null;
};

ItemsByCat.propTypes = {
  items: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  onItemClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};


export default withStyles()(ItemsByCat);
