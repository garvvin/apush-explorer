import styles from "../page.module.css";

export default function CaseDetails({ details }) {
  return <div className={styles["details-card"]}>{details}</div>;
}
