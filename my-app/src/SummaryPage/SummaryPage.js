import React, { Component } from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import UniversityData from '../Data/UniversityData.json';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

class SummaryPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                {headerName: "School Name", field: "School Name", rowGroup: true, width: 150, hide: true, filter: "agTextColumnFilter",
                cellRenderer: this.universityCellRenderer,
                cellEditorParams: 
                {cellRenderer: this.universityCellRenderer},
        },
                {headerName: "Favourite", field: "Program Name", cellRendererFramework: Checkbox, checkBoxSelection: true},
                {headerName: "Program Name", field: "Program Name", filter: "agTextColumnFilter"},
                {headerName: "Ontario Secondary School Prerequisites", field: "Ontario Secondary School Prerequisites", filter: "agTextColumnFilter"},
                {headerName: "Co-op Option", field: "Co-op Option", filter: "agTextColumnFilter"},
        ],
        rowSelection: "multiple",
        groupDefaultExpanded: 1,
        //rowData: UniversityData,
        getQuickFilterText: function(params) {
            return params.value.name;
        },
        };
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.setState({ rowData: UniversityData });
    };

    onBtForEachNode() {
        console.log("### api.forEachNode() ###");
        this.gridApi.forEachNode(this.printNode);
      }
    universityCellRenderer(params) {
        const UNI_CODES = {
            "Algoma University": "Algoma",
            "Brock University": "Brock",
            "Carleton University": "Carleton",
            "University of Guelph": "Guelph",
            "University of Guelph Humber": "GuelphHum",
            "Hearst University": "Hearst",
            "LakeHead University": "LakeHead",
            "Laurentian University": "Laurentian",
            "McMaster University": "McMaster",
            "Nipissing University": "Nipissing",
            "OCAD University": "OCADU",
            "University of Ottawa": "Ottawa",
            "University of Ottawa Saint Paul": "OttawaSP",
            "Queen University": "Queen",
            "Royal Military College of Canada": "Royal",
            "Ryerson University": "Ryerson",
            "Trent University": "Trent",
            "Trent University Durham": "Trent",
            "University of Toronto Scarborough": "UofT",
            "University of Toronto Mississauga": "UofT",
            "University of Toronto St George": "UofT",
            "University of Ontario Institute of Technology": "UOIT",
            "University of Waterloo": "Waterloo",
            "University of Waterloo Renison": "Renison",
            "University of Waterloo St Jerome's": "SJU",
            "Western University": "Western",
            "Western University - King": "WesternKing",
            "Western University - Brescia": "Brescia",
            "Western University - Huron": "Huron",
            "Wilfrid University - Brantford": "Wilfrid",
            "Wilfrid University - Milton": "Wilfrid",
            "Wilfrid University - Waterloo": "Wilfrid",
            "University of Windsor": "Windsor",
            "York University": "YorkU",
            "York University - Glendon": "YorkU"
        };
    
        if (params.value) {
        const sch = "<img border='0' width='40' height='40' " + "style='margin-bottom: 2px' src='images/"+ UNI_CODES[params.value] + ".png'>";
            return sch + params.value;
        } else {
            return null;
        }
    }
    printNode(node, index) {
        if (node.group) {
          console.log(index + " -> group: " + node.key);
        } else {
        
        }
      }
    render() {
        return (
            
                <div 
                  className="ag-theme-material"
                  style={{ 
	                height: '1000px', 
                    width: '2000px' 
                }} 
                    >
                    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
                    <button onClick={this.onBtForEachNode.bind(this)}>This is a test</button>
                    <AgGridReact
                    // gridOptions={this.gridOptions}
                    // onGridReady={this.onGridReady}
                    animateRows={true}
                    onGridReady={this.onGridReady.bind(this)}
                    enableRangeSelection={true}
                    enableColResize={true} 
                    suppressSizeToFit={true}
                    enableSorting={true}
                    enableFilter={true}
                    floatingFilter={true}
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}>
                    </AgGridReact>
                </div>
            );
    }
}

export default SummaryPage;