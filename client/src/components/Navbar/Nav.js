import React from 'react';
import "./style.css"
import API from "../../utils/API"
import {Link} from "react-router-dom";

class Nav extends React.Component{
  state= {
    user: false
  }
  componentDidMount() {
    const token = localStorage.getItem('current_user_token');

    console.log(token)
    if (token) {
        API.validateToken(token).then(() => this.setState({user: true})).catch(() => localStorage.removeItem('current_user_token'));
    }
  }
render(){
  return (
    <nav class="navbar navbar-light bg-primary" id="bg">
      <a class="navbar-brand" id="grace-city-center" href="/">
        Grace City Center
        </a>
        <a href="/">
        <img src={require('../Assets/Images/gracecity_logo.png')} alt = "GraceCity Logo"/>
        </a>
        <ul class="nav justify-content-end">
          {this.state.user ? <li class="nav-item">
            <Link class="nav-link" id ="nav-text" to="/login" onClick={() => localStorage.removeItem("current_user_token")}>Logout</Link>
          </li> :
          <> <li class="nav-item">
            <Link class="nav-link" id ="nav-text" to="/login">Login</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" id ="nav-text" to="/signup">Sign Up</Link>
          </li></>}
          <li class="nav-item">
            <Link class="nav-link" id ="nav-text" to="/posts">Message Board</Link>
          </li>
        </ul>
    </nav>
  );
}}

export default Nav;