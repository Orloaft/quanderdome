import styles from "./HealthBar.module.scss";
import { useEffect, useState } from "react";
import socketService from "../../services/socketService";

export const HealthBar = ({ health }) => {
  let maxHealth = socketService.roomInstance.settings.lifeTotals;
  return (
    <div className={styles.health}>
      <span style={{ position: "absolute" }}>{health}</span>
      <div
        className={styles.health__progress}
        style={{ width: (health * 100) / maxHealth + "%" }}
      ></div>
    </div>
  );
};
