import React, { Component } from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";
import {Grid} from 'ag-grid-community';
// import "ag-grid-enterprise";
import UniversityData from '../Data/UniversityData.json';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class SummaryPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gridOptions: { 
            columnDefs: [
                {headerName: "School Name", field: "School Name", cellRenderer: "agGroupCellRenderer", rowGroup: true},
                {headerName: "OUAC Code", field: "OUAC Code"},
                {headerName: "Program Name", field: "Program Name"},
                {headerName: "Ontario Secondary School Prerequisites", field: "Ontario Secondary School Prerequisite"}],
        },
        }
    }
     jsonLoad(callback) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', '../Data/UniversityData.json'); // by default async
        xhr.responseType = 'json'; // in which format you expect the response to be
    
        xhr.onload = function() {
            if(this.status == 200) {// onload called even on 404 etc so check the status
                callback(this.response);
            }
        };
    
        xhr.onerror = function() {
            console.log('loading data error');
        };
    
        xhr.send();
    }
    render() {
        return (
                <div 
                  className="ag-theme-balham"
                  style={{ 
	                height: '500px', 
	                width: '600px' }} 
		            >
                    <AgGridReact
                        enableSorting={true}
                        enableFilter={true}
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}>
                    </AgGridReact>
                </div>
            );
    }
}

//render(<GridTest />, document.querySelector("#root"));
export default SummaryPage;