import styles from "./Timeline.module.css";

export default function Period({ periodData, sectionWidth }) {
  return (
    <div
      className={styles["period-section"]}
      style={{
        width: sectionWidth,
        background: `linear-gradient(to right, rgba(${periodData.color}, 0.5), rgba(0, 0, 0, 0))`,
        borderTopLeftRadius: periodData.name == "Period 1" ? "15px" : 0,
        borderBottomLeftRadius: periodData.name == "Period 1" ? "15px" : 0,
      }}
    >
      {periodData.name + " : " + periodData.start + "-" + periodData.end}
    </div>
  );
}
