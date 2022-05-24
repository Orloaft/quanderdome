import styles from "./ScoreBoard.module.scss";
import { v4 as uuidv4 } from "uuid";
export const ScoreBoard = ({ game, handleLeave }) => {
  return (
    <>
      <div className={styles.scoreBoard}>
        <ul className={styles.scoreBoard__list}>
          {game.players.map((player) => {
            return (
              <>
                <li key={uuidv4()}>{player.id}</li>
                <li key={uuidv4()}>{player.score}</li>
              </>
            );
          })}
        </ul>
        <button onClick={handleLeave}>Leave</button>
      </div>
    </>
  );
};
