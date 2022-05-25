import styles from "./GameConfig.module.scss";
import { CategorySelect } from "../CategorySelect/CategorySelect";
import { DifficultySelect } from "../DifficultySelect/DifficultySelect";
import { useState } from "react";

export const GameConfig = ({ playerList, gameStart }) => {
  const [questionRange, setQuestionRange] = useState("1");
  const [questionDifficulty, setQuestionDifficulty] = useState("easy");
  const [questionCategory, setQuestionCategory] = useState("9");
  const [roundTime, setRoundTime] = useState(0);

  const handleDifficultyChange = (e) => {
    e.preventDefault();
    setQuestionDifficulty(e.target.value);
  };
  const handleCategoryChange = (e) => {
    e.preventDefault();
    setQuestionCategory(e.target.value);
  };
  const handleTimeChange = (e) => {
    e.preventDefault();
    setRoundTime(e.target.value);
  };
  const handleRangeChange = (e) => {
    e.preventDefault();
    setQuestionRange(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const gameConfig = {
      range: questionRange,
      category: questionCategory,
      difficulty: questionDifficulty,
      time: roundTime,
      playerList: playerList,
    };
    console.log(gameConfig);
    gameStart(gameConfig);
  };
  return (
    <>
      <div className={styles.config}>
        <h2>Game settings</h2>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className={styles.config__form}
        >
          <label htmlFor="time">{roundTime} Seconds</label>
          <input
            className={styles.input}
            onChange={(e) => {
              handleTimeChange(e);
            }}
            name="time"
            type="range"
            min="0"
            max="600"
          ></input>
          <label htmlFor="range">{questionRange} Questions</label>
          <input
            className={styles.input}
            onChange={(e) => {
              handleRangeChange(e);
            }}
            name="range"
            type="range"
            min="1"
            max="30"
          ></input>
          <CategorySelect handleChange={handleCategoryChange} />
          <DifficultySelect handleChange={handleDifficultyChange} />
          <button className={styles.button} type="submit" disabled={false}>
            Start game
          </button>
        </form>
      </div>
    </>
  );
};
