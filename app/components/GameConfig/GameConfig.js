import styles from "./GameConfig.module.scss";

export const GameConfig = () => {
  return (
    <>
      <div className={styles.config}>
        <h2>Game settings</h2>
        <form className={styles.config__form}>
          <select name="category">
            <option value="General Knowledge">General Knowledge</option>
            <option value="Entertainment: Books">Entertainment: Books</option>
            <option value="Entertainment: Film">Entertainment: Film</option>
            <option value="Entertainment: Music">Entertainment: Music</option>
            <option
              value={"Entertainment: Musicals & Theatres"}
            >{`Entertainment: Musicals & Theatres`}</option>
            <option value="Entertainment: Television">
              Entertainment: Television
            </option>
            <option value="Entertainment: Video Games">
              Entertainment: Video Games
            </option>
            <option value={"Entertainment: Board Games"}>
              Entertainment: Board Games
            </option>
            <option value={"Science & Nature"}>{"Science & Nature"}</option>
            <option value="Science: Computers">Science: Computers</option>
            <option value={"Science: Mathematics"}>Science: Mathematics</option>
            <option value="Mythology">Mythology</option>
            <option value={"Sports"}>Sports</option>
            <option value="Geography">Geography</option>
            <option value="History">History</option>
            <option value={"Politics"}>Politics</option>
            <option value="Art">Art</option>
            <option value="Celebrities">Celebrities</option>
            <option value={"Animals"}>Animals</option>
            <option value="Vehicles">Vehicles</option>
            <option value="Entertainment: Comics">Entertainment: Comics</option>
            <option value={"Entertainment: Japanese Anime & Manga"}>
              {"Entertainment: Japanese Anime & Manga"}
            </option>
            <option value={"Entertainment: Cartoon & Animations"}>
              {"Entertainment: Cartoon & Animations"}
            </option>
          </select>
          <button type="submit" disabled={true}>
            Start game
          </button>
        </form>
      </div>
    </>
  );
};
