import React from 'react';
import BindServer from './common/bindServer';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (  
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src={"https://icons.iconarchive.com/icons/tatice/operating-systems/256/Linux-icon.png"} style={{width:'1.5%'}} alt="Logo" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/"></NavLink> 
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/tutorial">Tutorial</NavLink> 
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/documentation">Documentation</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/support">Support</NavLink>
                </li>
                <li className="nav-item" id="bind-server">
                  <NavLink className="nav-link" to="/bind-server"><BindServer /></NavLink>
                </li>
              </ul>
            </div>
        </nav>
    );
}
 
export default NavBar;