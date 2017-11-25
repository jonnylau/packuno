import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { addTrip } from '../actions/trips.actions';
import { selectOldTrip } from '../actions/trips.actions';
import Dashboard from '../components/Dashboard.component';
import seedState from '../seedState';

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (destination, departureDate, returnDate) => {
      dispatch(addTrip(destination, departureDate, returnDate));
    },
    onSelect: (oldTripId) => {
      dispatch(selectOldTrip(oldTripId));
    },
  };
};



//get request for photos from Flickr
const newPhotos = (country, cb) => {
  const xhr = new XMLHttpRequest();
  if (!('withCredentials' in xhr)) {
    alert('Browser does not support CORS.');
    return;
  };

  xhr.open('GET', `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=59703335c51dcee9041f936cfa665b9f&tags=${country}, city, landmark&page=1&per_page=1&tag_mode=all`);

  xhr.onload = () => {
    const data = xhr.response;
    const photoid = data.substring(data.indexOf('photo id') + 10, data.indexOf('" owner'));
    const farmid = data.substring(data.indexOf('farm') + 6, data.indexOf('" title'));
    const serverid = data.substring(data.indexOf('server') + 8, data.indexOf('farm=') - 2);
    const secret = data.substring(data.indexOf('secret') + 8, data.indexOf(' server=') - 1);
    const url = `https://farm${farmid}.staticflickr.com/${serverid}/${photoid}_${secret}.jpg`;
    this.setState({images: url});
    cb(url);
  };

  xhr.send();
};

export class TripContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: seedState,
      pictures: [],
    };
  }

  componentDidMount() {
//Fetch old trip data from database

// fetchTrips() {
//   $.get('/alltrips', (err, data) => {
//    if (err) {
//      console.log('error fetching old trips', err);
//    }
//    console.log('success fetching old trips', data);
//    this.setState({data: data});
//   }, 'json');
// }

    this.state.data.trips.allIDs.forEach((element) => {
      this.newPhotos(this.state.data.trips.byID[element].destination, (data) => {
        const newArr = this.state.pictures;
        newArr[element] = data;
        this.setState({pictures: newArr});
      });
    });
  }

  render() {
    return (<Dashboard data= {this.state.data} pictures={this.state.pictures} />);
  }
}

const AddTripContainer = connect(null, mapDispatchToProps)(Dashboard);

export default AddTripContainer;