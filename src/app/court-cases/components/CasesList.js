import styles from "../page.module.css";

export default function CasesList({ courtcaseData, setDetails }) {
  return (
    <div className={styles["cases-card"]}>
      <ul className={styles["list"]}>
        {courtcaseData.map((caseData, i) => (
          <li
            key={i}
            className={styles["list-link"]}
            onClick={() => setDetails(caseData.details)}
          >{`${caseData.case} (${caseData.date})`}</li>
        ))}
      </ul>
    </div>
  );
}
