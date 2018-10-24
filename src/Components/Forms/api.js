import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:5000');
function subscribeToTimer(cb) {
  socket.on('subscribeToTimer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
}


function chatMessage(msg, cb) {
  socket.emit('chat message', msg); //to server
  socket.on('chat message', d => cb(null, d)); // from client
}


export { subscribeToTimer, chatMessage };