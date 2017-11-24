export const enterEditItemMode = (id) => {
  return {
    type: 'ENTER_EDIT_ITEM_MODE',
    id,
  };
};

export const exitEditItemMode = () => {
  return {
    type: 'EXIT_EDIT_ITEM_MODE',
  };
};
