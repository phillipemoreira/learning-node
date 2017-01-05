var http = require('http');
var fs = require('fs');
var path = require('path');

var port_number = process.argv[2];
var file_path = process.argv[3];

var server = http.createServer(function(req, res){
  //console.log('got a request');

  var ext_name = path.extname(file_path);

  switch (ext_name) {
      case '.html':
        content_type = 'text/html';
        break;
      case '.txt':
        content_type = 'text/plain';
        break;
      default: content_type = 'text/html';
  }

  var stream = fs.readFile(file_path, function(err, content){
      if(err){
          res.writeHead(500);
          res.end('Sorry, check with the site admin for error: ' +  err.code);
      } else{
          res.writeHead(200, {'Content-Type': content_type});
          res.end(content);
      }
  });

});
server.listen(port_number);
