import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

class CurrentTrip extends Component {
	
	render(){
		console.log('CHECK REDUX STATE', this.props.trips[this.props.currentTrip]);
		let currentCity = this.props.trips[this.props.currentTrip].destination;
		let departureDate = moment(this.props.trips[this.props.currentTrip].startDate).format('l');
		let returnDate = moment(this.props.trips[this.props.currentTrip].endDate).format('l');
		return (
			<div>
				<div class='Destination Intro'>
					{`${currentCity}`}
				</div> 
				<div>
					{`${departureDate} to ${returnDate}`}
				</div>
			</div>
		)
	}
}


function mapStateToProps(state) {
	return {
		currentTrip: state.currentTripId,
		trips: state.trips.byId,
	};
};

export default connect(mapStateToProps)(CurrentTrip);