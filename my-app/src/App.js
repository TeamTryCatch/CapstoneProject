import React, { Component } from 'react';
import './App.css';
import UniversityData from './Data/UniversityData.json';
import GridExample from './SummaryPage/SummaryPage.js';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import SearchMaps from './SearchMaps/Chart';
class App extends Component {
  
  getData = () => {
   console.log(UniversityData); 
  }
  render() {
    return (
      <div className="App">
   
      <GridExample />
          {/* <button onClick={this.getData}>Print JSON DATA</button> */}
      </div>
    );
  }
}

export default App;
