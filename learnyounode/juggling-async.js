var http = require('http')
var bl = require('bl');

var urls = [];
urls.push(process.argv[2]);
urls.push(process.argv[3]);
urls.push(process.argv[4]);

var contents = [];

read(urls.shift());

function read(url){
  http.get(url, function(res){
    res.pipe(bl(function (err, data) {
      if (err){
        return console.error(err);
      }

      next(data.toString());
    }));
  });
};

function next(data)
{
  contents.push(data);
  if (contents.length == 3){
    contents.forEach(function(entry) {
        console.log(entry);
    });
  } else {
    read(urls.shift());
  }
}
