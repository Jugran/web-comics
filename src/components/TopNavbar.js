import React from 'react';
import {Link, NavLink } from 'react-router-dom';

const TopNavbar = () => {
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
                    <Link className="nav-link" to='/logout'>Logout</Link>
                </div>
            </div>

        </nav>
    )
}


export default TopNavbar;


