import React from 'react';
import "./style.css"

function Nav() {
    return (
    <nav className="navbar navbar-light bg-primary" id="bg">
        <a className="navbar-brand" id="grace-city-center" href="/">
          Grace City Center
        </a>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" id="login" href="/login">Login</a>
          </li>
        </ul>
    </nav>
    );
  }
  
  export default Nav;