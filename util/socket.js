/** @format */

let io;

module.exports = {
  init: (httpServer) => {
    io = require("socket.io")(httpServer, {
      pingTimeout: 60000,
      cors: {
        origin: "http://localhost:3000",
      },
    });
    return io;
  },
  getIO: () => {
    if (!io) {
      throw new Error("socket.io is not initialized");
    }
    return io;
  },
};
