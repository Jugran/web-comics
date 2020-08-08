import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/home/Home'
import Feed from './components/feed/Feed'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'


import './App.scss';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/signin' component={SignIn}/>
        <Route path='/demo' component={Feed}/>
        <Route path='/feed' component={Feed}/>
        {/* <Route path='/profile' component={Profile}/> */}
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
