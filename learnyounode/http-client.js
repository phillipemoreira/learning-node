var http = require('http');

requestUrl = process.argv[2];

http.get(requestUrl, function(res){
  res.setEncoding('utf-8');
  res.on('data', console.log);
  res.on('data', console.error);
}).on('error', console.error);
