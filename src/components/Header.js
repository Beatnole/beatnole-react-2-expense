import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { startSignOut } from '../actions/auth'

export const Header = ({ startSignOut }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h1>Expensify</h1>
                </Link>
                <button className="button button--link" onClick={startSignOut}>Logout</button>
            </div>
        </div>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startSignOut: () => dispatch(startSignOut())
})

export default connect(undefined, mapDispatchToProps)(Header)