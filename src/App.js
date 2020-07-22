import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Feed from './components/Feed'


import './App.scss';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        {/* <Route path='/signup' component={}/> */}
        {/* <Route path='/login' component={}/> */}
        <Route path='/demo' component={Feed}/>
        <Route path='/feed' component={Feed}/>
        {/* <Route path='/profile' component={Profile}/> */}
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
