import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000');

//socket.on('chat message', (d) => {console.log(`msg: ${d}`)}); // from server

// in disconnenct - due to to reconnect retry + re-connect
// accumulate  stay the same object socket so it keeps the same
// disconnect and reconnect will have the same handlers 
// will stay connect and than in reconnect i will have the same 
//handlers again and again and so on
// relevant only to users    

function subscribeToTimer(cb) {
  socket.on('subscribeToTimer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
}

function chatMessage(msg, cb) {
  //socket.emit('chat message', msg); //to server
}


function newUserJoin(msg, cb) {
  socket.emit('new user', msg); //to server
  socket.on('new user', d => cb(null, d)); // from server
}

function updateGameStatus(status, cb) {
  socket.emit('update state', status); //to server
  socket.on('update state', d => cb(null, d)); // from server
}

function gameProperties(msg, cb) {
  socket.emit('game properties', msg); //to server
  socket.on('game properties', d => cb(null, d)); // from server
}


export { subscribeToTimer, chatMessage , newUserJoin ,gameProperties, updateGameStatus, socket };