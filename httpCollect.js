var http = require("http");
// use bl to get ALL THE DATA EVENTS
var bufferList = require("bl");



http.get(process.argv[2], function(response) {
  
  var letters = 0;
  var message = "";
  
  response.pipe(bufferList(function(error, data) {
    
    if (error) {
      return console.error(error);
    }
  
    message = data.toString();
    letters = message.length;
    
      console.log(letters);
  console.log(message); 
  }));

  
});