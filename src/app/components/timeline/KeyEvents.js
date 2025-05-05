import styles from "./Timeline.module.css";

export default function KeyEvents({ startYear, totalYears, timelineWidth }) {
  const events = require("./events.json");

  return (
    <div
      className={styles["key-events"]}
      style={{ width: `${timelineWidth}px` }}
    >
      {events.map((event, index) => {
        const leftPos = ((event.year - startYear) / totalYears) * timelineWidth;
        return (
          <div
            key={index}
            className={styles["key-event"]}
            style={
              event.style
                ? { left: `${leftPos}px`, ...event.style }
                : { left: `${leftPos}px` }
            }
          >
            <u>{event.year}</u> - {event.name}
          </div>
        );
      })}
    </div>
  );
}
