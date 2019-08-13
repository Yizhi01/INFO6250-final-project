import React, { Component } from 'react';

class ErrorMessage extends Component {
  render() {
  	return(
  	  <div className="error">
  	    <p>{this.props.errMsg}</p>
  	  </div>
  	);
  }
};

export default ErrorMessage;