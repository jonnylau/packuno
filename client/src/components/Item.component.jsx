import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ onClick, item, category, packed }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: packed ? 'line-through' : 'none',
    }}
  >
    {item}, {category}
  </li>
);

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  packed: PropTypes.bool.isRequired,
  item: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Item;
