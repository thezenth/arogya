module.exports = function(io) {

  io.sockets.on('connection', function (socket) {
      console.log('client connect');
      socket.on('echo', function (data) {
          console.log(data);
      });
  });

}
