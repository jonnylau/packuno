import React from 'react';
import FilterLink from '../containers/FilterLink.container.jsx';

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_UNPACKED">
      Unpacked
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_PACKED">
      Packed
    </FilterLink>
  </p>
);

export default Footer;
