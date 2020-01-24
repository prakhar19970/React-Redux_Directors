import React from 'react';
import './App.css';
import Homepage from './components/main/homepage'
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Directors from './components/Directors';

import EditDirector from './components/EditDirector';
import AddDirectors from './components/AddDirectors';
import SingleDirector from './components/SingleDirector';
function App() {

  return (

    <BrowserRouter>
      <div className="App">
        <header className="App-header" >
          <h1>FlixInfo</h1>
        </header>
        <Switch>
          <Route path='/home' component={Homepage} exact />
          <Route path='/directors/' component={Directors} exact />
          <Route path='/directors/add' component={AddDirectors} exact />
          <Route path="/directors/:id/update" component={EditDirector} exact />
          <Route path="/directors/:id" component={SingleDirector} exact />
        </Switch>
      </div>
    </BrowserRouter >
  );
}

export default App;
