import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Collapse from 'material-ui/transitions/Collapse';
import Typography from 'material-ui/Typography';
import HealthList from '../../../vaccines.json';
import IconButton from 'material-ui/IconButton';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';


const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 194,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  flexGrow: {
    flex: '1 1 auto',
  },
});

class Vaccines extends Component {
  state = {
    expanded: false
  }
  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };
  render() {
    const currentCity = this.props.trips[this.props.currentTrip].destination;
    const currentVaccines = HealthList[currentCity] ? HealthList[currentCity].vaccines : [];
    const currentWarning = HealthList[currentCity] ? HealthList[currentCity].warnings : '';
    const { classes } = this.props;
    console.log(currentCity);
    let vaccineRows = currentVaccines.map((vaccine) => {
      return <li>{vaccine}</li>;
    });

    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              type="headline"
              component="h6"
            >
              Health Recommendations
            </Typography>
            <Typography component="p">
              {currentWarning}
            </Typography>
            <Typography component="p">
            There are several CDC recommended vaccines:
            </Typography>
            <CardActions >
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded,
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
                >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography component="ul">
                  {vaccineRows}
              </Typography>
              </CardContent>
            </Collapse>
            <Button
              dense
              color="primary"
            >
              Add Vaccines to List
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentTrip: state.currentTripId,
    trips: state.trips.byId,
  };
}

Vaccines.propTypes = {
  currentTrip: PropTypes.number.isRequired,
  trips: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

//withStyles(styles)(Vaccines);
export default connect(mapStateToProps)(withStyles(styles)(Vaccines));