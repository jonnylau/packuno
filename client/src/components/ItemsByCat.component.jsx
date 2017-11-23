import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import ListSubheader from 'material-ui/List/ListSubheader';
import Checkbox from 'material-ui/Checkbox';

const ItemsByCat = ({ onItemClick, items, category, classes }) => {

  const catItems = items.filter(item => item.category === category);

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
        </ListItem>
        ))}
    </div>
  );
};

ItemsByCat.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
};


export default withStyles()(ItemsByCat);
