var http = require('http');
var dt = require('./cadastro');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("cadastro da isa:" + dt.myDateTime());
  res.end();
}).listen(5003);
