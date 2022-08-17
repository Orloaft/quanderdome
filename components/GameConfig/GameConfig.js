import styles from "./GameConfig.module.scss";
import { CategorySelect } from "../CategorySelect/CategorySelect";
import { LifeTotalSelect } from "../LifeTotalSelect/LifeTotalSelect";
import socketService from "../../services/socketService";

export const GameConfig = ({ gameStart }) => {
  const handleLifeTotalChange = (e) => {
    e.preventDefault();
    socketService.socket.emit(
      "update_lifeTotal",
      e.target.value,
      socketService.roomInstance.id
    );
  };
  const handleCategoryChange = (e) => {
    e.preventDefault();
    socketService.socket.emit(
      "update_category",
      e.target.value,
      socketService.roomInstance.id
    );
  };
  const handleTimeChange = (e) => {
    e.preventDefault();
    socketService.socket.emit(
      "update_time",
      e.target.value,
      socketService.roomInstance.id
    );
  };
  const handleSkipChange = (e) => {
    if (!e.target.checked) {
      socketService.socket.emit(
        "update_canSkip",
        false,
        socketService.roomInstance.id
      );
    } else {
      socketService.socket.emit(
        "update_canSkip",
        true,
        socketService.roomInstance.id
      );
    }
  };
  const handleRangeChange = (e) => {
    e.preventDefault();
    socketService.socket.emit(
      "update_range",
      e.target.value,
      socketService.roomInstance.id
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    gameStart();
  };
  const { settings } = socketService.roomInstance;
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
          <label htmlFor="time">{settings.time} Seconds</label>
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
          <label htmlFor="range">{settings.questions} Questions</label>
          <input
            className={styles.input}
            onChange={(e) => {
              handleRangeChange(e);
            }}
            name="range"
            type="range"
            min="1"
            max={settings.category > 0 ? `30` : `50`}
          ></input>
          Category:
          <CategorySelect
            handleChange={handleCategoryChange}
            category={settings.category}
          />
          Life totals:
          <LifeTotalSelect
            handleChange={handleLifeTotalChange}
            lifeTotals={settings.lifeTotals}
          />
          <form id="skip" className="toggle-form toggle-form--skip" action="#">
            <label htmlFor="skip">
              {(socketService.roomInstance.settings.canSkip && `Allow skips`) ||
                `No skipping`}
            </label>
            <label className="switch">
              <input
                type="checkbox"
                value={true}
                onChange={(e) => {
                  handleSkipChange(e);
                }}
              />
              <span className="slider"></span>
            </label>
          </form>
          <button className={styles.button} type="submit" disabled={false}>
            Start game
          </button>
        </form>
      </div>
    </>
  );
};
