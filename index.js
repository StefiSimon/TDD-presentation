import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import App from './components/App';
import Home from './components/home/Home';
import Intro from './components/intro/Intro';

const routes = (
    <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="intro" component={Intro}/>
            </Route>
    </Router>
);

ReactDOM.render(
    routes,
    document.getElementById('root')
);








