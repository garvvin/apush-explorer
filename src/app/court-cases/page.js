import styles from "./page.module.css";
import NavOverlay from "../components/nav/NavOverlay";

export default function CourtCases() {
  return (
    <>
      <div className={styles["main-container"]}>
        <div className={styles["inner-container"]}>
          <h2 className={styles["topic-title"]}>Key Court Cases </h2>
        </div>
      </div>
      <NavOverlay />
    </>
  );
}
