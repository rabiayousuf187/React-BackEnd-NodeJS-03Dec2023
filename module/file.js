// var fs = require('fs');
// Common use for the File System module:

// Read files
// Create files
// Update files
// Delete files
// Rename files
 

// update pkg.json script
// "start": "nodemon file.js"

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8082);