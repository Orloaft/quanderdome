import { ThemeProvider } from "../../components/ThemeProvider/ThemeProvider";
import { useRouter } from "next/router";
import axios from "axios";
import styles from "../../styles/LogInPage.module.scss";
import { useState } from "react";
import { Particles } from "../../components/Particles/Particles";
export default function ConfirmEmailPage() {
  const [message, setMessage] = useState(null);
  const router = useRouter();
  const { token } = router.query;

  const confirmEmail = () => {
    axios
      .post(`/api/confirmations/${token}`)
      .then((res) => {
        setMessage(res.data.message);
        router.push("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <ThemeProvider>
      <div className={styles.container}>
        <Particles />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <button onClick={confirmEmail} className={styles.button}>
            confirm email
          </button>
          {message}
        </div>
      </div>
    </ThemeProvider>
  );
}
