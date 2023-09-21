var http = require('http');
var dt = require('./paginadomedico');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write (dt.myDateTime());
  res.end();
}).listen(5004);
