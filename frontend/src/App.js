import React from 'react';
import { Route } from "react-router-dom";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import BindForm from "./components/bindForm";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <br/>
      <br/>
      
      <main>
        <Route exact path="/" component={LoginForm}></Route>
        <Route path="/bind-server" component={BindForm}></Route>
      </main>
      
    </React.Fragment>
  );
}

export default App;
