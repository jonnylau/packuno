import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import isoCode from '/Users/luisalvarez/Desktop/Code/packuno/client/utils/weatherHelper.js';
import Promise from 'bluebird';
import Weather from '../components/Weather.component.jsx'


export class WeatherContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      historical: [],
      current: [],
      weatherFilter: 'HISTORICAL',
      tripStart: '20170827',
      tripEnd: '20170905',
    };
  }

  componentWillMount() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return isoCode('france').then((result) => {
      console.log(result);
      const startMonth = Number(this.state.tripStart.slice(4, 6)) - 1;
      const endMonth = Number(this.state.tripEnd.slice(4, 6)) - 1;
      const rendered = [[months[startMonth], result[startMonth]], [months[endMonth], result[endMonth]]];
      this.setState({
        historical: rendered,
      });
    });
  }

render() {
    return (<Weather weatherFilter={this.state.weatherFilter} historical={this.state.historical} current={this.state.current} />);
  }
}

const mapStateToProps = (state, ownProps) => {
  return { weatherFilter: state.weatherFilter, historial: state.historical, current: state.current };
};

const WeatherCont = connect(mapStateToProps, null)(WeatherContainer);

export default WeatherCont;

