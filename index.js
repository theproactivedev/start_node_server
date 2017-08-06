var http = require("http");

http.get(process.argv[2], function(response) {
    // if (error) throw error;
    response.setEncoding("utf8");
     
     var data = [];
   response.on("data", function(chunk) {
       data.push(chunk);
   });
   
   response.on("end", function() {
       data.forEach(function(datum) {
           console.log(datum);
       })
   })
});