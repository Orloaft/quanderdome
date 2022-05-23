import styles from "../GameRoom/GameRoom.module.scss";
import { v4 as uuidv4 } from "uuid";
import socketService from "../../services/socketService";
import { useEffect, useState } from "react";
import gameService from "../../services/gameService";

export const QuestionComponent = ({ question, submitAnswer, roomId }) => {
  const [answers, setAnswers] = useState([]);
  const answerArr = [...question.incorrect_answers, question.correct_answer];
  useEffect(() => {
    socketService.socket.on("submit_answer_response", (answers) => {
      setAnswers(answers);
    });
  }, []);
  return (
    <div className={styles.question}>
      <span>{question.category}</span>
      <span>{question.question}</span>
      <ul>
        {answerArr.map((answer) => {
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
              {answer}
            </button>
          );
        })}
      </ul>
    </div>
  );
};
