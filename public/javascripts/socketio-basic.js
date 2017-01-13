/* These can be put in an external js file included in all pages */
var socket = io();

function emitTest(msg) {
  socket.emit('echo', msg);
}

function emitValue(type, data) {
  socket.emit(type, data)
}
