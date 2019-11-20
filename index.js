const http = require('http');
const app = require('./src/app');
require('./src/socket');

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(
    `app listening on -> http://${process.env.HOST}:${process.env.PORT}`
  );
});
