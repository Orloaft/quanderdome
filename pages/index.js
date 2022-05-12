import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.home}>
        <h1 className={styles.home__heading}> Welcome to the QuanderDome</h1>
        <form className={styles.sign_in_form}>
          <input className={styles.sign_in_form__field} type="text"></input>
          <input className={styles.sign_in_form__field} type="text"></input>
          <button className={styles.sign_in_form__submit} type="submit">
            Sign in
          </button>
          <span className={styles.sign_up}>
            {" "}
            Not an existing user? please click <a>here</a> to sign up
          </span>
        </form>
      </section>
    </div>
  );
}
