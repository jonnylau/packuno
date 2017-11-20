import React from 'react';
import { connect } from 'react-redux';
import { togglePacked } from '../actions/home.actions.jsx';
import ItemList from '../components/ItemList.component.jsx';

const getVisibleItems = (items = [], filter = 'SHOW_ALL') => {
  if (filter === 'SHOW_ALL') {
    return items;
  }
  if (filter === 'SHOW_PACKED') {
    return items.filter(item => item.packed);
  }
  if (filter === 'SHOW_UNPACKED') {
    return items.filter(item => !item.packed);
  }
};

const mapStateToProps = (state) => {
  return {
    items: getVisibleItems(state.items, state.visibilityFilter),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onItemClick: (id) => {
      dispatch(togglePacked(id));
    },
  };
};

const VisibleItemList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemList);

export default VisibleItemList;
