import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './SideBar/SideBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
      </div>
    );
  }
}

export default App;
