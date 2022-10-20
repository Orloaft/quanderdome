import styles from "../../styles/LogInPage.module.scss";
import { useState } from "react";
import axios from "axios";
export const SignUp = () => {
  const [form, setForm] = useState({ email: "", username: "", password: "" });
  const [message, setMessage] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`api/signup`, form)
      .then((res) => {
        res.data.message && setMessage(res.data.message);
      })
      .catch((err) => console.log(err));
  };
  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      onChange={(e) => {
        handleFormChange(e);
      }}
      className={styles.sign_in_form}
    >
      <input className={styles.input} name="email" placeholder="email"></input>
      <input
        className={styles.input}
        name="username"
        placeholder="username"
      ></input>
      <input
        className={styles.input}
        name="password"
        placeholder="password"
        type="password"
      ></input>
      {message}
      <button className={styles.button}>Sign up</button>
    </form>
  );
};
