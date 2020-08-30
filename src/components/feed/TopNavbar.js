import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import { signOut } from '../../actions/auth'

const TopNavbar = () => {

    const dispatch = useDispatch();
    const is_authenticated = useSelector(state => state.auth.is_authenticated)

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-info fixed-top ">
            <a className="navbar-brand head-brand" href="/">Web Comics</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarFixed"
                aria-controls="navbarFixed" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarFixed">
                <div className="navbar-nav ml-auto">
                    {is_authenticated ? (
                        <>
                            <NavLink className="nav-link" to="/feed">Home</NavLink>
                            <NavLink className="nav-link" to='/profile'>profile</NavLink>
                            <Link className="nav-link" to='#' onClick={() => signOut(dispatch)}> Logout</Link>
                        </>
                    ) : (
                            <>
                                <Link className="nav-link active" exact to="/">Home</Link>
                                <Link className="nav-link" to='/signup'>Sign Up</Link>
                                <Link className="nav-link" to='/login'>Login</Link>
                            </>
                        )}

                </div>
            </div>

        </nav>
    )
}


export default TopNavbar;


