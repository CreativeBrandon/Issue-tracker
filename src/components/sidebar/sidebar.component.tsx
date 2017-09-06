import * as React from 'react';
import { Link } from 'react-router-dom'
import './sidebar.component.css';

const logo = require('../../assets/logo.svg')

interface SideBarProps {}

interface sidebarState {}

export class SideBarComponent extends React.Component<SideBarProps, sidebarState> {
    render() {
        return (
            <aside>
                <nav>
                    <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/dashboard">Dashboard</Link>
                </nav>
            </aside>
        )
    }
}