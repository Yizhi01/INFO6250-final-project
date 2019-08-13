import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
  	this.setState({username:event.target.value});
  }

  render(){
  	return(
      <div className="login-panel">
        <label>NAME</label>
        <input type="text" name="username" placeholder="Please enter your name" value={this.state.username} onChange={this.handleChange}/>
        <button type="submit" disabled={this.state.username===''} onClick={(e) => this.props.onLogin(this.state.username, e)}>Login</button>
      </div>
  	)
  }
}

export default Login;