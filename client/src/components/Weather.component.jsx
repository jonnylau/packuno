import React from 'react';
import Historical from './Historical.jsx';
import PropTypes from 'prop-types';
import Forecast from './Forecast.component.jsx';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    width: 600,
  }),
});

const Weather = (props) => {

  const renderWeather = () => {
    if (props.weatherFilter === 'HISTORICAL') {
      return (<Historical weather={props.historical} />);
    }
    if (props.weatherFilter === 'SHOW_CURRENT') {
      return <Forecast weather={props.forecast} />;
    }
    return (<h2>Weather</h2>);
  };

  const { classes } = props;
  return (
    <Paper className={classes.root} elevation={4}>
      <h2>Weather</h2>
      {renderWeather()}
    </Paper>
    );
};

Weather.propTypes = {
  weatherFilter: PropTypes.string.isRequired,
  historical: PropTypes.arrayOf(PropTypes.string),
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Weather);

