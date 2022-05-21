import styles from "./GameRoom.module.scss";
import socketService from "../../services/socketService";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const GameRoom = ({ gameRound, endGame, roomId }) => {
  const [time, setTime] = useState(null);
  const [question, setQuestion] = useState(gameRound[0]);
  const [answers, setAnswers] = useState([]);
  const round = gameRound.indexOf(question);

  const submitAnswer = (answer, roomId) => {
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
    socketService.socket.on("round_end", (round) => {
      setQuestion(gameRound[round]);
    });
    socketService.socket.on("submit_answer_response", (answer, socketId) => {
      if (
        answer === question.correct_answer &&
        socketService.socket.id === socketId
      ) {
        if (question === gameRound[gameRound.length - 1]) {
          socketService.socket.emit("last_question_answered", roomId);
        } else {
          socketService.socket.emit(
            "question_answered",
            roomId,
            socketService.socket.id
          );
        }
      } else {
        const newAnswers = [...answers];
        newAnswers.push(answer);
        setAnswers(newAnswers);
      }
    });
  }, []);
  return (
    <>
      <h1 className={styles.time}>{time}</h1>
      {question && (
        <div className={styles.question}>
          <span>{question.category}</span>
          <span>{question.question}</span>
          <ul>
            {question.incorrect_answers.map((answer) => {
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
            <button
              className={
                answers.includes(question.correct_answer)
                  ? styles.answered
                  : styles.answer
              }
              onClick={() => {
                submitAnswer(question.correct_answer, roomId);
              }}
            >
              {question.correct_answer}
            </button>
          </ul>
        </div>
      )}
    </>
  );
};
