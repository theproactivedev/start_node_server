var fs = require("fs");
var path = require("path");

module.exports = function(directory, extension, callback) {
    fs.readdir(directory, function(error, files) {
       if (error) {
           return callback(error);
       } else {
           var list = files.filter(function(file) {
               return path.extname(file) === "." + extension;
           });
           return callback(null, list);
       }
    });
};