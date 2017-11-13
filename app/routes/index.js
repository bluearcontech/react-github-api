import { Router, Route, IndexRoute, Switch } from 'react-router-dom'
import React from 'react'
import { createBrowserHistory } from 'history';
import Home from './Home'
import StarGazersView from './StarGazersView'

export default (store) => {
    const history = createBrowserHistory();
    const routes =
        <Router history={history}>
            <div>
                <Route exact path="/" component={Home} />
                <Route path='/:username/:repo/stargazers' component={StarGazersView} />
            </div>
        </Router>

    return routes
}