import React, { useState } from 'react';
import logo from './Icon_train.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Reports from './components/Reports/Reports';
import Login from './components/Login/Login';
import useToken from './components/App/useToken';
import NavBar from './components/App/navBar';
import DashBoard from './components/App/dashboard';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const { token, setToken } = useToken();
  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <ChevronIcon />
    //     <p>
    //       Welcome to the conductor portal, please login.
    //     </p>
    //   </header>
    // </div>
    <div className="App">
      <header className="App-header">  
        <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Conductor portal
          </h1>
      </header>
  
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route path="/reports">
          <Reports />
        </Route>
        <Route path="/logout">
          <Login />
        </Route>
        <Route path="/dashboard">
          <DashBoard />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;
