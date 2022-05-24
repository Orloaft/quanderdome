import styles from "./HealthBar.module.scss";
import { useEffect, useState } from "react";
import socketService from "../../services/socketService";

export const HealthBar = () => {
  const [health, setHealth] = useState(100);

  useEffect(() => {
    socketService.socket.on("update_hp", (player) => {
      if (player.id === window.localStorage.getItem("username")) {
        setHealth(player.life);
      }
    });
  });
  return (
    <div className={styles.health}>
      <div
        className={styles.health__progress}
        style={{ width: health + "%" }}
      ></div>
    </div>
  );
};
