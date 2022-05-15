import { Component } from "react";

export default class Dashboard extends Component {
  render() {
    return (
      <div className={styles.container}>
        <section className={styles.home}>
          <h1 className={styles.home__heading}> QuanderDome</h1>
        </section>
      </div>
    );
  }
}
