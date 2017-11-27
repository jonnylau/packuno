export const tripsHasErrored = (state = false, action) => {
  if (action.type === 'TRIPS_HAS_ERRORED') {
    return action.hasErrored;
  }
  return state;
};

export const tripsIsLoading = (state = false, action) => {
  if (action.type === 'ITEMS_IS_LOADING') {
    return action.isLoading;
  }
  return state;
};

const defaultState = {
  byId: {},
  allIds: [],
};

export const currentTripId = (state = null, action) => {
  if (action.type === 'ADD_TRIP_SUCCESS') {
    return action.id;
  }

  if (action.type === 'UPDATE_CURRENT_TRIP') {
    return action.tripId;
  }
  return state;
};


export const trips = (state = defaultState, action) => {
  if (action.type === 'TRIPS_FETCH_DATA_SUCCESS') {
    return action.trips;
  }

  if (action.type === 'ADD_TRIP_SUCCESS') {
    const { id, destination, startDate, endDate } = action;
    return {
      ...state,
      byId: {
        ...state.byId,
        [id]: {
          id,
          destination,
          startDate,
          endDate,
        },
      },
      allIds: [...state.allIds, id],
    };
  }

  if (action.type === 'UPDATE_PHOTO_URL') {
    const { id, photoUrl } = action;
    return {
      ...state,
      byId: {
        ...state.byId,
        [id]: {
          ...state.byId[id],
          photoUrl,
        },
      },
    };
  }

  return state;
};

