import * as React from 'react'
import { store } from '../../store'
import { SideBarComponent } from '../../components'

interface NotFoundProps {}

interface NotFoundState {}

export class NotFound extends React.Component<NotFoundProps, NotFoundState> {

    componentDidMount() {
        const currentState = store.getState()
        console.log('current state', currentState)
    }

    render() {
        return (
            <section className="App 404">
                <h1>Page not found</h1>
                <SideBarComponent />
            </section>
        )
    }
}