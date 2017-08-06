var filterFiles = require("./module.js");

function displayFiles(error, list) {
    if (error) {
        throw error;
    } else {
        list.forEach(function(file) {
            console.log(file);
        });
    }
}

filterFiles(process.argv[2], process.argv[3], displayFiles);