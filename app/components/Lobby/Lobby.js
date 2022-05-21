import styles from "./Lobby.module.scss";
import socketService from "../../services/socketService";
import { useState } from "react";

export const Lobby = ({ roomId }) => {
  const [chat, setChat] = useState([]);

  async function messageSubmit(e) {
    e.preventDefault();

    return new Promise((rs, rj) => {
      socketService.socket.emit("room_message", roomId, {
        body: e.target.message.value,
        id: socketService.socket.id,
      });
      rs();
    }).then(() => {
      e.target.message.value = "";
    });
  }
  return (
    <>
      <form
        className={styles.chat}
        onSubmit={(e) => {
          messageSubmit(e);
        }}
      >
        <span className={styles.chat__label}> send a message</span>
        <input
          className={styles.chat__input}
          type="text"
          name="message"
          autoComplete="off"
        ></input>
        <button className={styles.chat__submit} type="submit">
          send
        </button>

        <button
          onClick={() => {
            socketService.socket.emit("leave_room", roomId);
            setChat([]);
            setRoomId(null);
          }}
        >
          Leave room
        </button>
      </form>{" "}
    </>
  );
};
