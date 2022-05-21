import styles from "./GameConfig.module.scss";
import { CategorySelect } from "../CategorySelect/CategorySelect";
import { DifficultySelect } from "../DifficultySelect/DifficultySelect";
import { useState } from "react";
export const GameConfig = () => {
  const [questionRange, setQuestionRange] = useState("1");
  const [questionDifficulty, setQuestionDifficulty] = useState("easy");
  const [questionCategory, setQuestionCategory] = useState("General Knowledge");

  const handleDifficultyChange = (e) => {
    e.preventDefault();
    setQuestionDifficulty(e.target.value);
  };
  const handleCategoryChange = (e) => {
    e.preventDefault();
    setQuestionCategory(e.target.value);
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
    };
    console.log(gameConfig);
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
