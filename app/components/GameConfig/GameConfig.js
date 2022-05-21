import styles from "./GameConfig.module.scss";
import { CategorySelect } from "../CategorySelect/CategorySelect";
import { DifficultySelect } from "../DifficultySelect/DifficultySelect";
import { useState } from "react";
export const GameConfig = () => {
  const [questionRange, setQuestionRange] = useState(1);
  const handleRangeChange = (e) => {
    e.preventDefault();
    setQuestionRange(e.target.value);
  };
  return (
    <>
      <div className={styles.config}>
        <h2>Game settings</h2>
        <form className={styles.config__form}>
          <label for="range">{questionRange} Questions</label>
          <input
            onChange={(e) => {
              handleRangeChange(e);
            }}
            name="range"
            type="range"
            min="1"
            max="30"
          ></input>
          <CategorySelect />
          <DifficultySelect />
          <button type="submit" disabled={true}>
            Start game
          </button>
        </form>
      </div>
    </>
  );
};
