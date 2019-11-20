const http = require('http');
const app = require('./src/app');
const socket = require('./src/socket');

const server = http.createServer(app);

socket.init(server);

server.listen(process.env.PORT, () => {
  console.log(
    `app listening on -> http://${process.env.HOST}:${process.env.PORT}`
  );
});
