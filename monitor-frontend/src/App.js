import React, { Component } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import Tutorial from "./components/tutorial";
import './App.css';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <br/>
      <br/>
      <LoginForm />
      <main>
      </main>
    </React.Fragment>
  );
}

export default App;
