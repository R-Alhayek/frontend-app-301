import React from 'react';
import Header from './Header';
import Profile from './Profile';
import Login from './Login';
import MyFavorites from './MyFavorites';
import Footer from './Footer';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    return(
      <>
        <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `MyFavorites` component, if they are not, render the `Login` component */}
                {this.props.auth0.isAuthenticated ? <MyFavorites /> : <Login />}
              </Route>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              <Route path="/profile">
                <Profile/>
              </Route>
            </Switch>
            <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);

