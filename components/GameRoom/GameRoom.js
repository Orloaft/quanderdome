import styles from "./GameRoom.module.scss";
import socketService from "../../services/socketService";
import { useContext } from "react";
import { QuestionComponent } from "../QuestionComponent/QuestionComponent";
import { HealthBar } from "../HealthBar/HealthBar";
import { ScoreBox } from "../ScoreBox/ScoreBox";
import { UserContext } from "../../pages";

export const GameRoom = () => {
  const userContext = useContext(UserContext);
  const { username } = userContext.user;
  const { roomInstance } = socketService;
  const submitAnswer = (answer) => {
    socketService.socket.emit(
      "submit_answer",
      answer,
      roomInstance.id,
      username
    );
  };

  return (
    <>
      <h1 className={styles.time}>{roomInstance.time}</h1>

      {roomInstance.currentTrivia && (
        <>
          <div className={styles.round_count}>
            Round {roomInstance.roundCount}/{roomInstance.trivia.length}
          </div>
          <ScoreBox />
          <QuestionComponent submitAnswer={submitAnswer} />
        </>
      )}
      <div className={styles.score_container}>
        <HealthBar
          health={
            roomInstance.scores.find((player) => player.name === username).life
          }
        />
        <span className={styles.score}>
          {roomInstance.scores.find((player) => player.name === username)
            .score + " points"}
        </span>
      </div>
    </>
  );
};
