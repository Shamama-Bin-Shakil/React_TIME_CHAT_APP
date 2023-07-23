const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");
const http = require("http");
const port = 5000;
const app = express();

app.use(cors());

const user = [{}];

app.get("/", (req, res) => {
  res.json("wecoem");
});

const server = http.createServer(app);

const io = socketIO(server);

io.on("connection", (socket) => {
  console.log("NEW CONNECTION");

  socket.on("joined", ({ name }) => {
    user[socket.id] = name;
    // console.log(`${name} has joined`);
    socket.broadcast.emit("userJoined", {
      user: "Admin",
      message: `${user[socket.id]} has joined`,
    });
    socket.emit("welcome", {
      user: "Admin",
      message: `Welcome to the Chat`,
    });
  });

  socket.on("message", ({ id, message }) => {
    io.emit("sendMessage", { user:user[id], message, id });
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit("userLeft", {
      user: "Admin",
      message: `${user[socket.id]} has left`,
    });
    console.log("user left");
  });
});

server.listen(port, () => {
  console.log(`SERVER IS LISTENING http://localhost:${port}`);
});
