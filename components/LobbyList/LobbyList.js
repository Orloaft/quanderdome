import styles from "./LobbyList.module.scss";
import socketService from "../../services/socketService";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Lobby } from "../Lobby/Lobby";
import { GameRoom } from "../GameRoom/GameRoom";

import { ScoreBoard } from "../ScoreBoard/ScoreBoard";

export const LobbyList = ({ credentials }) => {
  const [roomList, setRoomList] = useState([]);
  // const [joining, setJoining] = useState(false);
  // const [roomId, setRoomId] = useState(null);
  const [question, setQuestion] = useState(null);
  const [scoreBoard, setScoreBoard] = useState(null);
  const [options, setOptions] = useState(null);
  const [roomInstance, setRoomInstance] = useState({});
  function gameStart() {
    socketService.socket.emit("game_start", socketService.roomInstance.id);
  }
  const leaveLobby = () => {
    socketService.socket.emit(
      "leave_room",
      socketService.room,
      credentials,
      socketService.socket.id
    );
  };
  async function refresh() {
    socketService.showRooms().then((rooms) => {
      setRoomList(rooms);
    });
  }
  async function createRoom(e) {
    e.preventDefault();
    socketService.socket.emit(
      "create_room",
      e.target.roomInput.value,
      credentials,
      socketService.socket.id
    );
  }
  const leaveScoreBoard = () => {
    refresh();
    setScoreBoard(null);
    setRoomInstance(false);
  };
  useEffect(() => {
    socketService.connect();
  }, []);

  useEffect(() => {
    socketService.socket.on("update_state_response", (instance) => {
      const newState = { ...instance };
      socketService.roomInstance = instance;
      setRoomInstance(newState);
    });
    socketService.socket.on("create_room_response", (roomId) => {
      console.log("created new room with id " + roomId);
      socketService.room = roomId;
    });
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
      setRoomInstance(false);
    });
    socketService.socket.on("trivia_error", () => {
      alert("uh oh, trivia is having difficulties. please try again.");
    });
    socketService.socket.on("game_end", (game) => {
      console.log("game ended");
      leaveLobby();
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
        (!roomInstance.id && ( //if no room id exist, render lobby form and list
          <>
            <span className={styles.username}>
              Signed in as <span>{credentials}</span>
            </span>
            <form
              className={styles.join_lobby}
              onSubmit={(e) => {
                createRoom(e);
              }}
            >
              <span> Create room</span>
              <input
                className={styles.input}
                type="text"
                name="roomInput"
                autoComplete="off"
              ></input>
              <button className={styles.button} type="submit">
                Create
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
                        if (room.joinable) {
                          socketService.joinGameRoom(
                            socketService.socket,
                            room.id,
                            credentials
                          );
                        }
                      }}
                      className={styles.lobbies__list_item}
                      key={uuidv4()}
                    >
                      <span>{room.name}</span>
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
        (roomInstance.currentTrivia.question ? ( //render lobby if question was not provided by server
          <GameRoom leaveLobby={leaveLobby} credentials={credentials} />
        ) : (
          <Lobby
            gameStart={gameStart}
            credentials={credentials}
            leaveLobby={leaveLobby}
          />
        ))
      )}
    </>
  );
};
