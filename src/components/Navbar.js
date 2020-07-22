
import React from 'react';
import {Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header class="head mb-auto">
            <div class="inner">
                <Link to="/">
                    <h3 class="head-brand">Web Comics</h3>
                </Link>
                <nav class="nav nav-head justify-content-center" >
                    <NavLink className="nav-link" exact to="/">Home</NavLink>
                    <NavLink className="nav-link" to='/login'>Login</NavLink>
                    <NavLink className="nav-link" to='/signup'>Sign Up</NavLink>
                </nav>
            </div>
        </header>
    )
}


export default NavBar;