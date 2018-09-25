import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const SideBar = () => {

    return (
    <div>
    <SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="Dashboard">
        <NavItem eventKey="dasboard">
            <NavIcon>
                <i className="fa fa-fw fa-tachometer" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                DashBoard
            </NavText>
        </NavItem>

        <NavItem eventKey="favourites">
            <NavIcon>
                <i className="fa fa-star-o" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Favourites
            </NavText>
        </NavItem>

        <NavItem eventKey="analytics">
            <NavIcon>
                <i className="fa fa-bar-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Analytics
            </NavText>
        </NavItem>

        <NavItem eventKey="serach">
            <NavIcon>
                <i className="fa fa-search" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Search
            </NavText>
        </NavItem>
    
        <NavItem eventKey="planner">
            <NavIcon>
                <i className="fa fa-mortar-board" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Planner
            </NavText>
        </NavItem>
    </SideNav.Nav>
</SideNav>
</div>
    );
};

export default SideBar;