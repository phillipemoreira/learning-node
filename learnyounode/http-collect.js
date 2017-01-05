var hyperquest = require('hyperquest')
var bl = require('bl');

var url = process.argv[2];

hyperquest(url).pipe(bl(function (err, data) {
  if (err){
    return console.error(err);
  }

  data = data.toString();
  console.log(data.length);
  console.log(data);
}));
