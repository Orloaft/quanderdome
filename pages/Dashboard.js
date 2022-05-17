import { signOut } from "next-auth/react";
import styles from "../styles/LoginPage.module.scss";
import { useSession } from "next-auth/react";

export default function Dashboard({ user }) {
  const { data: session, status } = useSession();
  console.log(session.user);
  return (
    <div className={styles.container}>
      <section className={styles.home}>
        <h1 className={styles.home__heading}> QuanderDome</h1>
        <span>signed in as {user}</span>
        <button onClick={signOut}>Sign out</button>
      </section>
    </div>
  );
}
