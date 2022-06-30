import styles from "./GameRoom.module.scss";
import socketService from "../../services/socketService";
import { useState, useEffect } from "react";
import { QuestionComponent } from "../QuestionComponent/QuestionComponent";
import { HealthBar } from "../HealthBar/HealthBar";

export const GameRoom = ({
  question,
  leaveLobby,
  room,
  options,
  credentials,
}) => {
  const [time, setTime] = useState(null);
  const [score, setScore] = useState(0);
  const submitAnswer = (answer, roomId) => {
    socketService.socket.emit(
      "submit_answer",
      answer,
      socketService.room,
      credentials
    );
  };

  useEffect(() => {
    // socketService.socket.on("tick", (time) => {
    //   setTime(time);
    // });
    // socketService.socket.on("update_score", (player) => {
    //   if (player.id === credentials) {
    //     setScore(player.score);
    //   }
    // });
    // socketService.socket.on("game_end", () => {
    //   leaveLobby();
    // });
    // // listen for when a players life is depleted and if that player is this client. leave lobby
    // socketService.socket.on("player_dead", (game) => {
    //   if (game.players.find((player) => player.id === credentials).life < 1) {
    //     leaveLobby();
    //   }
    // });
  }, []);
  return (
    <>
      <h1 className={styles.time}>{room.time}</h1>

      {room.currentTrivia && (
        <QuestionComponent
          submitAnswer={submitAnswer}
          currentTrivia={room.currentTrivia}
          // question={question}
          roomId={room.id}
          // options={options}
        />
      )}
      <div className={styles.score_container}>
        <HealthBar
          health={
            room.scores.find((player) => player.name === credentials).life
          }
        />
        <span className={styles.score}>
          {room.scores.find((player) => player.name === credentials).score +
            " points"}
        </span>
      </div>
    </>
  );
};
