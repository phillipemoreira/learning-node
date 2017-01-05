var duplexer = require('duplexer2');
var spawn = require('child_process').spawn;

module.exports = function (cmd, args) {
    // spawn the process and return a single stream
    var bat = spawn(cmd, args);
    // joining together the stdin and stdout here
    var duplex = duplexer(bat.stdin, bat.stdout);

    return duplex;
};
