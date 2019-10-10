import React from 'react';
import Game from './Component/Game';
// import logo from './logo.svg';
import '../node_modules/nes.css/css/nes.min.css'
import './App.css';
import './Component/Game.css';
import './Component/Shop.css';

const App = () => {
   return (
     <div className="App">
      <Game />
    </div>
   )
}

export default App;
