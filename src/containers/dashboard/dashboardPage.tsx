import * as React from 'react';
import {
    HeaderComponent, SideBarComponent
} from '../../components'

const theme = require('../container.theme.css')

interface DashboardPageProps {}

interface DashboardPageState { }

class DashboardPage extends React.Component<DashboardPageProps, DashboardPageState> {

    constructor(props: DashboardPageProps) {
        super(props)
    }

    render() {
        return (
            <section className={theme.app}>
                <HeaderComponent title="Dashboard Page" />
                <SideBarComponent />
            </section>
        )
    }
}

export default DashboardPage;
