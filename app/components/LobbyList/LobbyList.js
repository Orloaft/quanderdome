import styles from "./LobbyList.module.scss";
import socketService from "../../services/socketService";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Lobby } from "../Lobby/Lobby";
import { GameRoom } from "../GameRoom/GameRoom";
import gameService from "../../services/gameService";
import { ScoreBoard } from "../ScoreBoard/ScoreBoard";

export const LobbyList = ({ credentials }) => {
  const [roomList, setRoomList] = useState([]);
  const [joining, setJoining] = useState(false);
  const [roomId, setRoomId] = useState(null);
  const [question, setQuestion] = useState(null);
  const [scoreBoard, setScoreBoard] = useState(null);
  const [options, setOptions] = useState(null);

  async function gameStart(config) {
    gameService.startGame(config, roomId, socketService.socket.id);
  }

  const leaveLobby = () => {
    socketService.socket.emit("leave_room", roomId);
    refresh();
  };
  async function refresh() {
    socketService.showRooms().then((rooms) => {
      setRoomList(rooms);
    });
  }
  async function joinRoom(e) {
    e.preventDefault();
    setJoining(true);

    return new Promise((rs, rj) => {
      socketService.joinGameRoom(
        socketService.socket,
        e.target.roomInput.value,
        credentials
      );
      setRoomId(e.target.roomInput.value);

      rs();
    }).then(() => {
      e.target.roomInput.value = "";
      setJoining(false);
    });
  }
  const leaveScoreBoard = () => {
    refresh();
    setScoreBoard(null);
  };
  useEffect(() => {
    socketService.socket.on("game_start_response", (game, shuffled) => {
      setOptions(shuffled);
      setQuestion(game.questionArray[0]);
    });
    socketService.socket.on("round_end_response", (question, shuffled) => {
      console.log("ending round");
      setOptions(shuffled);
      setQuestion(question);
    });
    socketService.socket.on("leave_room_response", () => {
      setRoomId(null);
      socketService.socket.emit("timer_off", roomId);
    });

    socketService.socket.on("game_end", (game) => {
      setQuestion(false);
      setRoomId(false);
      refresh();
      setScoreBoard(game);
    });
  }, []);

  return (
    <>
      {scoreBoard ? (
        <ScoreBoard
          handleLeave={leaveScoreBoard}
          game={scoreBoard}
          credentials={credentials}
        /> //display scoreboard when returning from game
      ) : (
        (!roomId && ( //if no room id exist, render lobby form and list
          <>
            <span className={styles.username}>signed in as {credentials}</span>
            <form
              className={styles.join_lobby}
              onSubmit={(e) => {
                joinRoom(e);
              }}
            >
              <span> Create room</span>
              <input
                className={styles.input}
                type="text"
                name="roomInput"
                autoComplete="off"
              ></input>
              <button
                className={styles.button}
                type="submit"
                disabled={joining}
              >
                {joining ? "Creating..." : "Create"}
              </button>
            </form>
            <section className={styles.lobbies}>
              <span className={styles.lobbies__heading}>Room list</span>
              <ul className={styles.lobbies__list}>
                {roomList.map((room) => {
                  return (
                    <li
                      onClick={(e) => {
                        e.preventDefault();
                        socketService.joinGameRoom(
                          socketService.socket,
                          room,
                          credentials
                        );
                        setRoomId(room);
                      }}
                      className={styles.lobbies__list_item}
                      key={uuidv4()}
                    >
                      <span>{room}</span>
                    </li>
                  );
                })}
              </ul>
              <button
                onClick={() => {
                  refresh();
                }}
                className={styles.button}
              >
                Show rooms
              </button>
            </section>
          </>
        )) ||
        (question ? ( //render lobby if question was not provided by server
          <GameRoom
            question={question}
            options={options}
            leaveLobby={leaveLobby}
            roomId={roomId}
            credentials={credentials}
          />
        ) : (
          <Lobby
            leaveLobby={leaveLobby}
            roomId={roomId}
            gameStart={gameStart}
            credentials={credentials}
          />
        ))
      )}
    </>
  );
};
