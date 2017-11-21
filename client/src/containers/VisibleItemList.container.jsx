import React from 'react';
import { connect } from 'react-redux';
import { togglePacked } from '../actions/items.actions';
import ItemList from '../components/ItemList.component';

const getVisibleItems = (items, filter) => {
  if (filter === 'SHOW_ALL') {
    return items;
  }
  if (filter === 'SHOW_PACKED') {
    return items.filter(item => item.packed);
  }
  if (filter === 'SHOW_UNPACKED') {
    return items.filter(item => !item.packed);
  }
  return items;
};

const mapStateToProps = (state) => {
  return {
    items: getVisibleItems(
      state.items.allIds.map(id => state.items.byId[id]),
      state.visibilityFilter,
    ),
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
