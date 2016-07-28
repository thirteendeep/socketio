var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var colors = require('colors');
var five = require("johnny-five");
var board = new five.Board();

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});


io.on('connection', function(socket){
  socket.on('code', function(msg){
    console.log('message: ' + msg);
    if (msg == 1) {
        console.log('OMG Rainbows!'.green);
    }
    else {
        console.log('Unknow code'.inverse);
    }
  });
});


//
// board.on("ready", function() {
//
//   // Create a standard `led` component instance
//   var led = new five.Led(13);
//
//   // "blink" the led in 500ms
//   // on-off phase periods
//   led.blink(500);
// });
