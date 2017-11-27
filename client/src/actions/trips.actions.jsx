const axios = require('axios');

// Get user's previous trips

// export const tripsHasErrored = bool => ({
//   type: 'TRIPS_HAS_ERRORED',
//   hasErrored: bool,
// });

// export const tripsIsLoading = bool => ({
//   type: 'TRIPS_IS_LOADING',
//   isLoading: bool,
// });

// export const itemsFetchDataSuccess = (data) => {
//   const items = {
//     byId: {},
//     allIds: [],
//     categories: [],
//   };

//   data.forEach((tripItem) => {
//     const { id, Item, packed, quantity, itemId } = tripItem;

//     items.byId[id] = {
//       id,
//       item: Item.item,
//       category: Item.category,
//       quantity,
//       packed,
//       itemId,
//     };

//     items.allIds.push(id);
//     if (!items.categories.includes(Item.category)) {
//       items.categories.push(Item.category);
//     }
//   });

//   return {
//     type: 'ITEMS_FETCH_DATA_SUCCESS',
//     items,
//   };
// };

// export const itemsFetchData = tripId => (dispatch) => {
//   dispatch(itemsIsLoading(true));

//   axios.get(`/trips/${tripId}/items`)
//     .then((response) => {
//       dispatch(itemsIsLoading(false));
//       dispatch(itemsFetchDataSuccess(response.data));
//     })
//     .catch(() => dispatch(itemsHasErrored(true)));
// };







export const addTrip = (destination, startDate, endDate, oldTripId, userId) => (dispatch) => {
  axios.post('/trips', {
    destination,
    start_date: startDate,
    end_date: endDate,
    userId,
  })
    .then((response) => {
      dispatch({
        type: 'ADD_TRIP_SUCCESS',
        id: response.data.id,
        destination,
        startDate,
        endDate,
        oldTripId,
        userId,
      });

      if (oldTripId) {
        axios.post('/trips/items', {
          tripId: response.data.id,
          oldTripId,
        })
          .catch(err => console.log(err));
      }
    });
};

// export const selectOldTrip = (oldTripId) => {
//   return {
//     type: 'SELECT_TRIP',
//     oldTripId: oldTripId,
//   };
// };
