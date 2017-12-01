import React, { Component } from 'react';
import { connect } from 'react-redux';

//mapStateToProps
class Vaccine extends Component{
	render() {
		return (
			<button>Check Vaccines</button>
			<div>
				{this.props.vaccines}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {vaccines: state.vaccines};
}

export default connect(mapStateToProps)(Vaccine);

