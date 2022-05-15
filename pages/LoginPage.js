import { Component } from "react";
import styles from "../styles/Home.module.scss";
import Link from "next/link";

export default class LoginPage extends Component {
  state = {
    error: "",
    success: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/api/users/login", {
        username: event.target.username.value,
        password: event.target.password.value,
      })
      .then((response) => {
        sessionStorage.setItem("token", response.data.token);
        this.setState({ success: true });
      })
      .catch((error) => {
        this.setState({ error: error.response.data });
      });
  };

  render() {
    return (
      <div
        onSubmit={(e) => {
          this.handleSubmit(e);
        }}
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
            </span>
          </form>
        </section>
      </div>
    );
  }
}
