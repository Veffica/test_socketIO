import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static('../public'));
app.use(express.static('../public/complete/lecture6_15'));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, '../public/complete/lecture6_15/index.html'));
  });


io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    socket.on("enviar", (response) => {
        console.log(response +" essa reposta veio do servidor"); // "got it"
      });
  });


server.listen(3000, function(){
    console.log("Listening on port 3000");
})