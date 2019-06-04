import React, {Component} from "react";
//
import API from '../utils/API';
// import Navbar from "../components/Navbar";
// import RandomHomeComponent from '../components/RandomHomeComponent';


// import axios from "axios";
//import { Redirect } from 'react-router-dom';



class Signup extends Component {
    state = {
    
        userName: '',
        password: '',
        
      };
    
      componentDidMount() {
        const token = localStorage.getItem('current_user_token');
    
        if (token) {
            API.validateToken(token).then(() => this.props.history.push("/")).catch(() => localStorage.removeItem('current_user_token'));
        }
      }
    
       onSubmit = () => {
        API.signup(this.state)
           .then(res => {
             localStorage.setItem('current_user_token', res.data.token);
             console.log(localStorage)
            this.props.history.push("/");})
           .catch(err => console.log(err));
       };
    
      onChange = key => e => this.setState({ [key]: e.target.value });
    
      
      render() {
        return (
          <div>
              <h1>Signup</h1>
              <input
                type="text"
                value={this.state.userName}
                label="userName"
                onChange={this.onChange('userName')}
              />
              <input
                type="password"
                value={this.state.password}
                label="password"
                onChange={this.onChange('password')}
              />
             
              />
              <button onClick={this.onSubmit}>Signup</button>
            </div>
          
        );
      }
    }
    
    export default Signup;