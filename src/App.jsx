import React from 'react';
import "./App.css";
import "./components/Profil"
import Profil from './components/Profil';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';


function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Profil" component={Profil}/>
      </Switch>
    </div>
  );
}

export default App;
