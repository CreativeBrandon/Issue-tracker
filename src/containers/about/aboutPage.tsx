import * as React from 'react';
import { HeaderComponent, SideBarComponent } from '../../components';

interface AboutPageProps {
    title: string
}

export class AboutPage extends React.Component<AboutPageProps, {}> {

    constructor(props: AboutPageProps) {
        super(props)
    }

    componentWillMount() {
        console.info('will mount')
    }

    componentDidMount() {
        console.info('did mount')
    }

    componentDidUpdate() {
        console.info('did update after state change')
    }

    render() {
        return (
            <section className="App">
                <HeaderComponent title="About Page Container" />
                <SideBarComponent />
            </section>
        )
    }
}
