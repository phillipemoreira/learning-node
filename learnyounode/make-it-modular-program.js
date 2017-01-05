var mymodule = require('./mymodule.js');

var dir = process.argv[2];
var filter = process.argv[3];

mymodule(dir, filter, function(err, files){
  if (err){
    console.log(err);
  }

  for (var i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});
