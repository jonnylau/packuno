import React from 'react'

import AddItemForm from '../components/AddItemForm.component.jsx'

import { connect } from 'react-redux'
import { addItem } from '../actions/home.actions.jsx'

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (item, category) => {
      dispatch(addItem(item, category));
    }
  }
}

let AddItem = connect(null, mapDispatchToProps)(AddItemForm)

export default AddItem