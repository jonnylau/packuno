import React from 'react'

const ItemList = ({ items, onItemClick }) => {
  if (items.length === 0) {
    return <div>Add Items</div>
  }

  return (
    <ul>
      { items.map( (item) => {
        <Item key={ item.id } {...item} onClick={ () => onItemClick(item.id) } />
      })}
    </ul>
  )

};

export default ItemList;