import styles from "./page.module.css";

//components
import Timeline from "./components/timeline/Timeline";
import NavOverlay from "./components/nav/NavOverlay";

export default function Home() {
  return (
    <div className={styles["main-container"]}>
      <div className={styles["timeline-container"]}>
        <Timeline />
      </div>
      <NavOverlay />
    </div>
  );
}
