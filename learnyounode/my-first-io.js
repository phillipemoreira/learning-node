// 3 - My first I/O
var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var lines = buf.toString().split('\n');
console.log(lines.length - 1);
