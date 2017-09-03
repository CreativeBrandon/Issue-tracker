import * as React from 'react';
import { HeaderComponent, SideBarComponent } from '../../components';
import './homePage.css'

interface HomePageProps {
    title: string
}

interface State {
    data: {}
}

export class HomePage extends React.Component<HomePageProps, State> {

    state: State = {
        data: {}
    }

    constructor(props: HomePageProps) {
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
        const { title } = { title: 'Home Page' } // this.props;

        return (
            <section className="App">
                <HeaderComponent title={title} />
                <SideBarComponent />
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>
            </section>
        )
    }
}

export default HomePage;
