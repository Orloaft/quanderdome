import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../styles/LogInPage.module.scss";
import { ThemeProvider } from "../components/ThemeProvider/ThemeProvider";
import { Particles } from "../components/Particles/Particles";
export default function UserPage() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios
      .get(`/api/users/${sessionStorage.getItem("authToken")}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <ThemeProvider>
      <div className={styles.container}>
        <Particles />
        {user && user.username}
      </div>
    </ThemeProvider>
  );
}
