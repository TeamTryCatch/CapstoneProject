import React, { Component } from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
// import "ag-grid-enterprise";
import UniversityData from '../Data/UniversityData.json';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class SummaryPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                {headerName: "School Name", field: "School Name", cellRenderer: "agGroupCellRenderer", rowGroup: true, hide: true, pinned: "left", filter: "agTextColumnFilter"},
                {headerName: "OUAC Code", field: "OUAC Code", filter: "agTextColumnFilter"},
                {headerName: "Program Name", field: "Program Name", filter: "agTextColumnFilter"},
                {headerName: "Ontario Secondary School Prerequisites", field: "Ontario Secondary School Prerequisites", filter: "agTextColumnFilter"},
                {headerName: "Alternative Offer(s)", field: "Alternative Offer(s)", filter: "agTextColumnFilter"},
            ],
        groupDefaultExpanded: 1,
        rowData: UniversityData
        };
    }

    render() {
        return (
                <div 
                  className="ag-theme-balham"
                  style={{ 
	                height: '1000px', 
	                width: '2000px' }} 
		            >
                    <AgGridReact
                    columnDefs={this.state.columnDefs}
                    animateRows={true}
                    enableRangeSelection={true}
                    enableSorting={true}
                    enableFilter={true}
                    rowData={this.state.rowData}>
                    </AgGridReact>
                </div>
            );
    }
}

//render(<GridTest />, document.querySelector("#root"));
export default SummaryPage;