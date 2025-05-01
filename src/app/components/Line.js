import styles from "./Timeline.module.css";

export default function Line({ startYear, totalYears, timelineWidth }) {
  const yearsArray = Array.from(
    { length: totalYears + 1 },
    (_, i) => startYear + i
  );

  return (
    <>
      {/*Tick marks for each year*/}
      <div
        className={styles["tick-marks"]}
        style={{ width: `${timelineWidth}px` }}
      >
        {yearsArray.map((year, index) => {
          const tickWidth = timelineWidth / totalYears;
          return (
            <div
              key={index}
              data-title={year}
              className={styles["tick-mark-container"]}
              style={{
                width: `${tickWidth}px`,
              }}
            >
              <div
                className={styles["tick-mark"]}
                style={{
                  height: year % 10 === 0 ? "7px" : "3px", //longer line for every decade
                  background: "white",
                }}
              />
              {year % 10 === 0 ? (
                <span className={styles["tick-label"]}>{year}</span>
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
}
