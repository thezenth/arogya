module.exports = function(io) {

  // handle connection
  io.sockets.on('connection', function (socket) {
      console.log('client connect');
      socket.on('echo', function (data) {
          console.log(data);
      });

      /* OTHER SOCKETS */
      // generally, these should be a series of .on events which are related
      require('./food-queries')(socket);
      require('./meal-crud')(socket);
      require('./food-crud')(socket);
      require('./symptom-crud')(socket);
  });



}
