import AddItemForm from '../components/AddItemForm.component'

import { connect } from 'react-redux'
import { addItem } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (item, category) => {
      dispatch(addItem(item, category));
    }
  }
}

let AddItem = connect(null, mapDispatchToProps)(AddItemForm)

export default AddItem