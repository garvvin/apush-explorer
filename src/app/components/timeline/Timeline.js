"use client";
import styles from "./Timeline.module.css";
import { motion, useMotionValue } from "motion/react";
import { useState, useEffect } from "react";

//configuration variables

const periods = [
  { name: "Period 1", start: 1491, end: 1607, color: "0, 206, 110" },
  { name: "Period 2", start: 1607, end: 1754, color: "237, 240, 75" },
  { name: "Period 3", start: 1754, end: 1800, color: "240, 81, 75" },
  { name: "Period 4", start: 1800, end: 1848, color: "75, 166, 240" },
  { name: "Period 5", start: 1848, end: 1877, color: "196, 129, 4" },
  { name: "Period 6", start: 1877, end: 1898, color: "110, 110, 110" },
  { name: "Period 7", start: 1898, end: 1945, color: "129, 0, 0" },
  { name: "Period 8", start: 1945, end: 1980, color: "51, 0, 190" },
  { name: "Period 9", start: 1980, end: 2025, color: "0, 190, 127" },
];

const startYear = periods[0].start;
const endYear = periods[periods.length - 1].end;
const pixelsPerYear = 20;

//calculation variables
const totalYears = endYear - startYear;
const timelineWidth = totalYears * pixelsPerYear;

//components
import Period from "./Period";
import Line from "./Line";
import KeyEvents from "./KeyEvents";

export default function Timeline({}) {
  const x = useMotionValue(0);

  const [windowWidth, setWindowWidth] = useState(0);

  const maxScroll = -timelineWidth + windowWidth - 70;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();

      x.stop();

      const delta = e.deltaY;
      const currentX = x.get();
      let nextX = currentX - delta;

      if (nextX > 0) nextX = 0;
      if (nextX < maxScroll) nextX = maxScroll;

      x.set(nextX);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => window.removeEventListener("wheel", handleWheel);
  }, [x, maxScroll]);

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: maxScroll, right: 0 }}
      dragElastic={0.2}
      style={{
        width: timelineWidth,
        x,
      }}
      className={styles["timeline-drag-container"]}
    >
      {/*Render each period time-frame*/}
      <div className={styles["periods-container"]}>
        {periods.map((period, index) => {
          const sectionYears = period.end - period.start;
          const sectionWidth = sectionYears * pixelsPerYear;

          return (
            <Period
              periodData={period}
              sectionWidth={sectionWidth}
              key={index}
            />
          );
        })}
      </div>

      {/*Render the time _LINE_*/}
      <Line
        startYear={startYear}
        totalYears={totalYears}
        timelineWidth={timelineWidth}
      />

      {/*Render important timeline events*/}
      <KeyEvents
        startYear={startYear}
        totalYears={totalYears}
        timelineWidth={timelineWidth}
      />
    </motion.div>
  );
}
