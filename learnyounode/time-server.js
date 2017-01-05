var net = require('net');
var strftime = require('strftime');

var portNumber = process.argv[2];

var server = net.createServer(function(socket){
  // console.log('client connected');

  var date = new Date();
  var formattedDate = strftime('%Y-%m-%d %H:%M\n', date)

  socket.end(formattedDate);

  // socket.on('end', function() {
  //   console.log('client disconnected');
  // });
});
server.listen(portNumber);
