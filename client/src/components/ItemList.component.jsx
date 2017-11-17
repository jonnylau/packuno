const ItemList = ({ packingItems, onItemClick }) => {
  if (packingItems.length === 0) {
    return <div>Add Items</div>
  }

  return (
    <ul>
      { packingItems.map( (item) => {
        <Item key={ item.id } {...item} onClick={ () => onItemClick(item.id) } />
      })}
    </ul>
  )

};

export default ItemList;