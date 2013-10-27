var WebSocketServer = require('ws').Server
var wss = new WebSocketServer({host: '127.0.0.1',port: 8080});

var cnt = 0;

function increment() {
  ++cnt;
}

wss.on('connection', function(ws) {
  console.log('client verbunden...');

//  cnt = 0;
  var interval = setInterval(increment, 1000);


});
