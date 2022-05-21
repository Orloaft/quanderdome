import { Component } from "react";
// import styles from "../styles/LoginPage.module.scss";
import Link from "next/link";
import { signIn, getSession } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <section className={styles.home}>
        <h1 className={styles.home__heading}> Welcome to the QuanderDome</h1>
        <form className={styles.sign_in_form}>
          <button className={styles.sign_in_form__submit}>
            <a
              href={`/api/auth/signin`}
              className={styles.sign_up}
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Sign in
            </a>
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
