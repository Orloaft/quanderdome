import { Component } from "react";
import styles from "../styles/Home.module.scss";

export default class LoginPage extends Component {
  state = {
    error: "",
    success: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    name = "";
    axios
      .post("http://localhost:8080/api/users/register", {
        username: event.target.username.value,
        email: event.target.email.value,
        password: event.target.password.value,
      })
      .then(() => {
        this.setState({ success: true, error: "" });
        event.target.reset();
      })
      .catch((error) => {
        this.setState({ success: false, error: error.response.data });
      });
  };

  render() {
    return (
      <div className={styles.container}>
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
              Not an existing user? please click <a>here</a> to sign up
            </span>
          </form>
        </section>
      </div>
    );
  }
}
