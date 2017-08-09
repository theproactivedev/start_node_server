var http = require("http");
// use bl to get ALL THE DATA EVENTS
var bufferList = require("bl");
var count = 0;
var result = [];

function printResults() {
  for(var i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
}

function loadData(index) {
   http.get(process.argv[2 + index], function(response) {
     
    response.pipe(bufferList(function(error, data) {
      
      if (error) {
        return console.error(error);
      }
      
      result.push(data.toString());
      ++count;
      
        if (count === 3) {
          printResults();
        }
    }));
    
  });

}


for (var i = 0; i < 3; i++) {
 loadData(i);
}