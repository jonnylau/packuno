import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Paper from 'material-ui/Paper';
import Footer from '../components/Footer.component';
import AddItem from '../containers/AddItem.container';
import VisibleItemList from '../containers/VisibleItemList.container';
import WeatherCont from '../containers/Weather.container';
import CurrentTrip from '../containers/CurrentTrip.container'; //why does this work.  I didn't export CurrentTrip          
import Vaccines from '../containers/Vaccines.container';
import VisaInfo from '../containers/VisaInfo.container';


const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    width: 600,
  }),
});


const Trip = (props) => {

  const { classes } = props;

  return (
  <div>
    <Paper className={classes.root} elevation={4}>
<<<<<<< HEAD
<<<<<<< HEAD
      <CurrentTrip />
      <VisaInfo />
      <Vaccines />
=======
      <CurrentTrip/>
>>>>>>> Added moment.js formatting for dates
=======
      <CurrentTrip />
      <Vaccines />
>>>>>>> Added card: pulling the correct vaccine information
      <AddItem />
      <VisibleItemList />
      <Footer />
    </Paper>
    <WeatherCont />
  </div>
)};

Trip.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Trip);

