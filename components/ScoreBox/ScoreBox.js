import socketService from "../../services/socketService";
import styles from "./ScoreBox.module.scss";
export const ScoreBox = ({ credentials }) => {
  const { scores } = socketService.roomInstance;
  let maxHealth = socketService.roomInstance.settings.lifeTotals;
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
                    style={{ width: (player.life * 100) / maxHealth + "%" }}
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
