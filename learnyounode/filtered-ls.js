var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var filter = process.argv[3];

fs.readdir(dir, function(err, files){
  if (err){
    throw err;
  }

  for (var i = 0; i < files.length; i++) {
    var extension = path.extname(files[i]);
    if (extension === '.' + filter){
      console.log(files[i]);
    }
  }
});
