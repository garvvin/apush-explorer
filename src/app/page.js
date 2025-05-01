import styles from "./page.module.css";

//components
import Timeline from "./components/Timeline";

export default function Home() {
  return (
    <div className={styles["main-container"]}>
      <div className={styles["timeline-container"]}>
        <Timeline />
      </div>
    </div>
  );
}
