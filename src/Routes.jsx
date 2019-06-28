import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Home/Home.jsx'


export default props => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} key="Home"/>
        </Switch>
    </Router>
);