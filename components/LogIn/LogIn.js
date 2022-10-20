import { useState, useContext } from "react";
import { UserContext } from "../../pages";
import styles from "../../styles/LogInPage.module.scss";
import axios from "axios";

export const LogIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState(null);
  const userContext = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`api/login`, form)
      .then((res) => {
        res.data.message && setMessage(res.data.message);
        if (res.data.token) {
          sessionStorage.setItem("authToken", res.data.token);
          userContext.setCredentials({
            username: res.data.username,
          });
        }
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
        name="password"
        placeholder="password"
        type="password"
      ></input>
      {message}
      <button className={styles.button}>Log in</button>
    </form>
  );
};
