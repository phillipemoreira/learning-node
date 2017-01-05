var split = require('split');
var through = require('through2');

count = 0;

var tr = through(function(line, _, next){
    count ++;
    var content = line.toString();
    this.push(count % 2 === 0
        ? content.toUpperCase() + '\n'
        : content.toLowerCase() + '\n');

    next();
});

process.stdin
    .pipe(split())
    .pipe(tr)
    .pipe(process.stdout);
