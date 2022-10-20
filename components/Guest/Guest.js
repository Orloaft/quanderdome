import styles from "../../styles/LogInPage.module.scss";
import { useContext, useState } from "react";
import { UserContext } from "../../pages";
export const Guest = () => {
  const [name, setName] = useState("");
  const userContext = useContext(UserContext);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", name);
    userContext.setCredentials({ username: name });
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.sign_in_form}>
      <input
        onChange={(e) => {
          handleNameChange(e);
        }}
        className={styles.input}
        placeholder="guestname"
        name="guestname"
        value={name}
      ></input>

      <button className={styles.button}>Play as guest</button>
    </form>
  );
};
