const socketIo = require('socket.io');

let userDetails = [];

function init(server) {
  const io = socketIo(server);
  io.on('connection', socket => {
    socket.emit('connected', socket.id);

    socket.on('sendUserDetails', data => {
      userDetails.push(data);
      io.emit('getUserDetails', userDetails);
    });

    socket.on('disconnect', () => {
      userDetails = userDetails.filter(value => value.userId !== socket.id);
      io.emit('getUserDetails', userDetails);
      console.log(`${socket.id} user disconnected`);
    });
  });
}

module.exports = { init };
