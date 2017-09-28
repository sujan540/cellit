import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';
import {Provider} from 'react-redux';

import './stylesheets/main.scss';
import {reducers} from './reducers/index';
import App from './components/App';
import Home from './pages/Home';
import UserEdit from './pages/UserEdit';
import NotFound from './pages/NotFound';


//build the user list
let users = [];
for (let i = 1; i < 28; i++) {
    users.push({
        id: i,
        username: 'Sujan ' + i,
        job: 'Empoyee' + i
    })
}

const initial_state = {
    users: {
        list: users
    }
}

// create the store
let middleware = applyMiddleware(routerMiddleware(browserHistory));
if(process.env.MODE_ENV !== 'production'){
    middleware = compose(middleware, window.devToolsExtension &&  window.devToolsExtension());
}
const store = createStore(reducers, initial_state, middleware);
const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="user-edit(/:id)" component={UserEdit}/>
                <Route path="*" component={NotFound}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);