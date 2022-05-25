import { signOut } from "next-auth/react";
import styles from "../styles/Dashboard.module.scss";
import { useSession } from "next-auth/react";
import socketService from "../services/socketService";
import { LobbyList } from "../components/LobbyList/LobbyList";
import { useEffect } from "react";

export default function Dashboard({ credentials }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.dashboard__heading}> QuanderDome</h1>
      <section className={styles.dashboard}>
        {/* <button onClick={signOut}>Sign out</button> */}
        <LobbyList credentials={credentials} />
      </section>
    </div>
  );
}
