import React, { Component } from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import UniversityData from '../Data/UniversityData.json';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

class SummaryPage extends Component {
    //Mlab connection components
    apiKey = "GHF_fQJwxDvNGngFhssgK2wErpwrtvKk";
    myDB =  "capstonetest";
    myCollection = "someJsonData";
    //Sending test data
    // capstoneJson = {
    //     name: "ABCD University",
    //     program: "Software developer"
    // }
    constructor(props) {
        super(props);

        this.state = {
            rowSelection: "multiple",   
            rowData: [UniversityData],
            groupDefaultExpanded: 1,
        };
    // }
    // sendData(text){
    //     axios.request({
    //       method: 'post',
    //       url: "mongodb://ssharm02:erub26er@ds117623.mlab.com:17623/capstone",
    //      //url: "https://api.mlab.com/api/1/databases/capstonetest/collections/capstoneJson/?apiKey=6POnsQQ2_wNmktZw1j7WPJdizxKPJCul",
    //       data: {
    //         UniversityData
    //       }
    //     }).then((response) => {
    //       let tasks = this.state.tasks;
    //       tasks.push({ _id: response.data._id,text: text,completed: false});
    //     }).catch((error) => {
    //       console.log(error);
    //     });
    //   }
    //   onRowSelected(event) {
    //       console.log('test');
    //       console.log('event is ' + event);
    //       console.log('even node is ' + event.node);
    //     console.log("row " + event.node.data + " selected = " + event.node.selected);

       
    //   }
//       gridOptions = {
// // EVENTS - add event callback handlers
// onRowClicked: function(event) { console.log('a row was clicked'); },

// }
    }
onSelectionChanged() {
    window.alert('hi');
    console.log('is this method working');
    var selectedRows = this.gridApi.getSelectedRows();
    console.log(selectedRows);
    var selectedRowsString = "";
    selectedRows.forEach(function(selectedRow, index) {
      if (index > 5) {
        return;
      }
      if (index !== 0) {
        selectedRowsString += ", ";
      }
      selectedRowsString += selectedRow;
    });
    if (selectedRows.length >= 5) {
      selectedRowsString += " - and " + (selectedRows.length - 5) + " others";
    }
    console.log(selectedRowsString);
  }
      componentDidMount(){
          console.log('IS THIS RUNNING');
        //axios.get('https://api.mlab.com/api/1/databases/meanstackapp/collections/users/?apiKey=6POnsQQ2_wNmktZw1j7WPJdizxKPJCul').then(function(res) {console.log(res.data)});
        axios.get('https://api.mlab.com/api/1/databases/capstone/collections/admissions/?apiKey=S-saaKBKxxTCWaasa-k7gxYZIipkFSfx').then(function(res){console.log(res.data)})
        console.log('success');
      }
    onGridReady(params) {
        this.gridApi = params.api;
        console.log(this.gridApi);
        this.gridColumnApi = params.columnApi;
        this.setState({ rowData: UniversityData });
    };
    // onBtForEachNode() {
    //     console.log("### api.forEachNode() ###");
    //     this.gridApi.forEachNode(this.printNode);
    //     // this.gridApi.onSelectionChanged = function () {
    //     //     console.log(this.gridOptions.api.getSelectedRows().length);
    //     // }
    //     let x = this.gridOptions.api.getSelectedNodes().length;
    //     console.log('Value of x is ', x);
    //     // this.gridApi.getDisplayedRowAtIndex(function(node) {
    //     //     let x = node.isSelected();
    //     //     console.log(x);
    //     // })

    //   }
    //Column Definitions, Row data is returned fromn the Json in Data folder
    createColumns() {
       return [
            {headerName: "School Name", field: "School Name", rowGroup: true, width: 150, hide: true, filter: "agTextColumnFilter",
            cellRenderer: this.universityCellRenderer,
            cellEditorParams: 
            {cellRenderer: this.universityCellRenderer},
    },
            {headerName: "Favourite", field: "Program Name", cellRendererFramework: Checkbox, checkboxSelection: function(params) {
               // console.log('this is test');
              },
              isRowSelectable: function(rowNode) {
                return rowNode.data;
              },
            },  ///cellRendererFramework: Checkbox, checkBoxSelection: true},
            {headerName: "Program Name", field: "Program Name", filter: "agTextColumnFilter"},
            {headerName: "Ontario Secondary School Prerequisites", field: "Ontario Secondary School Prerequisites", filter: "agTextColumnFilter"},
            {headerName: "Co-op Option", field: "Co-op Option", filter: "agTextColumnFilter"},
        ]
    }
    createRows() {
        return this.setState({ rowData: UniversityData });
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
        //Change size of university image using width and height here
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
                    <button onClick={this.sendData}>Send Json to Mlab</button>
                    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
                    
                    <AgGridReact
                    gridOptions={this.gridOptions}
                    onGridReady={this.onGridReady}
                    // onRowSelected={this.onRowSelected.bind(this)}
                    animateRows={true}
                    onGridReady={this.onGridReady.bind(this)}
                    enableRangeSelection={true}
                    enableColResize={true} 
                    suppressSizeToFit={true}
                    onSelectionChanged={this.onSelectionChanged.bind(this)}
                    enableSorting={true}
                    enableFilter={true}
                    floatingFilter={true}
                    columnDefs={this.createColumns()}
                    rowData={UniversityData}>
                    </AgGridReact>
                </div>
            );
    }
}

export default SummaryPage;

//<button onClick={this.onBtForEachNode.bind(this)}>This is a test</button>