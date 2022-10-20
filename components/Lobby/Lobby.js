import styles from "./Lobby.module.scss";
import socketService from "../../services/socketService";
import { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GameConfig } from "../GameConfig/GameConfig";
import { UserContext } from "../../pages";
export const Lobby = ({ leaveLobby, gameStart }) => {
  const userContext = useContext(UserContext);
  const [chat, setChat] = useState([]);
  const { roomInstance } = socketService;
  async function messageSubmit(e) {
    e.preventDefault();

    return new Promise((rs, rj) => {
      socketService.socket.emit("room_message", roomInstance.id, {
        body: e.target.message.value,
        id: userContext.user.username,
      });
      rs();
    }).then(() => {
      e.target.message.value = "";
    });
  }
  useEffect(() => {
    socketService.socket.on("room_message_received", (msg) => {
      let updatedChat = [...chat];
      updatedChat.push(msg);
      setChat(updatedChat);
    });
  });
  if (roomInstance) {
    return (
      <>
        <section className={styles.chat}>
          <div className={styles.chat__info}>
            <span>Lobby: {roomInstance.name}</span>
            <span>Players:</span>

            <ul className={styles.chat__player_list}>
              {roomInstance &&
                roomInstance.players.map((player) => {
                  return <li key={uuidv4()}>{player}</li>;
                })}
            </ul>
          </div>
          <div className={styles.chat__container}>
            <label className={styles.chat__box_label} htmlFor="chat">
              Chat
            </label>
            <ul className={styles.chat__box} name="chat">
              {chat.map((msg) => {
                return <li key={uuidv4()}>{msg.id + ": " + msg.body}</li>;
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
          <div
            className={
              styles.chat__container + " " + styles.chat__container_config
            }
          >
            <GameConfig gameStart={gameStart} />
            <button
              className={styles.button}
              onClick={() => {
                // socketService.socket.emit("leave_room", roomId, credentials);
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
  }
};
