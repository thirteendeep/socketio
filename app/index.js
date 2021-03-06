var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var colors = require('colors');
var path = require('path');
var user = [];
var userIp = 0;
//var five = require("johnny-five");

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function(req, res){
  if (!user) {
      res.sendFile(path.join(__dirname, '/../views/login.html'));
  }
  else {
      res.sendFile(path.join(__dirname, '/../views/index.html'));
  }
});



io.on('connection', function(socket){
    var socketId = socket.id;
    userIp = socket.request.connection.remoteAddress;
    io.emit('code', '(nodeBot) new user: '+ userIp);
});

http.listen(3000, "0.0.0.0",  function(){
    console.log('listening on *:3000');

});


io.on('connection', function(socket){

    socket.on('user', function(pwd){
        if (pwd === "soleil43") {
              user = true;
        }
        else if (pwd === "logout") {
            user = false;
        }
    });

    socket.on('code', function(codeId){

      switch(codeId) {
          case 'get-status':
              io.emit('code', "("+ userIp +") status ok");
              break;
          case 'killapp':
              if (codeId == 1) {
                  io.emit('code', "close application");
                  process.exit(1);
              }
              else {
                io.emit('code', "Password is required");
              }
              break;
          default:
              io.emit('code', 'Unknow code: ' +  codeId);
      }
    });
});
