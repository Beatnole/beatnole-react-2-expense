import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import Login from '../components/Login'
import HelpPage from '../components/HelpPage.js';
import AddExpensePage from '../components/AddExpensePage.js';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js';
import EditExpensePage from '../components/EditExpensePage.js';
import NotFoundPage from '../components/NotFoundPage.js';
import PrivateRoute from './PrivateRoute'

export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
    <div>
        <Switch>
            <Route path="/" component={Login} exact={true}/>
            <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
            <PrivateRoute path="/create" component={AddExpensePage} />
            <PrivateRoute path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage}  />
        </Switch>
    </div>
    </Router>
)

export default AppRouter
