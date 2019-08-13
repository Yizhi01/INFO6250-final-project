import React, { Component } from 'react';
import './App.css';
import UsersList from "./components/UsersList";
import MessagesList from "./components/MessagesList";
import SendMessageForm from "./components/SendMessageForm";
import ErrorMessage from "./components/ErrorMessage";
import Login from "./components/Login";
import NavigationBar from "./components/NavigationBar";
import {refresh, sendMessage, getUserLogin, getUserLogout} from "./services";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: [],
      users: [],
      inputText: '',
      loginUser: '',
      errorMessage: '',
      isLoginPage: true
    };
  
    this.changeMessage = this.changeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(() =>{
      refresh()
      .then(data => {
        this.setState({messages: data.messages, users: data.users, errorMessage: ''})
      })
      .catch(error => this.setState({errorMessage: error}))
    }, 1000);
  }

  componentWillUnmount(){ 
    clearInterval(this.timer);
  }

  changeMessage(event) {
    this.setState({inputText: event.target.value});
  }

  handleSubmit() {
    sendMessage(this.state.loginUser, this.state.inputText)
    .then(data => {
      this.setState({messages: data.messages, inputText: '', errorMessage: ''})
    })
    .catch(error => this.setState({errorMessage: error}))
  }

  handleLogin(username) {
    getUserLogin(username)
    .then(data => {
      this.setState({loginUser:username, isLoginPage:false, users:data.users, messages:data.messages, errorMessage: ''})
    })
    .catch(error => this.setState({errorMessage: error}))
  }

  handleLogout(){
    getUserLogout(this.state.loginUser)
    .then(data => {
      this.setState({loginUser:'', isLoginPage:true, errorMessage: ''})
    })
    .catch(error => this.setState({errorMessage: error}))
  }

  render() {
  	if(this.state.isLoginPage){
  	  return(
  	    <div className="login-page">
          <Login onLogin={this.handleLogin} />
        </div>
  	  )
  	}
    return (
      <div className="chat-app">
        <div className="chat-page">
          <NavigationBar loginUser={this.state.loginUser}  onLogout={this.handleLogout} />
          <div className="display-panel">
            <UsersList users={this.state.users}/>
            <MessagesList messages={this.state.messages} loginUser={this.state.loginUser}/>
          </div>
          <SendMessageForm inputText={this.state.inputText} onUpdateMessage={this.changeMessage} onSubmit={this.handleSubmit} />
          <ErrorMessage errMsg={this.state.ErrorMessage} />
        </div>
      </div>
    );
  }

}

export default App;