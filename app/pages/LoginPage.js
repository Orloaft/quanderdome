import { signIn, useSession } from "next-auth/react";
import styles from "../styles/LogInPage.module.scss";
import { useState } from "react";

export default function LoginPage({ logIn }) {
  const [nameInput, setNameInput] = useState("");
  const { data: session, status } = useSession();
  const handleNameChange = (e) => {
    setNameInput(e.target.value);
  };
  return (
    <div className={styles.container}>
      <section className={styles.login}>
        <h1 className={styles.login__heading}> Welcome to the QuanderDome</h1>
        <form className={styles.sign_in_form}>
          <input
            onChange={(e) => {
              handleNameChange(e);
            }}
            className={styles.input}
            placeholder="username"
          ></input>
          <button
            onClick={(e) => {
              e.preventDefault();
              if (nameInput.length > 4) {
                window.localStorage.setItem("username", nameInput);
                logIn();
              } else {
                alert("please use at least 5 characters");
              }
            }}
            className={styles.button}
          >
            Sign in
          </button>
          {/* <a
            href={`/api/auth/signin`}
            className={styles.buttonPrimary}
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Sign in
          </a> */}
        </form>
      </section>
    </div>
  );
}
