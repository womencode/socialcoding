var config = require('./config'),
  express = require('express'),
  app = express(),
  server = require('http').Server(app);
  //io = require('socket.io')(server);

// Server code structure based on this best practices blog post:
// http://www.terlici.com/2014/08/25/best-practices-express-structure.html
//test
app.use(express.static('./dist'));
app.use(express.static('./src'));
app.use(express.static('./public'));
app.use(require('./controllers'));

server.listen(config.port, function () {
  console.log("Server has started http://localhost:%d", config.port);
});

/*io.on('connection', function (socket) {
  socket.on('start-sync', function (data) {
    console.log('join ' + data.room);
    socket.join(data.room);
  });

  socket.on('end-sync', function (data) {
    console.log('leave ' + data.room);
    socket.leave(data.room);
  });

  socket.on('sync', function (data) {
    console.log('sync ' + data.room);
    socket.broadcast.to(data.room).emit('sync', data);
  });

  socket.emit('news', { hello: 'world' });

  socket.on('my other event', function (data) {
    console.log(data);
  });
});*/
