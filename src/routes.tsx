import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AboutPage, HomePage } from './containers';

export default (
    <main>
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/home" render={() => <Redirect to="/" />} />
        <Route path="/about" component={AboutPage} />
    </main>
)
