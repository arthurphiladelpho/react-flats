import React, { Component } from 'react';
// TODO: implement flat
import Flat from './flat.jsx';
// TODO: implement flat list
import FlatList from './flatList.jsx';
import flats from '../../data/flats.js'
// TODO: implement map
// TODO: implement marker

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: flats
    }
  }



  render () {
    return (
      <div id="app">
        <FlatList flats={this.state.flats} />
        <div className="map-container">
          <h1>Map goes here</h1>
        </div>
      </div>
    );
  }
}

export default App;
