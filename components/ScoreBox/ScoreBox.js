import socketService from "../../services/socketService";
import styles from "./ScoreBox.module.scss";
export const ScoreBox = ({ credentials }) => {
  const { scores } = socketService.roomInstance;
  return (
    <div className={styles.score_box}>
      {scores
        .filter((player) => player.name !== credentials)
        .map((player) => {
          if (player.life > 0) {
            return (
              <div className={styles.player}>
                <p className={styles.name}>{player.name}</p>
                <p className={styles.score}> {player.score}</p>
                <div className={styles.health}>
                  <div
                    className={styles.health__progress}
                    style={{ width: player.life + "%" }}
                  ></div>{" "}
                </div>
              </div>
            );
          } else {
            return (
              <div>
                <p className={styles.name}>{player.name}</p>
                <br></br>
                defeated
              </div>
            );
          }
        })}
    </div>
  );
};
