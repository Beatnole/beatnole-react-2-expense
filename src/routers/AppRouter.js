import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import Login from '../components/Login'
import SignInForm from '../components/SignInEmail.js'
import PasswordForgetPage from '../components/ForgotPassword.js'
import AddExpensePage from '../components/AddExpensePage.js';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js';
import EditExpensePage from '../components/EditExpensePage.js';
import NotFoundPage from '../components/NotFoundPage.js';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
    <div>
        <Switch>
            <PublicRoute path="/" component={Login} exact={true}/>
            <PublicRoute path="/email" component={SignInForm}/>
            <PublicRoute path="/forgotEmail" component={PasswordForgetPage}/>
            <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
            <PrivateRoute path="/create" component={AddExpensePage} />
            <PrivateRoute path="/edit/:id" component={EditExpensePage} />
            <Route component={NotFoundPage}  />
        </Switch>
    </div>
    </Router>
)

export default AppRouter
