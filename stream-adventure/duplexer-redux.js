var duplexer = require('duplexer2');
var through2 = require('through2');

module.exports = function (counter) {
	var countries = {};

	function write(buffer, encoding, next){
		countries[buffer.country] = (countries[buffer.country] || 0) + 1;
	    next();
	}

	function end(done){
	    counter.setCounts(countries);
	    done();
	}

	writable = through2.obj(write, end);
	return duplexer({objectMode: true}, writable, counter);
};
