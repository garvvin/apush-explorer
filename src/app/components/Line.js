import styles from "./Timeline.module.css";

export default function Line({ startYear, totalYears, timelineWidth }) {
  const yearsArray = Array.from(
    { length: totalYears + 1 },
    (_, i) => startYear + i
  );

  return (
    <>
      {/*The actual line*/}
      <div className={styles.line}></div>

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
              className={styles["tick-mark"]}
              style={{
                width: `${tickWidth}px`,
                height: year % 10 === 0 ? "7px" : "5px", //longer line for every decade
                background: "white",
              }}
              title={year}
            />
          );
        })}
      </div>
    </>
  );
}
