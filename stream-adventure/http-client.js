var request = require('request');

var endpoint = 'http://localhost:8099';
var req = request.post(endpoint);

process.stdin.pipe(req).pipe(process.stdout);
