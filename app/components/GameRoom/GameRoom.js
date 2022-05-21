import styles from "./GameRoom.module.scss";
import socketService from "../../services/socketService";
import { useState } from "react";

export const GameRoom = ({ gameRound, endGame }) => {
  const [time, setTime] = useState(null);
  socketService.socket.on("tick", (time) => {
    setTime(time);
  });
  return (
    <>
      <h1 className={styles.time}>{time}</h1>
    </>
  );
};
