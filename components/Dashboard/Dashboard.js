import styles from "../../styles/Dashboard.module.scss";
import { LobbyList } from "../LobbyList/LobbyList";
import { Particles } from "../Particles/Particles";

// Main game dashboard for displaying username , lobby creation form and lobby list
export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Particles />
      <h1 className={styles.dashboard__heading}> QuanderDome</h1>
      <section className={styles.dashboard}>
        <LobbyList />
      </section>
    </div>
  );
}
