import styles from "../GameRoom/GameRoom.module.scss";
import { v4 as uuidv4 } from "uuid";
import socketService from "../../services/socketService";
import { useEffect, useState } from "react";
import he from "he";
export const QuestionComponent = ({
  // question,
  submitAnswer,
  roomId,
  // options,
  currentTrivia,
}) => {
  //function to remove special characters (noSpecialCharacters)
  const nsc = (str) => {
    return he.decode(str);
  };
  const answers = currentTrivia.chosenAnswers;

  useEffect(() => {
    socketService.socket.on("submit_answer_response", (answers) => {
      setAnswers(answers);
    });
  }, []);
  return (
    <div className={styles.question}>
      <span>{nsc(currentTrivia.question.category)}</span>
      <span>{nsc(currentTrivia.question.question)}</span>
      <ul>
        {currentTrivia.question &&
          currentTrivia.options.map((answer) => {
            return (
              <button
                className={
                  answers.includes(answer) ? styles.answered : styles.answer
                }
                key={uuidv4()}
                onClick={() => {
                  submitAnswer(answer, roomId);
                }}
                disabled={answers.includes(answer)}
              >
                {nsc(answer)}
              </button>
            );
          })}
      </ul>
    </div>
  );
};
