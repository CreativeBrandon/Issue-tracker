import * as React from 'react';
import { HeaderComponent, SideBarComponent } from '../../components';

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
            <section className="App">
                <HeaderComponent title="About Page" />
                <SideBarComponent />
            </section>
        )
    }
}

export default AboutPage;
