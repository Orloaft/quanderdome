import styles from "../GameRoom/GameRoom.module.scss";
import { v4 as uuidv4 } from "uuid";
import socketService from "../../services/socketService";
import { useEffect, useContext } from "react";
import he from "he";
import { UserContext } from "../../pages";

export const QuestionComponent = ({ submitAnswer }) => {
  const userContext = useContext(UserContext);
  const { username } = userContext.user;
  //function to remove special characters (noSpecialCharacters)
  const nsc = (str) => {
    return he.decode(str);
  };
  let isEliminated = () => {
    if (
      socketService.roomInstance.scores.find(
        (player) => player.name === username
      ).life <= 0
    ) {
      return true;
    } else {
      return false;
    }
  };
  const { currentTrivia } = socketService.roomInstance;
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
                  submitAnswer(answer, socketService.roomInstance.id);
                }}
                disabled={answers.includes(answer) || isEliminated()}
              >
                {nsc(answer)}
              </button>
            );
          })}{" "}
        {socketService.roomInstance.settings.canSkip && (
          <button
            className={styles.answer}
            onClick={(e) => {
              e.preventDefault();
              socketService.socket.emit(
                "skip_question",
                username,
                socketService.roomInstance.id
              );
            }}
          >
            skip
          </button>
        )}
      </ul>
    </div>
  );
};
