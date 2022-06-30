import styles from "./HealthBar.module.scss";
import { useEffect, useState } from "react";
import socketService from "../../services/socketService";

export const HealthBar = ({ health }) => {
  return (
    <div className={styles.health}>
      <div
        className={styles.health__progress}
        style={{ width: health + "%" }}
      ></div>
    </div>
  );
};
