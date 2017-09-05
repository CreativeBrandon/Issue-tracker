import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AboutPage, HomePage, NotFound } from './containers';

export default (
    <main>
        <Switch>
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/home" render={() => <Redirect to="/" />} />
            <Route component={NotFound} />
        </Switch>
    </main>
)
