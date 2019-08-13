const express = require('express');
const app = express();
const PORT = 4000;
const chat = require('./chat');

app.use(express.static('public'));

app.post('/chat', express.json(), (req, res) =>{
  const username = req.body.sender;
  const text = req.body.message;
  if(!username && !text){
  	res.status(400).json({error: `'username' and 'text' properties are required`});
  }else {
  	chat.addMessage({ sender: username, timestamp: new Date().toLocaleTimeString(), text: text});
    res.json({messages:chat.messages});
  }
});

app.get('/chat', function(req, res){
  res.json({messages: chat.messages, users: chat.users});
});

app.post('/login', express.json(), (req, res) => {
  const username = req.body.loginuser;
  chat.addUser({username:username});
  res.json({messages:chat.messages, users:chat.users});
});

app.post('/logout', express.json(), (req,res) =>{
  chat.deleteUser({username:req.body.loginuser});
  res.json({});
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));  