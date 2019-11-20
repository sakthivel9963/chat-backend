const socketIo = require('socket.io');

function init(server) {
  const io = socketIo(server);
  io.on('connection', socket => {
    console.log(`${socket.id} user connected`);

    socket.emit('connected', socket.id);

    socket.on('disconnect', () => {
      console.log(`${socket.id} user disconnected`);
    });
  });
}

module.exports = { init };
