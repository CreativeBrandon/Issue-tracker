import * as React from 'react';
import { NavLink } from 'react-router-dom'
import './sidebar.component.css';

const logo = require('../../assets/logo.svg')

interface SideBarProps {}

interface SidebarState {}

export class SideBarComponent extends React.Component<SideBarProps, SidebarState> {
    render() {
        return (
            <aside>
                <nav>
                    <NavLink activeClassName="" exact={true} to="/">
                        <img src={logo} className="App-logo" alt="logo" />
                    </NavLink>
                    <NavLink activeClassName="" exact={true} to="/home">Home</NavLink>
                    <NavLink activeClassName="" exact={true} to="/about">About</NavLink>
                    <NavLink activeClassName="" exact={true} to="/dashboard">Dashboard</NavLink>
                </nav>
            </aside>
        )
    }
}