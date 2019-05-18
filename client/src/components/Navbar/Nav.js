import React from 'react';
import "./style.css"

function Nav()
{
  return (
    <nav className="navbar navbar-light bg-primary" id="bg">
      <a className="navbar-brand" id="grace-city-center" href="/">
        Grace City Center
        </a>
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link" id ="nav-text" href="/login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id ="nav-text" href="/signup">Sign Up</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id ="nav-text" href="/posts">Message Board</a>
          </li>
        </ul>
    </nav>
  );
}

export default Nav;