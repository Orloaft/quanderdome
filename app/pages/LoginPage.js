import { Component } from "react";
// import styles from "../styles/LoginPage.module.scss";
import Link from "next/link";
import { signIn, getSession } from "next-auth/react";
import styles from "../styles/Dashboard.module.scss";
import { useState } from "react";

export default function LoginPage({ logIn }) {
  const [nameInput, setNameInput] = useState("");
  const handleNameChange = (e) => {
    setNameInput(e.target.value);
  };
  return (
    <div className={styles.container}>
      <section className={styles.dashboard}>
        <h1 className={styles.dashboard__heading}>
          {" "}
          Welcome to the QuanderDome
        </h1>
        <form className={styles.sign_in_form}>
          <input
            onChange={(e) => {
              handleNameChange(e);
            }}
            className={styles.logIn__input}
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
            className={styles.sign_in_form__submit}
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
          {/* <input
            className={styles.sign_in_form__field}
            name="username"
            type="text"
            placeholder="username"
          ></input>
          <input
            className={styles.sign_in_form__field}
            name="password"
            type="password"
            placeholder="password"
          ></input>
          <button className={styles.sign_in_form__submit} type="submit">
            Sign in
          </button>
          <span className={styles.sign_up}>
            {" "}
            Not an existing user? please click{" "}
            <Link href="/SignupPage" className={styles.link}>
              <span className={styles.link__text}>here</span>
            </Link>{" "}
            to sign up
          </span> */}
        </form>
      </section>
    </div>
  );
}
