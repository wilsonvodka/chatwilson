var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('client'));

app.get('/its-on', function(req, res){
  res.status(200).send('El servidor esta ON y esta respondiendo');
});

var messages = [{
  id: 1,
  text: 'Bienvenido al chat privado de NodeJs y SocketIO',
  nickname: 'ChatBot'
}];

io.on('connection', function(socket){
  console.log("Conexión del cliente: " + socket.handshake.address + ". Correcta.");

  socket.emit('messages',messages);

  socket.on('add-message', function(data){
    messages.push(data);

    io.sockets.emit('messages', messages);
  });

});

server.listen(7077,function(){
  console.log('El Servidor está funcionando en http://localhost:7077');
});
