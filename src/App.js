import React, { Component } from 'react';
import Home from './Home.js';
import EggPage from './EggPage';
import Congrats from './Congrats';
import Game from './Game';
import Curling from './Curling';
import './App.css';
import { Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>
        <Route path="/" exact component={Curling} />
        <Route path="/character" component={Home} />
        <Route path="/egg" component={EggPage} />
        <Route path="/congrats" component={Congrats} />
        <Route path="/game" component={Game} />

      </div>
    );
  }
}

export default App;
