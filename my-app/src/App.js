import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './SideBar/SideBar';
import Analytics from './Analytics/Analytics.js';
class App extends Component {
  
  render() {
    return (
      <div className="App">
      <Analytics />
      <Analytics />
      <Analytics />
      <Analytics />
      <SideBar />        
      </div>
    );
  }
}

export default App;
