import React from 'react';
import { connect } from 'react-redux';
import Promise from 'bluebird';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { loggedInAsync as LoggedIn } from '../actions/login.actions';
import Button from 'material-ui/Button';

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
  saveButton: {
    color: 'white',
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
    const { isLoggedIn, loggedIn, classes } = this.props;
    console.log(loggedIn);
    if (isLoggedIn === 'true') {
      return (<h2>You've already logged in!</h2>);
    }
    return (
      <div>
        <h3>Sign in to start packing</h3>
        <Button href="/auth/google" raised color="primary" className={classes.saveButton} >
          Log In With Google
        </Button>
      </div>
    );
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

