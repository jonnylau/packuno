const defaultState = {
  byID: {},
  allIDs: [],
};

const trips = (state = defaultState, action) => {
  if (action.type === 'ADD_TRIP') {
    return {
      ...state,
      byID: {
        ...state.byID,
        [action.id]: {
          id: action.id,
          destination: action.destination,
          departureDate: action.departureDate,
          returnDate: action.returnDate,
        },
      },
      allIDs: [...state.allIDs, action.id],
    };
  } else if (action.type === 'SELECT_TRIP') {
    return {
      ...state,
      oldTripId: action.id,
    };
  }
  return state;
};

export default trips;
