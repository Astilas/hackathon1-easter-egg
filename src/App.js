import React, { Component } from 'react';
import Home from './Home.js';
import EggPage from './EggPage';
import Game from './Game';
import './App.css';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Roulegg</h2>
        <Route path="/" exact component={Home} />
        <Route path="/egg" component={EggPage} /> 
        <Route path="/game" component={Game} />
      </div>
    );
  }
}

export default App;
