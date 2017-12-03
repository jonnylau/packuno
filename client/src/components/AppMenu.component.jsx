import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import moment from 'moment';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import { MenuItem } from 'material-ui/Menu';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import Trip from '../components/Trip.component';
import Dashboard from '../components/Dashboard.component';
import App from '../components/App.components';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    minHeight: 800,
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    color: 'white',
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'appBarShift-left': {
    marginLeft: drawerWidth,
  },
  'appBarShift-right': {
    marginRight: drawerWidth,
  },
  menuButton: {
    color: 'white',
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      content: {
        height: 'calc(100% - 64px)',
        marginTop: 64,
      },
    },
  },
  'content-left': {
    marginLeft: -drawerWidth,
  },
  'content-right': {
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0,
  },
  'contentShift-right': {
    marginRight: 0,
  },
  upcomingTripsContainer: {
    padding: 10,
  },
  tripBox: {
    width: 140,
    height: 210,
    margin: 5,
    padding: 10,
    textAlign: 'center',
    '&:hover': {
      background: '#eeeeee',
    },
  },
  selectedTripBox: {
    width: 80,
    height: 150,
    margin: 5,
    padding: 10,
    textAlign: 'center',
    background: '#eeeeee',
  },
  photo: {
    width: 60,
    height: 60,
    overflow: 'hidden',
    borderRadius: '50%',
  },
  tripDetail: {
    margin: 0,
    lineHeight: '16px',
  },
  saveButton: {
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    margin: 10,
  },
});

class AppMenu extends React.Component {
  state = {
    open: false,
  };
  
  UpcomingTrips = () => {
    const { trips, isLoggedIn, onTripClick, classes } = this.props;
    if (isLoggedIn && trips.allIds.length > 0) {
      return (
        <div className={classes.upcomingTripsContainer}>
          <h3>Upcoming trips</h3>
          {trips.allIds.map(tripId => (
            <div
              key={tripId}
              onClick={() => this.handleTripClick(tripId)}
              className={classes.tripBox}
            >
              <img src={ trips.byId[tripId].photoUrl} className={classes.photo} />
              <h4>{ trips.byId[tripId].destination }</h4>
              <span>{moment(trips.byId[tripId].startDate).format('MMMM YYYY')}</span>
            </div>
            ))}
        </div>
      );
    }

    return null;
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleTripClick = (tripId) => {
    this.props.onTripClick(tripId);
  };



  render = () => {
    const { classes, theme } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
              [classes[`appBarShift-left`]]: open,
            })}
          >
            <Toolbar disableGutters={!open}>
              <IconButton
                color="contrast"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit" noWrap>
                Packuno
              </Typography>
            </Toolbar>
          </AppBar>
           <Drawer
            type="persistent"
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor='left'
            open={open}
          >
            <div className={classes.drawerInner}>
              <div className={classes.drawerHeader}>
                <IconButton onClick={this.handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
              </div>
              <Divider />
              <div className={classes.createContainer} >
                <Button raised color="primary" className={classes.saveButton} >
                  <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>
                    New Trip
                  </Link>
                </Button>
              </div>
              {this.UpcomingTrips()}
            </div>
          </Drawer>
          <main
            className={classNames(classes.content, classes[`content-left`], {
              [classes.contentShift]: open,
              [classes[`contentShift-left`]]: open,
            })}
          >
            <App />
          </main>
        </div>
      </div>
    );
  }
}

AppMenu.propTypes = {
  trips: PropTypes.object,
  isLoggedIn: PropTypes.bool.isRequired,
  onTripClick: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AppMenu);
