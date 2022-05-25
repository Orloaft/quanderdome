import styles from "../styles/SignupPage.module.scss";
import { Component } from "react";
import Link from "next/link";

export default class SignupPage extends Component {
  state = {
    error: "",
    success: false,
  };
  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/users/register", {
        username: event.target.username.value,
        email: event.target.email.value,
        password: event.target.password.value,
      })
      .then((response) => {
        this.setState({ success: true });
      })
      .catch((error) => {
        this.setState({ error: error.response.data });
      });
  };

  render() {
    return (
      <div className={styles.container}>
        <section className={styles.home}>
          <h1 className={styles.home__heading}> Create a new account</h1>
          <form className={styles.sign_in_form} onSubmit={this.handleSubmit}>
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
            <Link className={styles.link} href="/">
              <span class={styles.link__text}>Cancel</span>
            </Link>
          </form>
        </section>
      </div>
    );
  }
}
