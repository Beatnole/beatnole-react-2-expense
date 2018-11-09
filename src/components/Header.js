import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { startSignOut } from '../actions/auth'

export const Header = ({ startSignOut }) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <button onClick={startSignOut}>Logout</button>
        </header>
)

const mapDispatchToProps = (dispatch) => ({
    startSignOut: () => dispatch(startSignOut())
})

export default connect(undefined, mapDispatchToProps)(Header)