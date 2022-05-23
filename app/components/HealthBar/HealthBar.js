import styles from "./HealthBar.module.scss";
import { useState } from "react";

export const HealthBar = () => {
  const [health, setHealth] = useState("100%");
  return (
    <div className={styles.health}>
      <div
        className={styles.health__progress}
        style={{ width: health }}
        //     style={` height: 100%;
        // background-color: darkgreen; width:100%`}
      ></div>
    </div>
  );
};
