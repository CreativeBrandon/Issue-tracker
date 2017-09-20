import * as React from 'react';
import { HeaderComponent, SideBarComponent } from '../../components'

const theme = require('../container.theme.css')

interface AboutPageProps {
    title: string
}

interface AboutPageState {}

class AboutPage extends React.Component<AboutPageProps, AboutPageState> {

    constructor(props: AboutPageProps) {
        super(props)
    }

    render() {
        return (
            <section className={theme.app}>
                <HeaderComponent title="About Page" />
                <SideBarComponent />
            </section>
        )
    }
}

export default AboutPage;
