import styles from "./Lobby.module.scss";
import socketService from "../../services/socketService";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { GameConfig } from "../GameConfig/GameConfig";
export const Lobby = ({ roomId, leaveLobby, gameStart }) => {
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
        <div className={styles.chat__container}>
          <label className={styles.chat__box_label} htmlFor="chat">
            Chat
          </label>
          <ul className={styles.chat__box} name="chat">
            {chat.map((msg) => {
              return <li key={uuidv4()}>{msg.id + " says: " + msg.body}</li>;
            })}
          </ul>
          <form
            className={styles.chat__form}
            onSubmit={(e) => {
              messageSubmit(e);
            }}
          >
            <span className={styles.chat__label}> Send a message</span>
            <input
              className={styles.input}
              type="text"
              name="message"
              autoComplete="off"
            ></input>
            <button className={styles.button} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className={styles.chat__container}>
          <GameConfig roomId={roomId} gameStart={gameStart} />
          <button
            className={styles.button}
            onClick={() => {
              socketService.socket.emit("leave_room", roomId);
              setChat([]);
              leaveLobby();
            }}
          >
            Leave lobby
          </button>
        </div>
      </section>
    </>
  );
};
