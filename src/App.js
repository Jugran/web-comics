import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom'

import { PrivateRoute, PublicRoute } from './components/customRoutes'

import Home from './components/home/Home'
import Feed from './components/feed/Feed'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import Profile from './components/dashboard/profile'


import './App.scss';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path='/' component={Home}/>
        <PublicRoute path='/signup' component={SignUp}/>
        <PublicRoute path='/login' component={SignIn}/>
        <PublicRoute path='/demo' component={Feed}/>
        <PrivateRoute path='/feed' component={Feed}/>
        <PrivateRoute path='/profile' component={Profile}/>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
