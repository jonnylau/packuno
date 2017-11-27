const $ = require('jquery');

// fetch old trip data from database;
const fetchTrips = () => {
  $.get('/alltrips', (err, data) => {
   if (err) {
     console.log('error fetching old trips', err);
   }
   console.log('success fetching old trips', data);
   this.setState({data: data});
  }, 'json');
};

export default fetchTrips;