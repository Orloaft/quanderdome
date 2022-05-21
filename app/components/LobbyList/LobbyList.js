import styles from "./LobbyList.module.scss";
import socketService from "../../services/socketService";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Lobby } from "../Lobby/Lobby";
import { GameRoom } from "../GameRoom/GameRoom";

export const LobbyList = () => {
  const [roomList, setRoomList] = useState([]);
  const [joining, setJoining] = useState(false);
  const [roomId, setRoomId] = useState(null);
  const [gameRound, setGameRound] = useState(null);

  const endRound = () => {
    setGameRound(null);
  };

  const leaveLobby = () => {
    setRoomId(null);
  };
  async function joinRoom(e) {
    e.preventDefault();

    return new Promise((rs, rj) => {
      socketService.joinGameRoom(
        socketService.socket,
        e.target.roomInput.value
      );
      setRoomId(e.target.roomInput.value);

      rs();
    }).then(() => {
      e.target.roomInput.value = "";
    });
  }
  socketService.socket.on("room_list", (list) => {
    setRoomList(list);
  });
  socketService.socket.on("trivia_response", (trivia) => {
    setGameRound(trivia);
  });
  socketService.socket.on("round_end", () => {
    setGameRound(null);
    setRoomId(null);
  });
  return (
    <>
      {(!roomId && (
        <>
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
            <button className={styles.button} type="submit" disabled={joining}>
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
                      socketService.joinGameRoom(socketService.socket, room);
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
          </section>
        </>
      )) ||
        (gameRound ? (
          <GameRoom gameRound={gameRound} endRound={endRound} />
        ) : (
          <Lobby leaveLobby={leaveLobby} roomId={roomId} />
        ))}
    </>
  );
};
