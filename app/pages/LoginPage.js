import { Component } from "react";
// import styles from "../styles/LoginPage.module.scss";
import Link from "next/link";
import { signIn, getSession } from "next-auth/react";
import styles from "../styles/LogInPage.module.scss";
import { useState } from "react";

export default function LoginPage({ logIn }) {
  const [nameInput, setNameInput] = useState("");
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
            {/* <a
              href={`/api/auth/signin`}
              className={styles.sign_up}
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Sign in
            </a> */}
            Sign in
          </button>
        </form>
      </section>
    </div>
  );
}
