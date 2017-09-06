import * as React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'

const logo = require('../../assets/logo.svg')

interface HeaderProps {
    title: string
}

interface HeaderState {}

export class HeaderComponent extends Component<HeaderProps, HeaderState> {
    render() {
        const { title } = this.props

        return (
            <header className="App-header">
                <Link to="/" ><img src={logo} className="App-logo" alt="logo" /></Link>
                <h2>{title}</h2>
            </header>
        )
    }
}
