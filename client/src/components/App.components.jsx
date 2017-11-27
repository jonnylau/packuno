import React from 'react';
import Trip from '../components/Trip.component';
import Dashboard from '../components/Dashboard.component';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loggedInAsync as LoggedIn, currentUserAsync as setUser } from '../actions/login.actions';
import LoginCont from '../containers/Login.container';



export class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentWillMount() {
  //   this.props.LoggedIn();
  // }

  render() {
    if (this.props.isLoggedIn === 'true') {
      return (
        <Router>
           <div>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/trip" component={Trip} />
         </div>
       </Router>

      );
    }
    return (
      <LoginCont />
    );
  }
}

const mapStateToProps = (state, ownProps) =>
  ({
    isLoggedIn: state.login,
    currentUser: state.setUser,
  });

  const mapDispatchToProps = (dispatch, ownProps) => ({
    LoggedIn: () => {
      dispatch(LoggedIn());
    },
    setUser: () => {
      dispatch(setUser())
    }
  });

const App = connect(mapStateToProps, mapDispatchToProps)(AppContainer);
export default App;

