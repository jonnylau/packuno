const axios = require('axios');

// Get user's previous trips

export const tripsHasErrored = bool => ({
  type: 'TRIPS_HAS_ERRORED',
  hasErrored: bool,
});

export const tripsIsLoading = bool => ({
  type: 'TRIPS_IS_LOADING',
  isLoading: bool,
});

export const tripsFetchDataSuccess = trips => {
  console.log('in tripsFetchDataSuccess');
  return {
  type: 'TRIPS_FETCH_DATA_SUCCESS',
  trips,
}};


export const fetchPhotos = (trips) => {

  trips.allIds.forEach((tripId) => {
    // Make api call to get photo for destination (trips.byId[tripId].destination)
    // Once we get url, set it equal to photoUrl

    // return {
    //   type: 'UPDATE_PHOTO_URL',
    //   id: tripId,
    //   photoUrl,
    // };
  });
};


// Async action creator for fetching a users's trips

export const tripsFetchData = userId => (dispatch) => {
  dispatch(tripsIsLoading(true));

  axios.get(`/users/${userId}/trips`)
    .then((response) => {
      dispatch(tripsIsLoading(false));

      const trips = {
        byId: {},
        allIds: [],
      };

      response.data.forEach((trip) => {
        const { id, destination, start_date, end_date} = trip;

        trips.byId[id] = {
          id,
          destination,
          startDate: start_date,
          endDate: end_date,
          photoUrl: 'https://image.freepik.com/free-vector/realistic-airplane_23-2147518399.jpg',
        };

        trips.allIds.push(id);
      });

      dispatch(tripsFetchDataSuccess(trips));
      // dispatch(fetchPhotos(trips));
    })
    .catch(() => dispatch(tripsHasErrored(true)));
};


// Add trip

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
