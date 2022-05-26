import { useEffect, useState } from "react";
import styles from "./Particles.module.scss";

export const Particles = ({ darkTheme }) => {
  const [particleTheme, setParticleTheme] = useState(false);
  useEffect(() => {
    if (darkTheme) {
      setParticleTheme(true);
    }
  }, []);
  return (
    <>
      <div
        className={particleTheme ? styles.particle : styles.particle_dark}
      ></div>
      <div
        className={particleTheme ? styles.particle : styles.particle_dark}
      ></div>
      <div
        className={particleTheme ? styles.particle : styles.particle_dark}
      ></div>
      <div
        className={particleTheme ? styles.particle : styles.particle_dark}
      ></div>
      <div
        className={particleTheme ? styles.particle : styles.particle_dark}
      ></div>
      <div
        className={particleTheme ? styles.particle : styles.particle_dark}
      ></div>
      <div
        className={particleTheme ? styles.particle : styles.particle_dark}
      ></div>
      <div
        className={particleTheme ? styles.particle : styles.particle_dark}
      ></div>
      <div
        className={particleTheme ? styles.particle : styles.particle_dark}
      ></div>
      <div
        className={particleTheme ? styles.particle : styles.particle_dark}
      ></div>
      <div
        className={particleTheme ? styles.particle : styles.particle_dark}
      ></div>
      <div
        className={particleTheme ? styles.particle : styles.particle_dark}
      ></div>
      <div
        className={particleTheme ? styles.particle : styles.particle_dark}
      ></div>
      <div
        className={particleTheme ? styles.particle : styles.particle_dark}
      ></div>
      <div
        className={particleTheme ? styles.particle : styles.particle_dark}
      ></div>
      <div
        className={particleTheme ? styles.particle : styles.particle_dark}
      ></div>
      <div
        className={particleTheme ? styles.particle : styles.particle_dark}
      ></div>
      <div
        className={particleTheme ? styles.particle : styles.particle_dark}
      ></div>
      <div
        className={particleTheme ? styles.particle : styles.particle_dark}
      ></div>
      <div
        className={particleTheme ? styles.particle : styles.particle_dark}
      ></div>
      <div
        className={particleTheme ? styles.particle : styles.particle_dark}
      ></div>
      <div
        className={particleTheme ? styles.particle : styles.particle_dark}
      ></div>
      <div
        className={particleTheme ? styles.particle : styles.particle_dark}
      ></div>
      <div
        className={particleTheme ? styles.particle : styles.particle_dark}
      ></div>
      <div
        className={particleTheme ? styles.particle : styles.particle_dark}
      ></div>
      <div
        className={particleTheme ? styles.particle : styles.particle_dark}
      ></div>
      <div
        className={particleTheme ? styles.particle : styles.particle_dark}
      ></div>
      <div
        className={particleTheme ? styles.particle : styles.particle_dark}
      ></div>
      <div
        className={particleTheme ? styles.particle : styles.particle_dark}
      ></div>
      <div
        className={particleTheme ? styles.particle : styles.particle_dark}
      ></div>
    </>
  );
};
