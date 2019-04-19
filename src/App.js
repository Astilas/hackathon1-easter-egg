import React, { Component } from 'react';
import Home from './Home.js';
import EggPage from './EggPage';
import Game from './Game';
import Curling from './Curling';
import './App.css';
import { Route } from 'react-router-dom';
import logo from "./logo.svg";

class App extends Component {

  render() {
    return (
      <div>
<<<<<<< HEAD
        <Route path="/" exact component={Curling} />
        <Route path="/character" exact component={Home} />
=======
        
        <h2>RoulEgg<img src={logo} className="logo" ></img></h2>
        <Route path="/curling" component={Curling} />
        <Route path="/" exact component={Home} />
>>>>>>> 878b04f72fc0c1776fe970123362bd92dbff7917
        <Route path="/egg" component={EggPage} />
        <Route path="/game" component={Game} />

      </div>
    );
  }
}

export default App;
