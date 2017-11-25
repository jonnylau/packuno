import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Promise from 'bluebird';
import Weather from '../components/Weather.component.jsx';
import { setHistoricalAsync as Historical, setForecastAsync as Forecast } from '../actions/weather.actions.jsx';

export class WeatherContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.Forecast();    
    this.props.Historical();
    console.log(store.getState());
    
  }

  renderComponents() {
    if (this.props.historical.length < 1 && this.props.forecast.length < 1) {
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

