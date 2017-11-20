import React from 'react';
import ReactDOM from 'react-dom';
import isoCode from '../utils/weatherHelper.js';
import Historical from './components/Historical.jsx';
import Promise from 'bluebird';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      historical: [],
      filter: 'HISTORICAL',
      tripStart: '20170827',
      tripEnd: '20170905',
    };
  }
  componentDidMount() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return isoCode('france').then((result) => {
      const startMonth = Number(this.state.tripStart.slice(4, 6)) - 1;
      const endMonth = Number(this.state.tripEnd.slice(4, 6)) - 1;
      const rendered = [[months[startMonth], result[startMonth]], [months[endMonth], result[endMonth]]];
      this.setState({
        historical: rendered,
      });
    });
  }

  renderWeather() {
    if (this.state.filter === 'HISTORICAL') {
      return <Historical weather={this.state.historical} />;
    }
  }
  render() {
    return (
      <div>
        {this.renderWeather()}
      </div>
    );
  }
}

ReactDOM.render(<Weather />, document.getElementById('home'));

