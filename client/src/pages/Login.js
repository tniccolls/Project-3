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

  // loadPosts = () => {
  //   API.getPosts()
  //     .then(res =>
  //       this.setState({ posts: res.data, title: '', author: '', synopsis: '' })
  //     )
  //     .catch(err => console.log(err));
  // };

  onChange = key => e => this.setState({ [key]: e.target.value });

  onClick = () => {API.login({userName: this.state.userName, password: this.state.password}).then((res) => {
    localStorage.setItem('current_user_token', res.data.token);
    this.props.history.push("/");
  })}
   
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
          <button onClick={this.onClick}>Login</button>
        </div>
      
    );
  }
}


  export default Login;


// class Login extends Component {

//     /* In order to utilize our authentication methods within the AuthService class, we want to instantiate a new object */
//     //Auth = new AuthHelperMethods();

//     //state = {
//     //    username: "",
//     //    password: ""
//     //}

//     /* Fired off every time the use enters something into the input fields */
//     //_handleChange = (e) => {
//         //this.setState(
//            // {
//            //     [e.target.name]: e.target.value
//            // }
//        // )
//     }

//     handleFormSubmit = (e) => {
        
//         e.preventDefault();
//         /* Here is where all the login logic will go. Upon clicking the login button, we would like to utilize a login method that will send our entered credentials over to the server for verification. Once verified, it should store your token and send you to the protected route. */
//         this.Auth.login(this.state.username, this.state.password)
//             .then(res => {
//                 if (res === false) {
//                     return alert("Sorry those credentials don't exist!");
//                 }
//                 this.props.history.replace('/');
//             })
//             .catch(err => {
//                 alert(err);
//             })
//     }

//     componentWillMount() {
//         /* Here is a great place to redirect someone who is already logged in to the protected route */
//         if (this.Auth.loggedIn())
//             this.props.history.replace('/');
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <div className="main-wrapper">
//                     <div className="box">
//                         <div className="box-header">
//                             <h1>Login</h1>
//                         </div>
//                         <form className="box-form">
//                             <input
//                                 className="form-item"
//                                 placeholder="Username"
//                                 name="username"
//                                 type="text"
//                                 onChange={this._handleChange}
//                             />
//                             <input
//                                 className="form-item"
//                                 placeholder="Password"
//                                 name="password"
//                                 type="password"
//                                 onChange={this._handleChange}
//                             />
//                             <button className="form-submit" onClick={this.handleFormSubmit}>Login</button>
//                         </form>
//                         <Link className="link" to="/signup">Don't have an account? <span className="link-signup">Signup</span></Link>
//                     </div>
                    
//                 </div>
                
//             </React.Fragment>
//         );
//     }
// }
// export default Login;