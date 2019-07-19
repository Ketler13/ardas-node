const socketIO = require("socket.io");
const auth = require("socketio-auth");
const redis = require("socket.io-redis");
const client = require("redis").createClient();
const http = require("http");
const app = require("./app");
const { CONNECTION, MESSAGE } = require("./constants/socketEvents");
const sub = require("redis").createClient();

sub.subscribe("message_channel");

sub.on("message", function(channel, message) {
  console.log("sub channel " + channel + ": " + message);
  io.emit(MESSAGE, message);
});

const server = http.createServer(app);

const io = socketIO(server);
io.adapter(redis(/* { host: 'localhost', port: 6379 } */));

auth(io, {
  authenticate(socket, data, callback) {
    console.log("authentication", socket.id);
    callback(null, { id: "123" });
  },
  postAuthenticate(socket) {
    // socket.join("authenticated");
    // setTimeout(() => {
    //   socket.leave("authenticated");
    // }, 15000);
    client.lrange("messages", 0, -1, (error, messages) => {
      messages.forEach(m => socket.emit(MESSAGE, m));
    });
  },
  timeout: 1000
});

io.on(CONNECTION, socket => {
  socket.emit(MESSAGE, "hello");
  socket.on(MESSAGE, message => {
    client.rpush("messages", message, err => {
      if (err) {
        console.error("Error: ", err);
      } else {
        console.log("Added to list");
      }
    });
    socket.broadcast.emit(MESSAGE, message);
  });
  // socket.on(MESSAGE, message => io.to("authenticated").emit(MESSAGE, message));
});

server.listen(process.env.PORT || 3000);
