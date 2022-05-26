import styles from "../styles/Dashboard.module.scss";
import { LobbyList } from "../components/LobbyList/LobbyList";
import { Particles } from "../components/Particles/Particles";

// Main game dashboard for displaying username , lobby creation form and lobby list
export default function Dashboard({ credentials, darkTheme }) {
  return (
    <div className={styles.container}>
      <Particles darkTheme={darkTheme} />
      <h1 className={styles.dashboard__heading}> QuanderDome</h1>
      <section className={styles.dashboard}>
        <LobbyList credentials={credentials} />
      </section>
    </div>
  );
}
