import socketService from "../socketService";
class gameService {
  timer = null;
  answers = null;
  question = null;
  lifeTotal = 100;
  questionArray = null;
  async startGame(roomId) {
    return new Promise((rs, rj) => {
      socketService.socket.emit("game_start", roomId);
      // socketService.socket.on("game_start_response", (questions, socketId) => {
      //   this.questionArray = questions;
      //   this.question = questions[0];
      //   rs(this.question);
      // });
    });
  }
  async nextRound(room) {
    return new Promise((rs, rj) => {
      socketService.socket.emit("round_end", room, socketService.socket.id);
      socketService.socket.on("round_end_response", (round) => {
        console.log("ending round");
        this.question = this.questionArray[round];
        rs(round);
      });
    });
  }
}

export default new gameService();
