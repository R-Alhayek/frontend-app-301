import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './MyFavorites.css';

class MyFavorites extends React.Component {
  render() {
    return(
      <Jumbotron>
        <h1>My Favorites</h1>
        <p>
          This is a collection of my favorites
        </p>
      </Jumbotron>
    )
  }
}

export default MyFavorites;
