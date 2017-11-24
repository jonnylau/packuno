import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import ItemsByCat from '../components/ItemsByCat.component';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
});

const ItemList = ({ items, categories, onItemClick, onDeleteClick, classes }) => {

  if (items.length === 0) {
    return <div>Add Items</div>;
  }

  return (
    <div className={classes.root}>
      <List dense={true} disablePadding={true} >
        {categories.map(cat => (
          <ItemsByCat
            category={cat}
            items={items}
            onItemClick={onItemClick}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </List>
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      packed: PropTypes.bool.isRequired,
      item: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onItemClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(ItemList);

