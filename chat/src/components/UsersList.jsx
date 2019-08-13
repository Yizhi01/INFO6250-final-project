import React, { Component } from 'react';

class UsersList extends Component {
  render() {
    const userInfo = this.props.users.map((user) => 
      <li key={user} >
        <div className="user">
          <span className="username">{user}</span>
        </div>
      </li>
    );
    return(
      <ul className="user-list">
        {userInfo}
      </ul>
    );
  }
};

export default UsersList;