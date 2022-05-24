import styles from "./GameRoom.module.scss";
import socketService from "../../services/socketService";
import { useState, useEffect } from "react";
import { QuestionComponent } from "../QuestionComponent/QuestionComponent";
import { HealthBar } from "../HealthBar/HealthBar";

export const GameRoom = ({
  question,
  leaveLobby,
  roomId,
  options,
  credentials,
}) => {
  const [time, setTime] = useState(null);
  const [score, setScore] = useState(0);
  const submitAnswer = (answer, roomId) => {
    console.log("answer sent");
    socketService.socket.emit("submit_answer", answer, roomId, credentials);
  };

  useEffect(() => {
    socketService.socket.on("tick", (time) => {
      setTime(time);
    });
    socketService.socket.on("update_score", (player) => {
      if (player.id === credentials) {
        setScore(player.score);
      }
    });
    socketService.socket.on("game_end", () => {
      leaveLobby();
    });
  }, []);
  return (
    <>
      <h1 className={styles.time}>{time}</h1>

      {question && (
        <QuestionComponent
          submitAnswer={submitAnswer}
          question={question}
          roomId={roomId}
          options={options}
        />
      )}
      <div className={styles.score_container}>
        <HealthBar />
        <span className={styles.score}>{score + " points"}</span>
      </div>
    </>
  );
};
