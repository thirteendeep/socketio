var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var colors = require('colors');
var five = require("johnny-five");
//var board = new five.Board();




app.get('/', function(req, res){
    res.sendfile('index.html');
});

io.on('connection', function(socket){
    var socketId = socket.id;
 var clientIp = socket.request.connection.remoteAddress;

 console.log("New connection: "+ clientIp);
 io.emit('code', 'New connection: '+ clientIp);
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});


io.on('connection', function(socket){
    socket.on('code', function(msg){
        console.log('message: ' + msg);
        if (msg == 1) {
            console.log('OMG Rainbows!'.green);
            io.emit('code', "Start application");
            process.exit(1);
        }
        else {
            console.log('Unknow code'.inverse);
            io.emit('code', 'Unknow code');
        }
    });
});

setInterval(function() {
    io.emit('code', 'Ping');
}, 2000);

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
