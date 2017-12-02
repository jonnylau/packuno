const $ = require('jquery');

//send a post request to the server to submit destination, dep date and return date info

const submitPost = (destination, country, departureDate, returnDate) => {
  $.post('url of server', {
    destination: destination,
    country: country,
    departureDate: departureDate,
    returnDate: returnDate,
  },
  (err, data) => {
    if (err) {
      console.log('error fetching old trips', err);
    }
      console.log('success fetching old trips', data);
    }, 'json');
};

export default submitPost;