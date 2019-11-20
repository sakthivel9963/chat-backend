const http = require('http');
const io = require('socket.io')(http);

io.on('connection', socket => {
  console.log(socket);
  console.log('a user connected');
});

module.exports = io;
