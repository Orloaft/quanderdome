import styles from "./LobbyList.module.scss";
import socketService from "../../services/socketService";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Lobby } from "../Lobby/Lobby";
export const LobbyList = () => {
  const [roomList, setRoomList] = useState([]);
  const [joining, setJoining] = useState(false);
  const [roomId, setRoomId] = useState(null);

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
            <span> create room</span>
            <input type="text" name="roomInput"></input>
            <button type="submit" disabled={joining}>
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
      )) || <Lobby room={roomId} />}
    </>
  );
};
