import { useState } from "react";
import { Particles } from "../Particles/Particles";
import styles from "../../styles/LogInPage.module.scss";
import { SignUp } from "../SignUp/SignUp";
import { LogIn } from "../LogIn/LogIn";
import { Guest } from "../Guest/Guest";
export const MainMenu = () => {
  const [menuOption, setMenuOption] = useState("default");
  const displayMenu = () => {
    switch (menuOption) {
      case "default":
        return (
          <>
            {" "}
            <button
              className={styles.button}
              onClick={() => setMenuOption("guest")}
            >
              Play as guest
            </button>
            <button
              className={styles.button}
              onClick={() => setMenuOption("login")}
            >
              Log in
            </button>
            <button
              className={styles.button}
              onClick={() => setMenuOption("signup")}
            >
              Sign up
            </button>
          </>
        );
      case "login":
        return (
          <>
            <LogIn />
            <button
              onClick={() => setMenuOption("default")}
              className={styles.button}
            >
              Back
            </button>
          </>
        );
      case "signup":
        return (
          <>
            <SignUp />{" "}
            <button
              onClick={() => setMenuOption("default")}
              className={styles.button}
            >
              Back
            </button>
          </>
        );
      case "guest":
        return (
          <>
            <Guest />{" "}
            <button
              onClick={() => setMenuOption("default")}
              className={styles.button}
            >
              Back
            </button>
          </>
        );
    }
  };
  return (
    <div className={styles.container}>
      <Particles />
      <section className={styles.login}>
        <h1 className={styles.login__heading}> Welcome to the QuanderDome</h1>
        {displayMenu()}
      </section>
    </div>
  );
};
