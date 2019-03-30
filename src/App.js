import React, {Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Additems from './routes/additems'
import Bidding from './routes/bidding'
import './App.css';

const items = [
 { id: 'first', title: 'Title for first' },
 { id: 'second', title: 'Title for second' }
]

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="mainContainer">  
          <Switch>
            <Route path='/additems' component={Additems} />
            <Route path='/bidding' component={Bidding} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
