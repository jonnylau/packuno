import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Promise from 'bluebird';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { loggedInAsync as LoggedIn } from '../actions/login.actions';
import Trip from '../components/Trip.component';
import Dashboard from '../components/Dashboard.component';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.LoggedIn();
  }
  componentDidMount() {
    console.log(this.props.isLoggedIn);
  }

  renderComponents() {
    if (this.props.isLoggedIn === 'true') {
    return (<Router>
      <div>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/trip">Trip</Link></li>
        </ul>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/trip" component={Trip} />
      </div>
    </Router>)
  } 
    return <a href="/auth/google">Log In With Google</a>;
  
}


  render() {
    console.log(this.renderComponents());
    return (<div>{this.renderComponents()}</div>);
  }
}

const mapStateToProps = (state, ownProps) =>
  ({
    isLoggedIn: state.login,
  });

const mapDispatchToProps = (dispatch, ownProps) => ({
  LoggedIn: () => {
    dispatch(LoggedIn());
  },
});

const LoginCont = connect(mapStateToProps, mapDispatchToProps)(Login);
export default withStyles(styles)(LoginCont);

