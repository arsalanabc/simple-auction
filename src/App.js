import React, { Component } from 'react';
import ItemBox from './components/item_box'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="myBids">
          <ItemBox />
        </div>
        <div className="activeBids">

        </div>
      </div>
    );
  }
}

export default App;
