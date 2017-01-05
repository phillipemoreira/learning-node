var trumpet = require('trumpet');
var through = require('through2');
tr = trumpet();

function write(buf, _, next){
    this.push(buf.toString().toUpperCase());
    next();
}

var loud = tr.select('.loud').createStream();
loud.pipe(through(write)).pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);
