var http = require('http');
var map = require('through2-map');

var port_number = process.argv[2];

var server = http.createServer(function(req, res) {

    if (req.method == "POST"){

        res.writeHead('200', {'Content-Type' : 'text/plain'});

        req.pipe(map(function(chunk){
            return chunk.toString().toUpperCase();
        })).pipe(res);

    }
    else{
        res.writeHead('500', {});
        res.end('Send me a POST\n');
    }
});

server.listen(port_number);
