import styles from "./ScoreBoard.module.scss";

export const ScoreBoard = ({ game, handleLeave }) => {
  return (
    <>
      <div className={styles.scoreBoard}>
        <ul className={styles.scoreBoard__list}>
          {game.players.map((player) => {
            return (
              <>
                <li>{player.id}</li>
                <li>{player.score}</li>
              </>
            );
          })}
        </ul>
        <button onClick={handleLeave}>Leave</button>
      </div>
    </>
  );
};
