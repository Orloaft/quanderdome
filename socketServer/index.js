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

const GameService = require("./services/gameService");
const roomInstances = [];
// array of game objects that hold relevant data to a single gameroom instance
const gameInstances = [];
//timer for keeping game time
const roundTimer = (room, time) => {
  // Set the date we're counting down to
  const countDownDate = new Date().getTime() + time * 1000;

  // Update the count down every 1 second
  const x = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    io.to(room).emit("tick", Math.floor(distance / 1000));

    // If the count down is finished, write some text
    if (distance < 0) {
      io.to(room).emit("game_end", fetchGameInstance(room));
      clearInterval(x);
    }
  }, 1000);
};

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
  //endpoint for joining lobbies
  socket.on("join_room", function (roomId, credentials) {
    socket.join(roomId);
    socket.emit("room_joined", roomId);
    let roomInstance = roomInstances.find((room) => room.id === roomId);
    if (roomInstance) {
      roomInstance.players.push(credentials);
      console.log("joined room: " + roomId);
    } else {
      roomInstances.push({ id: roomId, players: [credentials] });
      console.log("created room: " + roomId);
    }
    io.to(roomId).emit(
      "player_list",
      roomInstances.find((room) => room.id === roomId)
    );
  });
  socket.on("room_message", (roomId, msg) => {
    //endpoint for sending messages in your lobby
    io.to(roomId).emit("room_message_received", msg);
  });
  //disconnect from lobby
  socket.on("leave_room", (room, credentials) => {
    console.log(roomInstances);
    let exitedRoom = roomInstances.find((instance) => instance.id === room);
    socket.leave(room);
    socket.emit("leave_room_response");
    console.log(exitedRoom.players);
    exitedRoom.players = exitedRoom.players.filter(
      (player) => player !== credentials
    );
    io.to(room).emit("player_list", exitedRoom);
    console.log("leaving room: " + room);
  });
  //make call to Trivia db based on config passed from client and initiate game instance
  socket.on("game_start", async (gameConfig, room) => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=${gameConfig.range}&category=${gameConfig.category}&difficulty=${gameConfig.difficulty}&type=multiple`
      )
      .then((result) => {
        console.log("games started in room: " + room);
        let newGame = new GameService();
        newGame.roomId = room;
        newGame.players = gameConfig.playerList.map((player) => {
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
        roundTimer(room, gameConfig.time);
      });
  });

  socket.on("submit_answer", (answer, room, credentials) => {
    let game = fetchGameInstance(room);
    console.log(game);
    console.log(credentials);
    let player = game.players.find((player) => player.id === credentials);
    game.chosenAnswers.push(answer);
    //if answer matches correct answer proceed to next round with another question
    if (answer === game.questionArray[game.roundCount].correct_answer) {
      console.log("correct answer");
      player.score += 1;
      game.roundCount += 1;
      console.log(game.questionArray.length, game.roundCount);
      //if on the last question of set. end game
      if (game.questionArray.length === game.roundCount) {
        io.to(room).emit("game_end", game);
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
        io.to(room).emit("game_end", game);
      }
    }
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
