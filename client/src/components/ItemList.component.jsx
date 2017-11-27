import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import ItemsByCat from '../components/ItemsByCat.component';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
});

class ItemList extends React.Component {

  componentDidMount() {
    const { fetchItems, tripId } = this.props;
    fetchItems(tripId);
  }

  render() {
    const { items, categories, onItemClick, onDeleteClick, onEditClick, classes } = this.props;

    if (items.length === 0) {
      return <div>Add Items</div>;
    }

    return (
      <div className={classes.root}>
        <List dense={true} disablePadding={true} >
          {categories.map(category => (
            <ItemsByCat
              category={category}
              items={items}
              onItemClick={onItemClick}
              onDeleteClick={onDeleteClick}
              onEditClick={onEditClick}
            />
          ))}
        </List>
      </div>
    );
  }
}


ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      packed: PropTypes.bool.isRequired,
      item: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      quantity: PropTypes.number,
      itemId: PropTypes.number,
    })).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  tripId: PropTypes.number.isRequired,
  onItemClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  fetchItems: PropTypes.func.isRequired,
};

export default withStyles(styles)(ItemList);

