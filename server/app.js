const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('../complete/lecture6_15/'));
app.use(express.static('../libs/'));
app.use(express.static('../assets/factory'));
app.use(express.static('../libs/three/jsm/'));
app.get('/',function(req, res) {
    res.sendFile(__dirname + '../complete/lecture6_15/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

  
http.listen(3000, function(){
    console.log("Listening on port 3000");
})