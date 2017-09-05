import * as React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'

const logo = require('../../assets/logo.svg')

interface HeaderProps {
    title: string
}

interface State {
    data: {}
}

export class HeaderComponent extends React.Component<HeaderProps, State> {
    render() {
        const { title } = this.props

        return (
            <BrowserRouter>
                <div className="App-header">
                    <Link to="/" ><img src={logo} className="App-logo" alt="logo" /></Link>
                    <h2>{title}</h2>
                </div>
            </BrowserRouter>
        )
    }
}
