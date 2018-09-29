import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './SideBar/SideBar';
import Testing from '../src/JSON_Files/favourite.json';
import UserFavourite from "../src/Favourite";


const preload = Testing;


class App extends Component {
  render() {
    return <div className="App">
        <SideBar />
        
        <UserFavourite items={preload} />
      </div>;
    console.log(Testing);
  }
}

export default App;
