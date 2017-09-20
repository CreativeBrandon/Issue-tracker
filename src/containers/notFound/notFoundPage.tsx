import * as React from 'react'
import { SideBarComponent } from '../../components'

const theme = require('../container.theme.css')

interface NotFoundProps {}

interface NotFoundState {}

export default class NotFoundPage extends React.Component<NotFoundProps, NotFoundState> {

    render() {
        return (
            <section className={theme.app}>
                <h1>Page not found</h1>
                <SideBarComponent />
            </section>
        )
    }
}
