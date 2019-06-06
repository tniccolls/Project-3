import React, { Component } from "react";
import API from '../utils/API';

class Login extends Component {
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

 
  onChange = key => e => this.setState({ [key]: e.target.value });

  onSubmit = () => {API.login({userName: this.state.userName, password: this.state.password}).then((res) => {
    console.log(res.data)
    localStorage.setItem('current_user_token', res.data.token);
    this.props.history.push("/");
  }).catch(res => console.log(res))}
   
  render() {
    return (
      <div>
        <h1>Login</h1>
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
          <button onClick={this.onSubmit}>Login</button>
        </div>
      
    );
  }
}


  export default Login;

