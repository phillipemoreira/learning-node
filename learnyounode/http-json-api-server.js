var http = require('http');
var url = require('url');
var strftime = require('strftime');

var port_number = process.argv[2];

function parseTime(time){
    return{
        hour : Number(strftime('%H', time)),
        minute : Number(strftime('%M', time)),
        second : Number(strftime('%S', time)),
    };
};

function unixTime(time){
    return {"unixtime" : time.getTime()};
};

var server = http.createServer(function(req, res) {
    if (req.method == "GET"){

        var parsed_url = url.parse(req.url, true);
        var path = parsed_url.pathname;
        var query = parsed_url.query;

        if (query.iso){
            var date = new Date(query.iso);

            res.writeHead('200', {'Content-Type' : 'application/json'});

            switch (path) {
                case '/api/parsetime':
                    res.write(JSON.stringify(parseTime(date)));
                    break;
                case '/api/unixtime':
                    res.write(JSON.stringify(unixTime(date)));
                    break;
                default:
            }
        } else {
            res.writeHead('500')
            res.write('You must provide a date query string.\n');
        }

        res.end();
    }
    else{
        res.writeHead('500', {});
        res.end('Send me a GET\n');
    }
});

server.listen(port_number);
