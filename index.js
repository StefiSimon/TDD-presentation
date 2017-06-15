import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import App from './components/App';
import Home from './components/home/Home';
import Intro from './components/intro/Intro';
import Related from './components/related/Related';
import Steps from './components/steps/Steps';
import Laws from './components/laws/Laws';
import Reasons from './components/reasons/Reasons';

const routes = (
    <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="intro" component={Intro}/>
                <Route path="related" component={Related} />
                <Route path="steps" component={Steps} />
                <Route path="laws" component={Laws} />
                <Route path="reasons" component={Reasons} />
            </Route>
    </Router>
);

ReactDOM.render(
    routes,
    document.getElementById('root')
);








