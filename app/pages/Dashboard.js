import { signOut } from "next-auth/react";
import styles from "../styles/LoginPage.module.scss";
import { useSession } from "next-auth/react";
import socketService from "../services/socketService";
import { LobbyList } from "../components/LobbyList/LobbyList";

export default function Dashboard() {
  socketService.connect("http://localhost:9000");
  return (
    <div className={styles.container}>
      <section className={styles.home}>
        <h1 className={styles.home__heading}> QuanderDome</h1>
        {/* <span>signed in as {user}</span> */}
        {/* <button onClick={signOut}>Sign out</button> */}
        <LobbyList />
      </section>
    </div>
  );
}
