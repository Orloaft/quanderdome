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
const roundTimer = require("./services/gameService");
let roundCount = 0;
app.use(cors());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
function getActiveRooms(io) {
  // Convert map into 2D list:
  // ==> [['4ziBKG9XFS06NdtVAAAH', Set(1)], ['room1', Set(2)], ...]
  const arr = Array.from(io.sockets.adapter.rooms);
  // Filter rooms whose name exist in set:
  // ==> [['room1', Set(2)], ['room2', Set(2)]]
  const filtered = arr.filter((room) => !room[1].has(room[0]));
  // Return only the room name:
  // ==> ['room1', 'room2']
  const res = filtered.map((i) => i[0]);
  return res;
}
function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

io.on("connection", (socket) => {
  console.log("connected with socket " + socket.id);
  socket.emit("room_list", getActiveRooms(io));
  socket.on("public_message", function (msg) {
    socket.emit("chat_message", msg);
  });
  socket.on("join_room", function (roomId) {
    socket.join(roomId);
    socket.emit("room_joined", roomId);
    socket.emit("room_list", getActiveRooms(io));
  });
  socket.on("room_message", (roomId, msg) => {
    io.to(roomId).emit("room_message_received", msg);
  });
  socket.on("leave_room", (room) => {
    socket.leave(room);
  });
  socket.on("trivia_request", async (gameConfig, room) => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=${gameConfig.range}&category=${gameConfig.category}&difficulty=${gameConfig.difficulty}&type=multiple`
      )
      .then((result) => {
        io.to(room).emit("trivia_response", result.data.results);
      })
      .then(() => {
        roundTimer(io, room);
      });
  });
  socket.on("question_answered", async (room, socketId) => {
    roundCount++;
    console.log("correct answer from " + socketId);
    io.to(room).emit("round_end", roundCount);
  });
  socket.on("last_question_answered", async (room) => {
    io.to(room).emit("game_end");
  });
  socket.on("submit_answer", (answer, room, socketId) => {
    io.to(room).emit("submit_answer_response", answer, socketId);
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
