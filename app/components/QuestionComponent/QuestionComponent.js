import styles from "../GameRoom/GameRoom.module.scss";
import { v4 as uuidv4 } from "uuid";
import socketService from "../../services/socketService";

export const QuestionComponent = ({
  answers,
  question,
  submitAnswer,
  roomId,
  correct,
}) => {
  return (
    <div className={styles.question}>
      <span>{question.category}</span>
      <span>{question.question}</span>
      <ul>
        {question.incorrect_answers.map((answer) => {
          return (
            <button
              //   className={
              //     answers.includes(answer) ? styles.answered : styles.answer
              //   }
              key={uuidv4()}
              onClick={() => {
                submitAnswer(answer, roomId);
              }}
              //   disabled={answers.includes(answer)}
            >
              {answer}
            </button>
          );
        })}
        <button
          //   className={
          //     answers.includes(question.correct_answer)
          //       ? styles.answered
          //       : styles.answer
          //   }
          onClick={() => {
            socketService.socket.emit(
              "question_answered",
              roomId,
              socketService.socket.id
            );
          }}
        >
          {correct}
        </button>
      </ul>
    </div>
  );
};
