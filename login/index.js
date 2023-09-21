var http = require('http');
var dt = require('./login.js');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Login é legal: " + dt.myDateTime());
  res.end();
}).listen(5010);

