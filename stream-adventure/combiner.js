var combine = require('stream-combiner');
var splt = require('split');

module.exports = function () {
    return combine(
        // read newline-separated json,
        // group books into genres,
        // then gzip the output
    )
}