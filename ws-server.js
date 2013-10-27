var WebSocketServer = require('ws').Server
var wss = new WebSocketServer({host: '127.0.0.1',port: 8080});

var cnt = 0;
var interval_ms = 1000;

function increment() {
  ++cnt;
}

function sendCounter(ws) {
  ws.send(cnt.toString());
}


wss.on('connection', function(ws) {
  console.log('client verbunden...');

  var interval1 = setInterval(increment, interval_ms);
  var interval2 = setInterval(function() {
    sendCounter(ws);
  }, interval_ms);


});
