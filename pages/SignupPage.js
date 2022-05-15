import styles from "../styles/Home.module.scss";

export default function SignupPage() {
  return (
    <div
      //   onSubmit={(e) => {
      //     this.handleSubmit(e);
      //   }}
      className={styles.container}
    >
      <section className={styles.home}>
        <h1 className={styles.home__heading}> Welcome to the QuanderDome</h1>
        <form className={styles.sign_in_form}>
          <input
            className={styles.sign_in_form__field}
            name="username"
            type="text"
            placeholder="username"
          ></input>
          <input
            className={styles.sign_in_form__field}
            name="email"
            type="text"
            placeholder="email"
          ></input>
          <input
            className={styles.sign_in_form__field}
            name="password"
            type="password"
            placeholder="password"
          ></input>
          <button className={styles.sign_in_form__submit} type="submit">
            Sign up
          </button>
        </form>
      </section>
    </div>
  );
}
