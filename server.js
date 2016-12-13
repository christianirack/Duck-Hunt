var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
/*=========================================================
=            Establece el directorio estático (lo hace público)            =
=========================================================*/
app.use(express.static(path.join(__dirname, '/dist')));
app.set('views', path.join(__dirname, '/source/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index.ejs',{ mUser: 0 });
});

app.get('/:id', function(req, res){
  var id = req.params.id;
  res.render('index.ejs',{ mUser: id });
});
/*===============================================
=            Socket.io configuración            =
===============================================*/
io.on('connection', function(socket){
  console.log('a user connected');
  io.on('disconnect', function(){
    console.log('user disconnected_');
  });
  socket.on('servidorX', function(e){
     socket.broadcast.emit('clienteX', e);
     console.log('Recibiendo cambios desde el cliente');
  });

  socket.on('dispararPato', function(e){
     socket.broadcast.emit('bala', e);
     console.log('Recibiendo un disparo');
  });
});
/*===============================================
=            Cargar servidor            =
===============================================*/
http.listen(3000, function(){
  console.log('listening on *:3000');
});