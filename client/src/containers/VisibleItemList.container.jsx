import { connect } from 'react-redux'
import { togglePacked } from '../actions'
import ItemList from '../components/ItemList.component'

const getVisibleItems = (items, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return items
    case 'SHOW_PACKED':
      return items.filter(t => t.packed)
    case 'SHOW_UNPACKED':
      return items.filter(t => !t.packed)
  }
}

const mapStateToProps = (state) => {
  return {
    items: getVisibleItems(state.items, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onItemClick: (id) => {
      dispatch(togglePacked(id))
    }
  }
}

const VisibleItemList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)

export default VisibleItemList;