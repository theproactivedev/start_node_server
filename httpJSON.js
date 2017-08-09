var http = require("http");
var url = require("url");

var server = http.createServer(function(request, response) {
  
  var result = url.parse(request.url, true);
  var date = new Date(result.query.iso);
  
  if (result.pathname === "/api/parsetime") {
      var timeObj = {
        "hour" : date.getHours(),
        "minute" : date.getMinutes(),
        "second" : date.getSeconds()
      };
  } else if (result.pathname === "/api/unixtime") {
    var timeObj = {
      "unixtime" : date.getTime()
    };
  }
  
  if (timeObj) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(timeObj));
  }
   

});

server.listen(Number(process.argv[2]));