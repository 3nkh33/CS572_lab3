const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  // fs.readFile('./node.jpg', (err, data) => {
  //   if (err) throw err;

  //   res.end(data);
  // });

  const src = fs.createReadStream('./image.png');
  src.pipe(res);
});

server.listen(8000);
