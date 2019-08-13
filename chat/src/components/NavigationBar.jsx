import React, { Component } from 'react';

class NavigationBar extends Component {
  render() {
  	return (
  	  <div className="navbar">
  	  	<span className="greeting">Welcome, {this.props.loginUser}</span>
  	    <button type="submit" className="logout" onClick={this.props.onLogout} >Logout</button>
  	  </div>
  	)
  }
}

export default NavigationBar;