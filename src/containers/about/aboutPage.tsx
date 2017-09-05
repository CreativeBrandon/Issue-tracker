import * as React from 'react'
import { store, AppState } from '../../store'
import { HeaderComponent, SideBarComponent } from '../../components'

interface AboutPageProps {
    title: string
}

export class AboutPage extends React.Component<AboutPageProps, AppState> {

    constructor(props: AboutPageProps) {
        super(props)
    }

    componentWillMount() {
        console.info('will mount')
    }

    componentDidMount() {
        const currentState = store.getState()
        console.info('did mount')
        console.log(currentState)
    }

    componentDidUpdate() {
        console.info('did update after state change')
    }

    render() {
        return (
            <section className="App">
                <HeaderComponent title="About Page" />
                <SideBarComponent />
            </section>
        )
    }
}

export default AboutPage;
