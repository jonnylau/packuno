import React from 'react'


const AddItemForm = ({ onSubmit }) => {

  let item_input;
  let category_input;

  return (
    <div>
      <form onSubmit={(e) => { onSubmit(item_input.value, category_input.value);}} >
        <label>Item</label>
        <input type="text" ref={(input) => {this.item_input = input;}} />
        <label>Category</label>
        <input type="text" ref={(input) => {this.category_input = input;}} />
        <button></button>
      </form>
    </div>
  )

};


export default AddItemForm;