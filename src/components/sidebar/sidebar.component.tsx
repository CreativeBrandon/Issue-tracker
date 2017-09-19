import * as React from 'react';
import { NavLink } from 'react-router-dom'

const styles = require('./sidebar.component.css')
const logo = require('../../assets/logo.svg')

interface SideBarProps {}

interface SidebarState {}

export class SideBarComponent extends React.Component<SideBarProps, SidebarState> {
    render() {
        return (
            <aside className={styles.container}>
                <nav className={styles.sideNav}>
                    <NavLink activeClassName="" exact={true} to="/">
                        <img src={logo} className={styles.logo} alt="logo" />
                    </NavLink>
                    <NavLink activeClassName="" exact={true} to="/home">Home</NavLink>
                    <NavLink activeClassName="" exact={true} to="/about">About</NavLink>
                    <NavLink activeClassName="" exact={true} to="/dashboard">Dashboard</NavLink>
                </nav>
            </aside>
        )
    }
}