import React from 'react';

import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './components/Login/Login';
import Order from './components/Order/Order';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AdminPanel from './components/AdminPanel/AdminPanel';
export const UserContext=createContext()

function App() {
  const [loggedUser,setloggedUser]=useState({})
  console.log(loggedUser.email);
  return (
    <UserContext.Provider value={[loggedUser,setloggedUser]}>
    <div className="App">
     
      <Router>

      <Switch>
      <Route exact path="/">
          <Home></Home>
    
      </Route>
      
      <PrivateRoute  path="/order">
            <Order></Order>
        </PrivateRoute>
        <Route path="/login">
             <Login></Login>
        </Route>
        <Route path="/admin">
             <AdminPanel></AdminPanel>
        </Route>
      </Switch>
  
       </Router>
    </div>
    
    </UserContext.Provider>
  );
}

export default App;
