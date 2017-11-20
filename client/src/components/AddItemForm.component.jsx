import React, { PropTypes } from 'react';


class AddItemForm extends React.Component {
  constructor(props) {    super(props);
    this.state = {
      item_input: '',
      category_input: '',
    };
  }

  render() {
    const { item_input, category_input } = this.state;
    return (
      <div>
        <form onSubmit={() => this.props.onSubmit(item_input, category_input)} >
          <label>Item</label>
          <input type="text" value={this.state.item_input} onChange={e => this.setState({ item_input: e.target.value })} />
          <label>Category</label>
          <input type="text" value={this.state.category_input} onChange={e => this.setState({ category_input: e.target.value })} />
          <button>Add</button>
         </form>
      </div>
    );
  }
}

// AddItemForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };


// const AddItemForm = ({ onSubmit }) => {

//   let item_input = '';
//   let category_input = '';

//   return (
//     <div>
//       <form onSubmit={(e) => { onSubmit(item_input.value, category_input.value);}} >
//         <label>Item</label>
//         <input type="text" ref={input => this.item_input = input} />
//         <label>Category</label>
//         <input type="text" ref={input => this.category_input = input} />
//         <button></button>
//       </form>
//     </div>
//   );
// };


export default AddItemForm;
