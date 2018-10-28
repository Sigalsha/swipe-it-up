var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

let gameProperties = {
  users :  [{user}, {user}, {user}, {user}],
  usersCnt : 0,
  gameState : 'pending',
  shots:[]
}

io.on('connection', (socket) => {
  //console.log('a user connected');
  gameProperties.usersCnt++;

  socket.on('game properties', () => {
    socket.emit('game properties', gameProperties);
  });

  socket.on('new user', (userName) => {
    console.log(`new user joined ${userName}`);
    let obj = {name:userName,id:'', shot: {}, score: 0};
    gameProperties.users.push(obj);
    io.emit('new user', gameProperties.users);
  });

  socket.on('user shot', (shot) => {
    gameProperties.shots.push(shot);
    console.log('shot: '+JSON.stringify(gameProperties.shots[gameProperties.shots.length-1]));
    io.emit('user shot', gameProperties.shots[gameProperties.shots.length-1]);
  });

  socket.on('update state', (state) => {
    console.log('state: '+state);
    gameProperties.gameState = state
    io.emit('update state', gameProperties.gameState);
  });

  socket.on('chat message', (msg) => {
    console.log('client send ', msg);
    io.emit('chat message', msg); //it should be io and no socket!!!!!
  });
  
  socket.on('subscribeToTimer', (interval) => {
    // console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      socket.emit('subscribeToTimer', new Date());
    }, interval);
  });
});

//tell socket.io to start listening for clients
const port = process.env.PORT || 5000;
io.listen(port);
console.log('listening on port ', port);


// let usersCnt = 0;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

// // app.get('/', function(req, res){
// //   res.sendFile(__dirname + '/public/index.html');
// // });


// io.on('connection', function(socket){
//   console.log('a user connected');
//   usersCnt++;
//   socket.broadcast.emit('new user',`${usersCnt} are connected`);
//   socket.emit('new user', `welcome`); 

//   // when chat message event sends we console log the msg
//   socket.on('chat message', function(msg){
//     console.log('message: ' + msg);
//     io.emit('chat message', msg);
//   });

//   socket.on('broadcast', function(msg){
//     io.emit('broadcast', msg);
//     // console.log('message: ' + msg);
//   });

//   // add also console log in case of disconnect 
//   socket.on('disconnect', function(){
//     usersCnt--;
//     socket.broadcast.emit('new user',`${usersCnt} are connected`);
//     console.log('user disconnected');
//   });
// });

// app.listen(port, () => console.log(`Listening on port ${port}`));