import { Server } from "socket.io";

const counter = (req, res) => {
  if (!res.socket.server.io) {
    console.log("*First use, starting socket.io");

    const io = new Server(res.socket.server);

    let activeSessions = 0;

    io.on("connection", (socket) => {
      activeSessions++;
      io.emit("activeSessions", activeSessions);

      socket.on("disconnect", () => {
        activeSessions--;
        io.emit("activeSessions", activeSessions);
      });
    });

    res.socket.server.io = io;
  }

  res.end();
};

export default counter;