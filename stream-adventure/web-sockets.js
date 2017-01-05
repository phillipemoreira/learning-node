var socket = require('websocket-stream');
var stream = socket('ws://localhost:8099');
stream.write('hello\n');
