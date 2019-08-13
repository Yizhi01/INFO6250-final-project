import React, {Component} from "react";

class MessagesList extends Component {
  render() {

  	const messageInfo = this.props.messages.map((message, index) => 
      <li key={index} className={` ${this.props.loginUser===message.sender?'active':''}`}>
        <div className="message">
          <div className="meta-info">
            <div className="sender-info">
              <span className="username">{message.sender}</span>
            </div>
            <div className="message-info">
              <span className="timestamp">{message.timestamp}</span>
            </div>
          </div>
          <p className="message-text">{message.text}</p>
        </div>
	  </li>
    );
  
	return (
	  <ul className="message-list">
	    {messageInfo}
	  </ul>
    );
  }

};

export default MessagesList;