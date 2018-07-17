import React , { Component } from 'react';
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import FirstView from './container/FirstViewContainer/FirstView';


class App extends Component {
  render() {
    return (
      <div className="App">
          <FirstView/>
      </div>
    );
  }
}

export default App;
