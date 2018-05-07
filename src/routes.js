import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HelloWorld from './hello-world';

// Switch is just a placeholder to return one react element.
// Replacing that with div was causing CSS issues due to an extra
// div in the hierarchy
// Instead of Switch (if multiple route matches are required) then
// react-shadow-wrapper package can be used or on react 16 using
// <Fragment>

const Routes = () => (
    <HashRouter>
    <Switch>
        <Route exact path="/" component={HelloWorld}></Route>
        <Route path="/:name" component={HelloWorld}></Route>
    </Switch>
    </HashRouter>
)

export default Routes;