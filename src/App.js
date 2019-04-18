import React, { Component } from 'react';
import Home from './Home.js';
import EggPage from './EggPage';
import './App.css';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Home /> */}
        <Route path="/" exact component={Home} />
        <Route path="/egg" component={EggPage} /> 
      </div>
    );
  }
}

export default App;
