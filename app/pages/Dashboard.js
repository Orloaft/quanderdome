import { signOut } from "next-auth/react";
import styles from "../styles/Dashboard.module.scss";
import { useSession } from "next-auth/react";
import socketService from "../services/socketService";
import { LobbyList } from "../components/LobbyList/LobbyList";

export default function Dashboard() {
  socketService.connect("http://localhost:9000");
  return (
    <div className={styles.container}>
      <h1 className={styles.dashboard__heading}> QuanderDome</h1>
      <section className={styles.dashboard}>
        {/* <span>signed in as {user}</span> */}
        {/* <button onClick={signOut}>Sign out</button> */}
        <LobbyList />
      </section>
    </div>
  );
}