var concat = require('concat-stream');

var cc = concat(function (body) {
    var content = body.toString();
    console.log(content.split('').reverse().join(''));
});

process.stdin.pipe(cc);
