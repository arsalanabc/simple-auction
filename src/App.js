import React, { Component } from 'react';
import ItemBox from './components/item_box'
import './App.css';

const items = [
 { id: 'first', title: 'Title for first' },
 { id: 'second', title: 'Title for second' }
]

class App extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="myBids">
        My bids
         
        </div>
        <div className="activeBids">
        Active Bids
         <ItemBox />

        </div>
      </div>
    );
  }
}

export default App;
