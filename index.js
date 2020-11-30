let port = process.env.PORT || 5000;
const http = require('http');
var fs   = require('fs');
var http_server = new http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(fs.readFileSync('./index.html', 'utf-8'));
}).listen(3000);
console.log('Server running at http://localhost:3000/');