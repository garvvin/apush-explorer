import styles from "../page.module.css";

export default function Details({ details, setDetails }) {
  return (
    <div
      className={styles["details-container"]}
      style={{
        opacity: details[0]["notes"].length > 0 ? "1" : "0",
        zIndex: details[0]["notes"].length > 0 ? "0" : "-100",
      }}
    >
      <div className={styles["main-table"]}>
        <div className={styles["chart-content"]}>
          {details.map((side, i) => {
            return (
              <div
                className={styles["chart-side"]}
                key={i}
                style={i > 0 ? { borderLeft: "solid white 2px" } : null}
              >
                <div className={styles["chart-header"]}>{side.title}</div>
                <div className={styles["chart-side-content"]}>
                  <ul>
                    {side.notes.map((note, ind) => (
                      <li key={ind} className={styles["side-li"]}>
                        <span
                          style={{
                            animationDelay: `${
                              (i > 0
                                ? details[0].notes.length * 0.05 +
                                  (i > 1 ? details[1].notes.length * 0.05 : 0)
                                : 0) +
                              ind * 0.1
                            }s`,
                          }}
                        >
                          {note}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button
        className={styles["close-btn"]}
        onClick={() =>
          setDetails([
            { title: "", notes: [] },
            { title: "Similarities", notes: [] },
            { title: "", notes: [] },
          ])
        }
      >
        X
      </button>
    </div>
  );
}
