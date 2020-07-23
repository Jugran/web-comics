
import React from 'react';
import {Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header className="head mb-auto">
            <div className="inner">
                <Link to="/">
                    <h3 className="head-brand">Web Comics</h3>
                </Link>
                <nav className="nav nav-head justify-content-center" >
                    <NavLink className="nav-link" exact to="/">Home</NavLink>
                    <NavLink className="nav-link" to='/login'>Login</NavLink>
                    <NavLink className="nav-link" to='/signup'>Sign Up</NavLink>
                </nav>
            </div>
        </header>
    )
}


export default NavBar;