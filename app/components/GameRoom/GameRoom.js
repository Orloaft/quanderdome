import styles from "./GameRoom.module.scss";
import socketService from "../../services/socketService";
import { useState, useEffect } from "react";
import { QuestionComponent } from "../QuestionComponent/QuestionComponent";

export const GameRoom = ({
  question,
  leaveLobby,
  roomId,
  answers,
  correct,
}) => {
  const [time, setTime] = useState(null);

  const submitAnswer = (answer, roomId) => {
    console.log("answer sent");
    socketService.socket.emit(
      "submit_answer",
      answer,
      roomId,
      socketService.socket.id
    );
  };

  useEffect(() => {
    socketService.socket.on("tick", (time) => {
      setTime(time);
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
          answers={answers}
          question={question}
          roomId={roomId}
          correct={correct}
        />
      )}
    </>
  );
};
