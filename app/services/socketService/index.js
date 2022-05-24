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
  async showRooms() {
    return new Promise((rs, rj) => {
      this.socket.emit("show_rooms", this.socket.id);
      this.socket.on("show_rooms_response", (rooms) => {
        rs(rooms);
      });
    });
  }
  async joinGameRoom(socket, roomId, credentials) {
    return new Promise((rs, rj) => {
      socket.emit("join_room", roomId, credentials);
      socket.on("room_joined", (room) => {
        rs(true);
      });
      socket.on("room_join_error", ({ error }) => rj(error));
    });
  }
}

export default new SocketService();
