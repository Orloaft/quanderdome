import styles from "./GameRoom.module.scss";
import socketService from "../../services/socketService";
import { useState, useEffect } from "react";
import { QuestionComponent } from "../QuestionComponent/QuestionComponent";
import { HealthBar } from "../HealthBar/HealthBar";
import { ScoreBox } from "../ScoreBox/ScoreBox";

export const GameRoom = ({ credentials }) => {
  const { roomInstance } = socketService;
  const submitAnswer = (answer) => {
    socketService.socket.emit(
      "submit_answer",
      answer,
      roomInstance.id,
      credentials
    );
  };

  return (
    <>
      <h1 className={styles.time}>{roomInstance.time}</h1>

      {roomInstance.currentTrivia && (
        <>
          <ScoreBox credentials={credentials} />
          <QuestionComponent
            submitAnswer={submitAnswer}
            credentials={credentials}
          />
        </>
      )}
      <div className={styles.score_container}>
        <HealthBar
          health={
            roomInstance.scores.find((player) => player.name === credentials)
              .life
          }
        />
        <span className={styles.score}>
          {roomInstance.scores.find((player) => player.name === credentials)
            .score + " points"}
        </span>
      </div>
    </>
  );
};
