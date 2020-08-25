import React from 'react';
import { useDispatch } from 'react-redux';
import {Link, NavLink } from 'react-router-dom';

import { signOut } from '../../actions/auth'

const TopNavbar = () => {

    const dispatch = useDispatch();

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-info fixed-top ">
            <a className="navbar-brand" href="/">Webcomics</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarFixed"
                aria-controls="navbarFixed" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarFixed">
                <div className="navbar-nav ml-auto">
                    <NavLink className="nav-link" to="/feed">Home</NavLink>
                    <NavLink className="nav-link" to='/profile'>profile</NavLink>
                    <Link className="nav-link" to='#' onClick={() => signOut(dispatch)}> Logout</Link>
                </div>
            </div>

        </nav>
    )
}


export default TopNavbar;


