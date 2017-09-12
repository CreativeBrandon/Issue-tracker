import * as React from 'react';
import {
    HeaderComponent, SideBarComponent
} from '../../components';

interface DashboardPageProps {
    title: string
}

interface DashboardPageState { }

class DashboardPage extends React.Component<DashboardPageProps, DashboardPageState> {

    constructor(props: DashboardPageProps) {
        super(props)
    }

    submit(values: {}) {
        // console.log('form submitted', values)
    }

    render() {
        return (
            <section className="App">
                <HeaderComponent title="Dashboard Page" />
                <SideBarComponent />
            </section>
        )
    }
}

export default DashboardPage;
