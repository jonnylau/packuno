const editItemMode = (state = {}, action) => {
  if (action.type === 'ENTER_EDIT_ITEM_MODE') {
    return {
      inEditMode: true,
      id: action.id,
    };
  }

  if (action.type === 'EXIT_EDIT_ITEM_MODE') {
    return {
      inEditMode: false,
      id: null,
    };
  }

  return state;
};

export default editItemMode;
