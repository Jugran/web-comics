import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component: Component, ...rest }) => {

    const is_authenticated = useSelector(state => state.auth.is_authenticated);
    
    return(
        <Route {...rest} render={props => (
            is_authenticated === true 
            ? <Component {...props} />
            : <Redirect to='/login' />
        )} />
    )
}


export const PublicRoute = ({ component: Component, ...rest }) => {

    const is_authenticated = useSelector(state => state.auth.is_authenticated);
    
    return(
        <Route {...rest} render={props => (
            is_authenticated === false 
            ? <Component {...props} />
            : <Redirect to='/profile' />
        )} />
    )
}