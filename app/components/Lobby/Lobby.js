import styles from "./Lobby.module.scss";
import socketService from "../../services/socketService";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { GameConfig } from "../GameConfig/GameConfig";
export const Lobby = ({ roomId, leaveLobby }) => {
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
  socketService.socket.on("room_message_received", (msg) => {
    let updatedChat = [...chat];
    updatedChat.unshift(msg);
    setChat(updatedChat);
  });
  return (
    <>
      <section className={styles.chat}>
        <form
          className={styles.chat__form}
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
              leaveLobby();
            }}
          >
            Leave lobby
          </button>
        </form>
        <ul className={styles.chat__box}>
          {chat.map((msg) => {
            return <li key={uuidv4()}>{msg.id + " says: " + msg.body}</li>;
          })}
        </ul>
        <GameConfig />
      </section>
    </>
  );
};
