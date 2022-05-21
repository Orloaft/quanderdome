import { io, Socket } from "socket.io-client";
//class component for handling clients instance of socket connection and exported to any components that need to interact with said instance.
class SocketService {
  // socket instance that will persist across all components
  socket = null;
  //method to initiate socket instance
  connect(url) {
    return new Promise((rs, rj) => {
      this.socket = io(url);

      if (!this.socket) return rj();

      this.socket.on("connect", () => {
        rs(this.socket);
      });

      this.socket.on("connect_error", (err) => {
        console.log("Connection error: ", err);
        rj(err);
      });
    });
  }
  async joinGameRoom(socket, roomId) {
    return new Promise((rs, rj) => {
      const data = { room: roomId, socket: socket };
      socket.emit("join_room", data.room);
      socket.on("room_joined", (room) => {
        rs(true);
      });
      socket.on("room_join_error", ({ error }) => rj(error));
    });
  }
}

export default new SocketService();