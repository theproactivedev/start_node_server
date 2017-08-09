var net = require("net");

var server = net.createServer(function(socket) {
  var date = new Date();
  
  var dateFormat = date.getFullYear() + "-" + ("0" + (date.getMonth()+1)).slice(-2) + 
  "-" + ("0" + date.getDate()).slice(-2);
  var timeFormat = ("0" + date.getHours()).slice(-2) + ":" + 
  ("0" + date.getMinutes()).slice(-2);
  
  var finalFormat = dateFormat + " " + timeFormat + "\n";
  
  socket.end(finalFormat);
  
});

server.listen(Number(process.argv[2]));