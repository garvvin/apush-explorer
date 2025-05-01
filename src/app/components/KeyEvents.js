import styles from "./Timeline.module.css";

export default function KeyEvents({ startYear, totalYears, timelineWidth }) {
  const events = [
    {
      year: 1492,
      name: "Columbus arrives",
      style: { transform: "translateX(-20px) translateY(-40px)" },
    },
    {
      year: 1492,
      name: "Columbian Exchange begins",
      style: { transform: "translateY(-140px)" },
    },
    {
      year: 1494,
      name: "Treaty of Tordesillas divides the New World",
      style: { transform: "translateY(-100px)" },
    },
    {
      year: 1500,
      name: "Spanish encomienda system begins",
      style: { transform: "translateY(-60px)" },
    },
    {
      year: 1519,
      name: "Cortés begins conquest of Aztecs",
    },
    {
      year: 1534,
      name: "Founding of New France (Quebec)",
      style: { transform: "translateY(-40px)" },
    },
    {
      year: 1585,
      name: "Roanoke Colony established",
    },
    { year: 1607, name: "Jamestown founded" },
    {
      year: 1619,
      name: "First Africans arrive in Virginia",
      style: { transform: "translateY(-100px)" },
    },
    { year: 1620, name: "Pilgrims land at Plymouth" },
    { year: 1754, name: "French and Indian War begins" },
    {
      year: 1763,
      name: "Treaty of Paris ends French and Indian War",
      style: { transform: "translateY(-100px)" },
    },
    {
      year: 1770,
      name: "Boston Massacre",
      style: { transform: "translateY(-140px)" },
    },
    {
      year: 1773,
      name: "Boston Tea Party",
      style: { transform: "translateY(-180px)" },
    },
    { year: 1775, name: "Battles of Lexington and Concord" },
    {
      year: 1776,
      name: "Declaration of Independence",
      style: { transform: "translateY(-100px)" },
    },
    { year: 1781, name: "Battle of Yorktown" },
    {
      year: 1787,
      name: "Constitutional Convention",
      style: { transform: "translateY(-100px)" },
    },
    { year: 1791, name: "Bill of Rights ratified" },
    { year: 1803, name: "Louisiana Purchase" },
    { year: 1812, name: "War of 1812 begins" },
    { year: 1820, name: "Missouri Compromise" },
    { year: 1830, name: "Indian Removal Act" },
    { year: 1846, name: "Mexican-American War begins" },
    {
      year: 1850,
      name: "Compromise of 1850",
      style: { transform: "translateY(-100px)" },
    },
    { year: 1854, name: "Kansas-Nebraska Act" },
    {
      year: 1861,
      name: "Civil War begins",
      style: { transform: "translateY(-140px)" },
    },
    {
      year: 1863,
      name: "Emancipation Proclamation",
      style: { transform: "translateY(-100px)" },
    },
    { year: 1865, name: "Civil War ends / Lincoln assassinated" },
    { year: 1877, name: "Compromise of 1877 ends Reconstruction" },
    { year: 1890, name: "Wounded Knee Massacre" },
    { year: 1898, name: "Spanish-American War" },
    {
      year: 1914,
      name: "World War I begins in Europe",
      style: { transform: "translateY(-180px)" },
    },
    {
      year: 1917,
      name: "U.S. enters World War I",
      style: { transform: "translateY(-140px)" },
    },
    { year: 1919, name: "Treaty of Versailles signed" },
    {
      year: 1920,
      name: "19th Amendment ratified (Women's suffrage)",
      style: { transform: "translateY(-100px)" },
    },
    { year: 1929, name: "Stock Market Crash / Great Depression begins" },
    { year: 1941, name: "Pearl Harbor attack" },
    {
      year: 1945,
      name: "End of World War II",
      style: { transform: "translateY(-100px)" },
    },
    { year: 1954, name: "Brown v. Board of Education" },
    {
      year: 1963,
      name: "March on Washington / MLK's 'I Have a Dream'",
      style: { transform: "translateY(-100px)" },
    },
    { year: 1964, name: "Civil Rights Act passed" },
    {
      year: 1968,
      name: "Assassination of Martin Luther King Jr.",
      style: { transform: "translateY(-140px)" },
    },
    {
      year: 1974,
      name: "Nixon resigns after Watergate",
      style: { transform: "translateY(-100px)" },
    },
    { year: 1980, name: "Reagan elected president" },
    { year: 1991, name: "Cold War ends" },
    { year: 2001, name: "9/11 Attacks" },
    { year: 2008, name: "Election of Barack Obama" },
  ];
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
