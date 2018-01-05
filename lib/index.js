import http from 'http';
import fs from 'fs';

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('./src/views/index.html', null, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.write('File Not Found');
    } else {
      res.write(data);
    }

    res.end();
  });
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
