const http = require("http");
const express = require("express");
const next = require("next");
let roomInstances = [];
const axios = require("axios");
const { uuid } = require("uuidv4");

//returns room instance that matches a roomId
const fetchRoomInstance = (roomId) => {
  return roomInstances.find((instance) => instance.name === roomId);
};
// function that allows next.js to handle the server side code
async function startServer() {
  const nextJsApp = next({ dev: true, conf: { reactStrictMode: true } });
  await nextJsApp.prepare();
  const app = express();
  app.all("*", nextJsApp.getRequestHandler());

  const server = http.createServer(app);
  const io = require("socket.io")(server);

  // for counting down until round ends
  const roundTimer = (roomId, time) => {
    // Set the date we're counting down to
    const countDownDate = new Date().getTime() + time * 1000;
    let room = roomInstances.find((room) => room.id === roomId);
    // Update the count down every 1 second
    const x = setInterval(function () {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;
      room.time = Math.floor(distance / 1000);
      io.to(room.id).emit("update_state_response", room);
      if (!room.scores.find((player) => player.life > 0)) {
        io.to(room.id).emit("game_end", room);
        roomInstances = roomInstances.filter((room) => room.id !== roomId);
        clearInterval(x);
      }
      if (!room) {
        clearInterval(x);
      }
      // If the count down is finished, end the game
      if (distance <= 0) {
        io.to(room.id).emit("game_end", room);
        roomInstances = roomInstances.filter((room) => room.id !== room.id);
        clearInterval(x);
      }
    }, 1000);
  };
  //endpoint for initiating client connection
  io.on("connection", (socket) => {
    //endpoint for getting list of active lobbies
    socket.on("show_rooms", (socketId) => {
      io.to(socketId).emit("show_rooms_response", roomInstances);
    });
    socket.on("create_room", async (nameInput, credentials, socketId) => {
      console.log("creating room" + nameInput + " by " + credentials);
      let roomId = uuid();
      await socket.join(roomId);
      console.log("created and joined room" + roomId);
      io.to(roomId).emit("create_room_response", roomId);
      roomInstances.push({
        id: roomId,
        name: nameInput,
        players: [credentials],
        joinable: true,
        settings: {
          questions: 0,
          difficulty: "easy",
          time: "60",
          category: 22,
        },
        trivia: [],
        scores: [],
        roundCount: 0,
        time: null,
        currentTrivia: {
          question: null,
          chosenAnswers: [],
          options: [],
          playerWantSkip: [],
        },
      });
      io.to(socketId).emit(
        "update_state_response",
        roomInstances.find((instance) => instance.id === roomId)
      );
      io.to(socketId).emit(
        "player_list",
        roomInstances.find((instance) => instance.id === roomId)
      );
    });
    //endpoint for joining lobbies
    socket.on("join_room", function (roomId, credentials) {
      socket.join(roomId);

      socket.emit("room_joined", roomId);
      let roomInstance = roomInstances.find((room) => room.id === roomId);
      if (
        roomInstance &&
        roomInstance.players.find((player) => player !== credentials)
      ) {
        roomInstance.players.push(credentials);
        console.log("joined room: " + roomInstance.name);
      } //else {
      //   roomInstances.push({ id: roomId, players: [credentials] });
      //   console.log("created room: " + roomId);
      // }
      io.to(roomId).emit("update_state_response", roomInstance);
      io.to(roomId).emit("player_list", roomInstance);
    });
    socket.on("room_message", (roomId, msg) => {
      //endpoint for sending messages in your lobby
      io.to(roomId).emit("room_message_received", msg);
    });
    //disconnect from lobby
    socket.on("leave_room", async (roomId, credentials, socketId) => {
      console.log(roomId);
      let exitedRoom = roomInstances.find((instance) => instance.id === roomId);

      if (exitedRoom) {
        await socket.leave(exitedRoom.id);
        io.to(socketId).emit("leave_room_response");
        exitedRoom.players = exitedRoom.players.filter(
          (player) => player !== credentials
        );
        if (exitedRoom.players.length === 0) {
          roomInstances = roomInstances.filter((room) => room.id !== roomId);
          io.to(socketId).emit("show_rooms_response", roomInstances);
        } else {
          io.to(roomId).emit("update_state_response", exitedRoom);
          console.log("leaving room: " + exitedRoom.name);
        }
      }
    });
    socket.on("update_time", (time, id) => {
      roomInstances.find((room) => room.id === id).settings.time = time;
      io.to(id).emit(
        "update_state_response",
        roomInstances.find((room) => room.id === id)
      );
    });
    socket.on("update_range", (range, id) => {
      roomInstances.find((room) => room.id === id).settings.questions = range;
      io.to(id).emit(
        "update_state_response",
        roomInstances.find((room) => room.id === id)
      );
    });
    socket.on("update_difficulty", (difficulty, id) => {
      roomInstances.find((room) => room.id === id).settings.difficulty =
        difficulty;
      io.to(id).emit(
        "update_state_response",
        roomInstances.find((room) => room.id === id)
      );
    });
    socket.on("update_category", (category, id) => {
      roomInstances.find((room) => room.id === id).settings.category = category;
      io.to(id).emit(
        "update_state_response",
        roomInstances.find((room) => room.id === id)
      );
    });
    socket.on("update_canSkip", (skip, id) => {
      roomInstances.find((room) => room.id === id).settings.canSkip = skip;
      console.log(skip);
      io.to(id).emit(
        "update_state_response",
        roomInstances.find((room) => room.id === id)
      );
    });
    //make call to Trivia db based on config passed from client and initiate game instance
    socket.on("game_start", async (roomId) => {
      let room = roomInstances.find((room) => room.id === roomId);
      room.joinable = false;

      axios
        .get(
          `https://opentdb.com/api.php?amount=${room.settings.questions}&category=${room.settings.category}&difficulty=${room.settings.difficulty}&type=multiple`
        )
        .then((result) => {
          console.log(result.data);
          if (result.data.results[0]) {
            console.log("games started in room: " + room.name);
            room.trivia = result.data.results;
            room.scores = room.players.map((player) => {
              return { name: player, score: 0, life: 100 };
            });
            let newRound = {
              question: room.trivia[0],
              chosenAnswers: [],
              options: [
                ...room.trivia[0].incorrect_answers,
                room.trivia[0].correct_answer,
              ].sort(() => Math.random() - 0.5),
              playerWantSkip: [],
            };
            room.currentTrivia = newRound;
            roundTimer(roomId, room.settings.time);
            // const shuffled = [
            //   ...newGame.questionArray[newGame.roundCount].incorrect_answers,
            //   newGame.questionArray[newGame.roundCount].correct_answer,
            // ].sort(() => Math.random() - 0.5);

            // io.to(room).emit("game_start_response", newGame, shuffled);
            // gameInstances.push(newGame);
          } else {
            console.log("triviaDB req failed");
            io.to(roomId).emit("trivia_error");
          }
        })
        .then(() => {
          io.to(roomId).emit("update_state_response", room);
        });
    });

    socket.on("submit_answer", (answer, roomId, credentials) => {
      let game = roomInstances.find((room) => room.id === roomId);
      if (game) {
        let player = game.scores.find((player) => player.name === credentials);
        game.currentTrivia.chosenAnswers.push(answer);

        //if answer matches correct answer proceed to next round with another question
        if (answer === game.currentTrivia.question.correct_answer) {
          player.score += 1;
          game.roundCount += 1;
          game.currentTrivia.chosenAnswers = [];
          game.currentTrivia.playerWantSkip = [];
          //if on the last question of set. end game
          if (game.trivia.length === game.roundCount) {
            io.to(game.id).emit("game_end", game);
            io.in(game.id).socketsLeave(game.id);
            roomInstances = roomInstances.filter((room) => room.id !== roomId);
          } else {
            console.log("ending round");
            game.chosenAnswers = [];
            game.playerWantSkip = [];
            const shuffled = [
              ...game.trivia[game.roundCount].incorrect_answers,
              game.trivia[game.roundCount].correct_answer,
            ].sort(() => Math.random() - 0.5);
            game.currentTrivia.question = game.trivia[game.roundCount];
            game.currentTrivia.options = shuffled;
            io.to(game.id).emit("update_state_response", game);
          } // submit response to handle wrong answers
        } else {
          player.life -= 10;
          io.to(game.id).emit("update_health", player);
          io.to(game.id).emit("update_state_response", game);
          //check if player depleted their hp
          if (player.life <= 0) {
            player.score = 0;
            // io.to(game.id).emit("player_dead", player);
            // end game instance if all players perish
          }
        }
      }
    });
    socket.on("skip_question", (credentials, roomId) => {
      let room = roomInstances.find((room) => room.id === roomId);
      if (room) {
        let alivePlayers = room.scores.filter((player) => player.life > 0);
        if (
          !room.currentTrivia.playerWantSkip.find(
            (player) => player === credentials
          )
        ) {
          room.currentTrivia.playerWantSkip.push(credentials);
        }

        if (room.currentTrivia.playerWantSkip.length === alivePlayers.length) {
          room.roundCount += 1;
          console.log("ending round");
          room.currentTrivia.chosenAnswers = [];
          room.currentTrivia.playerWantSkip = [];
          if (room.trivia.length === room.roundCount) {
            io.to(room.id).emit("game_end", room);
            io.in(room.id).socketsLeave(room.id);
            roomInstances = roomInstances.filter((room) => room.id !== roomId);
          } else {
            const shuffled = [
              ...room.trivia[room.roundCount].incorrect_answers,
              room.trivia[room.roundCount].correct_answer,
            ].sort(() => Math.random() - 0.5);
            room.currentTrivia.question = room.trivia[room.roundCount];
            room.currentTrivia.options = shuffled;
            io.to(room.id).emit("update_state_response", room);
          }
        }
      }
    });
  });

  server.listen(process.env.PORT);
}
startServer();
