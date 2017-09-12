import * as React from 'react'
import { SideBarComponent } from '../../components'

interface NotFoundProps {}

interface NotFoundState {}

export default class NotFoundPage extends React.Component<NotFoundProps, NotFoundState> {

    render() {
        return (
            <section className="App 404">
                <h1>Page not found</h1>
                <SideBarComponent />
            </section>
        )
    }
}