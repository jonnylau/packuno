// import React from 'react';
// import $ from 'jquery';
// import Moment from 'moment';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import seedState from '../seedState.js';

// const handleClick = () => {
//   document.getElementById("sidebar").style.display = "none";
//   document.getElementById("content").style.marginLeft = "0%";
//   document.getElementById("openButton").innerHTML = "&equiv;";
// };

// const handleOpen = () => {
//   document.getElementById("sidebar").style.display = "block";
//   document.getElementById("content").style.marginLeft = "25%";
//   document.getElementById("openButton").innerHTML = "";
// };

// const now = Moment();

// class Dashboard extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       data: seedState,
//       pictures: [],
//       destination: '',
//       departureDate: '',
//       returnDate: '',
//       oldTripID: '',
//       oldTripSelected: false,
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   componentDidMount() {
//     this.state.data.trips.allIDs.forEach((element) => {
//       this.newPhotos(this.state.data.trips.byID[element].destination, (data) => {
//         const newArr = this.state.pictures;
//         newArr[element] = data;
//         this.setState({pictures: newArr});
//       });
//     });
//   }

//   handleChange(key) {
//     return function (e) {
//       var state = {};
//       state[key] = e.target.value;
//       this.setState(state);
//     }.bind(this);
//   }

//   handleSubmit(event) {
//     console.log('Destination', this.state.destination, 'Departure Date', this.state.departureDate, 'Return Date', this.state.returnDate, 'ID of Old Trip Selected', this.state.oldTripID);
//     //send a post request to the server to submit the above information
//     //$.post('url of server', {
//     //  destination: this.state.destination,
//     //  departureDate: this.state.departureDate,
//     //  returnDate: this.state.returnDate },
//     //  (err, data) => {
//     //  if (err) {
//     //    console.log('error fetching old trips', err);
//     //  }
//     //  console.log('success fetching old trips', data);
//     //  }, 'json')
//   }

//   identifyPicture(key, event){
//     this.setState({oldTripID: key});
//     if (this.state.oldTripSelected) {
//       event.target.style.background = 'Transparent';
//       console.log('CLICKED', event.target);
//     } else {
//       event.target.style.background = 'grey';
//     }
//     this.setState({oldTripSelected: !this.state.oldTripSelected});
//   }

//   onHover(event){
//     if(this.state.oldTripSelected === false) {
//       event.target.style.background = 'grey';
//     }
//   }

//   offHover(event){
//     if(this.state.oldTripSelected === false) {
//       event.target.style.background = 'Transparent';
//     }
//   }

//   newPhotos(country, cb) {
//     const xhr = new XMLHttpRequest();
//     if (!('withCredentials' in xhr)) {
//       alert('Browser does not support CORS.');
//       return;
//     };

//     xhr.open('GET', `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=59703335c51dcee9041f936cfa665b9f&tags=${country}, city, landmark&page=1&per_page=1&tag_mode=all`);

//     xhr.onload = () => {
//       const data = xhr.response;
//       const photoid = data.substring(data.indexOf('photo id') + 10, data.indexOf('" owner'));
//       const farmid = data.substring(data.indexOf('farm') + 6, data.indexOf('" title'));
//       const serverid = data.substring(data.indexOf('server') + 8, data.indexOf('farm=') - 2);
//       const secret = data.substring(data.indexOf('secret') + 8, data.indexOf(' server=') - 1);
//       const url = `https://farm${farmid}.staticflickr.com/${serverid}/${photoid}_${secret}.jpg`;
//       this.setState({images: url});
//       cb(url);
//     };

//     xhr.send();
//   };

//   //fetch old trip data from database;
//   // fetchTrips() {
//     // $.get('/alltrips', (err, data) => {
//     //  if (err) {
//     //    console.log('error fetching old trips', err);
//     //  }
//     //  console.log('success fetching old trips', data);
//     //  this.setState({data: data});
//     // }, 'json');
//   // }

//   render() {
//     return (
//       <div>
//         <div id="sidebar">
//           <button id="closeButton" onClick={handleClick}>&equiv;</button>
//           <h1> Packuno </h1>
//           <br />
//           <h2> Upcoming Trips </h2>
//           <div id="upcoming">
//             <ul>
//               {this.state.data.trips.allIDs.map (element => {
//               const dateLimit = Moment(this.state.data.trips.byID[element].returnDate);
//               if (this.state.data.trips.byID[element].returnDate
//                 != null && now.isBefore(dateLimit)) {
//                 return (<li key={this.state.data.trips.byID[element].id}>
//                   {this.state.data.trips.byID[element].destination}
//                   <br />
//                   From: {this.state.data.trips.byID[element].departureDate}
//                   <br />
//                   To: {this.state.data.trips.byID[element].returnDate}
//                   <br /></li>
//                   );
//               }
//               },
//               )}
//             </ul>
//           </div>
//         </div>
//         <div id="content">
//           <button id="openButton" onClick={handleOpen} />
//           <h1> Create New Trip </h1>
//           <br />
//           1. <input type="text" className="destination" placeholder="Enter destination" value={this.state.destination} onChange={this.handleChange('destination')}/>
//           <br /><br />
//           2. <input type="date" className="departureDate" value={this.state.departureDate}  onChange={this.handleChange('departureDate')}/>
//           <text> to </text>
//           <input type="date" className="returnDate" value={this.state.returnDate} onChange={this.handleChange('returnDate')}/>
//           <br /><br />
//           3. Copy Packing List from Past Trips
//           <br /><br />
//           <div id="menu">
//             <ul>
//               {this.state.data.trips.allIDs.map (element => {
//               const dateLimit = Moment(this.state.data.trips.byID[element].returnDate);
//               if (this.state.data.trips.byID[element].returnDate != null && now.isAfter(dateLimit)) {
//                 return <li onClick={()=>this.identifyPicture(element, event)} onMouseEnter={this.onHover.bind(this)} onMouseLeave={this.offHover.bind(this)}><a href="#" value={element}>
//                   <img key={element} src={this.state.pictures[element]} className="image" />
//                   <br /><br />
//                   {this.state.data.trips.byID[element].destination}
//                   <br /><br />
//                   From: {this.state.data.trips.byID[element].departureDate}
//                   <br /><br />
//                   To: {this.state.data.trips.byID[element].returnDate}
//                   </a></li>;
//                 }
//               }
//             )}
//            <li onMouseEnter={this.onHover.bind(this)} onMouseLeave={this.offHover.bind(this)} onClick={()=>this.identifyPicture(0, event)}><a href="#"> <br /> (None) <br /><br /></a></li>
//             </ul>
//           </div>
//           <br /><br />
//           <Link to="/trip"><button type="submit" className="submitButton" onClick={this.handleSubmit}> Create Trip </button></Link>
//           <br /><br /><br /><br />
//         </div>
//       </div>
//     );
//   }
// }

// export default Dashboard;