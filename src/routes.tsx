import * as React from 'react';
import { Route } from 'react-router';
import { AboutPage, HomePage } from './containers';

export default (
    <section>
        <Route exact path="/" component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/about" component={AboutPage} />
    </section>
)
