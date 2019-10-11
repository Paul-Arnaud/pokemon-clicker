import React, {Component} from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Game from './Component/Game';
import Help from './Component/Help'
// import logo from './logo.svg';
import '../node_modules/nes.css/css/nes.min.css'
import './App.css';
import './Component/Game.css';
import './Component/Shop.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav className="App-nav">  
          < NavLink exact to="/"> Game </NavLink>
            <NavLink to="/help"> Help </NavLink>
          </nav> 
          <Switch>
            <div className="App-content">
              <Route exact path="/" component={Game} />
              <Route path="/help" component={Help}/>
            </div>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
