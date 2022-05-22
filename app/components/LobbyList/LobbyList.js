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
  const gameRound = null;
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);

  const leaveLobby = () => {
    socketService.socket.emit("leave_room", roomId);
  };
  async function joinRoom(e) {
    e.preventDefault();
    setJoining(true);

    return new Promise((rs, rj) => {
      socketService.joinGameRoom(
        socketService.socket,
        e.target.roomInput.value
      );
      setRoomId(e.target.roomInput.value);

      rs();
    }).then(() => {
      e.target.roomInput.value = "";
      setJoining(false);
    });
  }
  useEffect(() => {
    socketService.socket.on("leave_room_response", () => {
      socketService.socket.emit("timer_off", roomId);
    });
    socketService.socket.on("trivia_response", (trivia) => {
      gameRound = trivia;
      setQuestion(gameRound[0]);
    });
    socketService.socket.on("round_end", (round) => {
      console.log("ending round");
      setQuestion(gameRound[round]);
    });
    socketService.socket.on("game_end", () => {
      setQuestion(null);
      setRoomId(null);
    });
    socketService.socket.on("submit_answer_response", (answer, socketId) => {
      const newAnswers = [...answers];
      newAnswers.push(answer);
      setAnswers(newAnswers);
    });
  }, []);

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
        (question ? (
          <GameRoom
            question={question}
            correct={question.correct_answer}
            leaveLobby={leaveLobby}
            roomId={roomId}
            asnwers={answers}
          />
        ) : (
          <Lobby leaveLobby={leaveLobby} roomId={roomId} />
        ))}
    </>
  );
};
