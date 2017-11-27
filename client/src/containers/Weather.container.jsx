import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Promise from 'bluebird';
import Weather from '../components/Weather.component';
import { setHistoricalAsync as Historical, setForecastAsync as Forecast } from '../actions/weather.actions';

export class WeatherContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.Forecast();    
    this.props.Historical();
  }

  renderComponents() {
    if (this.props.historical === undefined && this.props.forecast === undefined) {
      return (<div>Loading</div>);
    }
    return (<Weather weatherFilter={this.props.weatherFilter} historical={this.props.historical} forecast={this.props.forecast}/>);
  }

  render() {
    return (<div>{this.renderComponents()}</div>);
  }
}

const mapStateToProps = (state, ownProps) => ({ weatherFilter: state.weatherWidget, historical: state.setHistorical, forecast: state.setForecast });

const mapDispatchToProps = (dispatch, ownProps) => ({
  Historical: () => {
    dispatch(Historical());
  },
  Forecast: () => {
    dispatch(Forecast());
  },
});

const WeatherCont = connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);
export default WeatherCont;

