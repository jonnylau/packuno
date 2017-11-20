import React from 'react';
import PropTypes from 'prop-types';
import Item from '../components/Item.component.jsx';

const ItemList = ({ items, onItemClick }) => {
  // if (items.length === 0) {
  //   return <div>Add Items</div>;
  // }

  return (
    <ul>
      { items.map(item => (
        <Item key={item.id} item={item.item} category={item.category} packed={item.packed} onClick={() => onItemClick(item.id)} />
      ))}
    </ul>
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
  onItemClick: PropTypes.func.isRequired,
};

export default ItemList;
