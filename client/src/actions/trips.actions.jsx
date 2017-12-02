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

export const tripsFetchDataSuccess = trips => ({
  type: 'TRIPS_FETCH_DATA_SUCCESS',
  trips,
});


// Can use flickr api to get photos for locations, didn't have time to get it working


// export const fetchPhotos = (trips) => {
//   trips.allIds.forEach((tripId) => {
//     // const config = {
//     //   headers: { 'X-Requested-With': 'XMLHttpRequest' },
//     // };
      
//     axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=59703335c51dcee9041f936cfa665b9f&tags=${trips.byId[tripId].destination}, city, landmark&page=1&per_page=1&tag_mode=all`)
//       .then((data) => {
//         const photoid = data.substring(data.indexOf('photo id') + 10, data.indexOf('" owner'));
//         const farmid = data.substring(data.indexOf('farm') + 6, data.indexOf('" title'));
//         const serverid = data.substring(data.indexOf('server') + 8, data.indexOf('farm=') - 2);
//         const secret = data.substring(data.indexOf('secret') + 8, data.indexOf(' server=') - 1);
//         const photoUrl = `https://farm${farmid}.staticflickr.com/${serverid}/${photoid}_${secret}.jpg`;
//         console.log('photoUrl', photoUrl);
//         return {
//           type: 'UPDATE_PHOTO_URL',
//           id: tripId,
//           photoUrl,
//         };
//       })
//       .catch((err) => {
//         console.log('Error in fetching photos', err);
//       });
//   });
// };


// Async action creator for fetching a users's trips

export const tripsFetchData = (userId) => (dispatch) => {

  dispatch(tripsIsLoading(true));

  axios.get(`/users/${userId}/trips`)
    .then((response) => {
      dispatch(tripsIsLoading(false));

      const trips = {
        byId: {},
        allIds: [],
      };

      response.data.forEach((trip) => {
        const { id, destination, country, start_date, end_date } = trip;

        trips.byId[id] = {
          id,
          destination,
          country,
          startDate: start_date,
          endDate: end_date,
          photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Whitsunday_Island_-_Whitehaven_Beach_05.jpg/1280px-Whitsunday_Island_-_Whitehaven_Beach_05.jpg',
        };

        trips.allIds.push(id);
      });

      dispatch(tripsFetchDataSuccess(trips));
      // dispatch(fetchPhotos(trips));
    })
    .catch(() => dispatch(tripsHasErrored(true)));
};


// Add trip

export const addTrip = (destination, country, startDate, endDate, oldTripId, userId) => (dispatch) => {
  axios.post('/trips', {
    destination,
    country,
    start_date: startDate,
    end_date: endDate,
    userId,
  })
    .then((response) => {
      dispatch({
        type: 'ADD_TRIP_SUCCESS',
        id: response.data.id,
        destination,
        country,
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

// Update current trip

export const updateCurrentTrip = tripId => ({
  type: 'UPDATE_CURRENT_TRIP',
  tripId,
});
