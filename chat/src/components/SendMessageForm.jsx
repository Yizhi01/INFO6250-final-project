import React, { Component }from "react";

class SendMessageForm extends Component {
  render() {
    return (
      <div className="to-send-form">
        <input type="hidden" name="username" value={this.props.loginUser}/>
        <input className="to-send" name="text" placeholder="Type your message" onChange={this.props.onUpdateMessage} value={this.props.inputText} autonfocus="true"/>
        <button type="submit" disabled={this.props.inputText===''} onClick={this.props.onSubmit}>Submit</button>
      </div>
    );
  }
};

export default SendMessageForm;