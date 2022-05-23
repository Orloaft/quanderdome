const app = require("express")();
const cors = require("cors");
const axios = require("axios");
const http = require("http").Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: ["http://localhost:3000", "http://localhost:9000"],
  },
});
const port = process.env.PORT || 9000;
const roundTimer = require("./services/roundTimer");
const GameService = require("./services/gameService");

// array of game objects that hold relevant data to a single gameroom instance
const gameInstances = [];

app.use(cors());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
// functions that returns array of active game lobbies
function getActiveRooms(io) {
  const arr = Array.from(io.sockets.adapter.rooms);
  //filter out extra rooms that each socket starts in
  const filtered = arr.filter((room) => !room[1].has(room[0]));
  // Return only the room name:
  const res = filtered.map((i) => i[0]);
  return res;
}

//returns game instance that matches a roomId
const fetchGameInstance = (roomId) => {
  return gameInstances.find((instance) => instance.roomId === roomId);
};
//endpoint for initiating client connection
io.on("connection", (socket) => {
  console.log("connected with socket " + socket.id);
  //endpoint for getting list of active lobbies
  socket.on("show_rooms", (socketId) => {
    io.to(socketId).emit("show_rooms_response", getActiveRooms(io));
  });
  //endpoint for joining lobbys
  socket.on("join_room", function (roomId) {
    socket.join(roomId);
    socket.emit("room_joined", roomId);
    console.log("joined room: " + roomId);
  });
  socket.on("room_message", (roomId, msg) => {
    io.to(roomId).emit("room_message_received", msg);
  });
  //disconnect from lobby
  socket.on("leave_room", (room) => {
    socket.leave(room);
    socket.emit("leave_room_response");
    console.log("leaving room: " + room);
  });
  //make call to Trivia db based on config passed from client and initiate game instance
  socket.on("game_start", async (gameConfig, room, socketId) => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=${gameConfig.range}&category=${gameConfig.category}&difficulty=${gameConfig.difficulty}&type=multiple`
      )
      .then((result) => {
        let newGame = new GameService();
        newGame.roomId = room;
        const players = [...io.sockets.adapter.rooms.get(room)];
        newGame.players = players.map((player) => {
          return { id: player, life: 100, score: 0 };
        });
        newGame.questionArray = result.data.results;
        newGame.roundCount = 0;
        const shuffled = [
          ...newGame.questionArray[newGame.roundCount].incorrect_answers,
          newGame.questionArray[newGame.roundCount].correct_answer,
        ].sort(() => Math.random() - 0.5);

        io.to(room).emit("game_start_response", newGame, shuffled);
        gameInstances.push(newGame);
      })
      .then(() => {
        roundTimer(io, room, gameConfig.time);
      });
  });

  socket.on("submit_answer", (answer, room, socketId) => {
    let game = fetchGameInstance(room);
    let player = game.players.find((player) => player.id === socketId);
    game.chosenAnswers.push(answer);
    //if answer matches correct answer proceed to next round with another question
    if (answer === game.questionArray[game.roundCount].correct_answer) {
      console.log("correct answer");
      player.score += 1;
      game.roundCount += 1;
      console.log(game.questionArray.length, game.roundCount);
      //if on the last question of set. end game
      if (game.questionArray.length === game.roundCount) {
        io.to(room).emit("game_end");
        game = null;
      } else {
        console.log("ending round");
        game.chosenAnswers = [];
        const shuffled = [
          ...game.questionArray[game.roundCount].incorrect_answers,
          game.questionArray[game.roundCount].correct_answer,
        ].sort(() => Math.random() - 0.5);
        io.to(room).emit("update_score", player);
        io.to(room).emit(
          "round_end_response",
          game.questionArray[game.roundCount],
          shuffled
        );
      } // submit response to handle wrong answers
    } else {
      player.life -= 10;
      //check if player depleted their hp
      if (player.life > 0) {
        io.to(room).emit("update_hp", player);
        io.to(room).emit("submit_answer_response", game.chosenAnswers);
      } else {
        io.to(room).emit("game_end");
      }
    }
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
