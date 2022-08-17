import styles from "../GameConfig/GameConfig.module.scss";
export const LifeTotalSelect = ({ handleChange, lifeTotals }) => {
  return (
    <>
      <label htmlFor="time">{lifeTotals} Health</label>
      <input
        className={styles.input}
        onChange={(e) => {
          handleChange(e);
        }}
        name="lifeTotals"
        type="range"
        min="10"
        max="1000"
      ></input>
    </>
  );
};
