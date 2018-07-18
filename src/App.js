import React , { Component } from 'react';
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import FirstView from './container/FirstViewContainer/FirstView';
import AboutMe from './container/AboutMeContainer/AboutMe';


class App extends Component {
  render() {
    return (
      <div className="App">
          <FirstView/>
          <div>
            <AboutMe/>
          </div>
      </div>
    );
  }
}

export default App;
