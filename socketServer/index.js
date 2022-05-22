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
let submittedAnswers = [];
let correct_answer = null;
let questionArray = [];
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

  socket.on("show_rooms", (socketId) => {
    io.to(socketId).emit("show_rooms_response", getActiveRooms(io));
    console.log("showing rooms:" + getActiveRooms(io));
  });
  socket.on("join_room", function (roomId) {
    socket.join(roomId);
    socket.emit("room_joined", roomId);
    console.log("joined room: " + roomId);
  });
  socket.on("room_message", (roomId, msg) => {
    io.to(roomId).emit("room_message_received", msg);
  });
  socket.on("leave_room", (room) => {
    socket.leave(room);
    socket.emit("leave_room_response");
    console.log("leaving room: " + room);
  });
  socket.on("game_start", async (gameConfig, room, socketId) => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=${gameConfig.range}&category=${gameConfig.category}&difficulty=${gameConfig.difficulty}&type=multiple`
      )
      .then((result) => {
        io.to(room).emit("game_start_response", result.data.results, socketId);
        questionArray = result.data.results;
        correct_answer = questionArray[roundCount].correct_answer;
      })
      .then(() => {
        roundTimer(io, room);
      });
  });
  socket.on("round_end", (room, socketId) => {
    roundCount++;
    console.log("correct answer from " + socketId);
    submittedAnswers = [];
    io.to(room).emit("round_end_response", questionArray[roundCount], socketId);
  });

  socket.on("submit_answer", (answer, room, socketId) => {
    submittedAnswers.push(answer);
    if (answer === correct_answer) {
      roundCount++;
      console.log("correct answer from " + socketId);
      submittedAnswers = [];
      if (questionArray.length === roundCount) {
        io.to(room).emit("game_end");
        roundCount = 0;
      } else {
        console.log("ending round");
        correct_answer = questionArray[roundCount].correct_answer;
        io.to(room).emit("round_end_response", questionArray[roundCount]);
      }
    }
    io.to(room).emit("submit_answer_response", submittedAnswers);
  });
  socket.on("last_question_answered", (room) => {
    io.to(room).emit("game_end");
    roundCount = 0;
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
