import styles from "../styles/Dashboard.module.scss";
import { LobbyList } from "../components/LobbyList/LobbyList";

// Main game dashboard for displaying username , lobby creation form and lobby list
export default function Dashboard({ credentials }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.dashboard__heading}> QuanderDome</h1>
      <section className={styles.dashboard}>
        <LobbyList credentials={credentials} />
      </section>
    </div>
  );
}
