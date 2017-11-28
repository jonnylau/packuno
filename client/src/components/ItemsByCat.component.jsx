import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import ListSubheader from 'material-ui/List/ListSubheader';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';

const ItemsByCat = ({ items, category, onItemClick, onDeleteClick, onEditClick, classes }) => {

  const catItems = items.filter(item => item.category === category);

  if (catItems.length > 0) {
    return (
      <div>
        <ListSubheader disableSticky={true} >{category}</ListSubheader>
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
            <ListItemText primary={(item.quantity) ? `${item.quantity} ${item.item}` : item.item} />
            <ListItemSecondaryAction >
            <IconButton
                aria-label="Edit"
                onClick={() => onEditClick(item.id)}
              >
                <EditIcon />
              </IconButton>
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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      packed: PropTypes.bool.isRequired,
      item: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      quantity: PropTypes.number,
    })).isRequired,
  category: PropTypes.string.isRequired,
  onItemClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
};


export default withStyles()(ItemsByCat);
