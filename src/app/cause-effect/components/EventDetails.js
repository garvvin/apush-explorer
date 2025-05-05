import styles from "../page.module.css";

export default function EventDetails({ details, setDetails }) {
  return (
    <div
      className={styles["details-container"]}
      style={{
        opacity: details.causes.length > 0 ? "1" : "0",
        zIndex: details.causes.length > 0 ? "0" : "-100",
      }}
    >
      <div className={styles["main-table"]}>
        <div className={styles["event-title"]}>{details.event}</div>
        <div className={styles["chart-content"]}>
          <div className={styles["chart-side"]}>
            <div className={styles["chart-header"]}>Causes</div>
            <div className={styles["chart-side-content"]}>
              <ul>
                {details.causes.map((cause, i) => (
                  <li key={i} className={styles["cause-li"]}>
                    <span style={{ animationDelay: `${i * 0.1}s` }}>
                      {cause}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className={styles["chart-side"]}
            style={{ borderLeft: "solid white 2px" }}
          >
            <div className={styles["chart-header"]}>Effects</div>
            <div className={styles["chart-side-content"]}>
              <ul>
                {details.effects.map((effect, i) => (
                  <li key={i} className={styles["effects-li"]}>
                    <span
                      style={{
                        animationDelay: `${
                          details.causes.length * 0.05 + i * 0.1
                        }s`,
                      }}
                    >
                      {effect}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button
        className={styles["close-btn"]}
        onClick={() => setDetails({ event: "", causes: [], effects: [] })}
      >
        X
      </button>
    </div>
  );
}
