const users = [];
const messages = [];

function addMessage({sender, timestamp, text}){
  messages.push({sender, timestamp, text});
}

function addUser({username}) {
  if(users.indexOf(username) === -1){
    users.push(username);
  }
}

function deleteUser({username}){
  const userIndex = users.indexOf(username);
  users.splice(userIndex, 1);
}

const chat = {
  users,
  messages,
  addMessage,
  addUser,
  deleteUser,
};

module.exports = chat;