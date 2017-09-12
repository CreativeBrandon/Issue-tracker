import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AboutPage from './containers/about/aboutPage';
import DashboardPage from './containers/dashboard/dashboardPage';
import HomePage from './containers/home/homePage';
import NotFoundPage from './containers/notFound/notFoundPage';

export default (
    <main>
        <Switch>
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/dashboard" component={DashboardPage} />
            <Redirect from="/home" to="/" />
            <Route component={NotFoundPage} />
        </Switch>
    </main>
)
