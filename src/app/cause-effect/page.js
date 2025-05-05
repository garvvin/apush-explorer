"use client";
import styles from "./page.module.css";
import { useState } from "react";
import NavOverlay from "../components/nav/NavOverlay";
import EventDetails from "./components/EventDetails";

export default function Cause() {
  const causeEffectData = require("./cause-effect.json");
  const [details, setDetails] = useState({
    event: "",
    causes: [],
    effects: [],
  });

  return (
    <>
      <div className={styles["main-container"]}>
        <div className={styles["inner-container"]}>
          <h2 className={styles["topic-title"]}>Choose a topic: </h2>
          <ul className={styles["list"]}>
            {causeEffectData.map((data, i) =>
              data.causes ? (
                <li
                  key={i}
                  className={styles["list-link"]}
                  onClick={() => setDetails(data)}
                >
                  {data.event}
                </li>
              ) : (
                <span key={i} className={styles["list-title"]}>
                  {data.event}
                </span>
              )
            )}
          </ul>
          <EventDetails details={details} setDetails={setDetails} />
        </div>
      </div>
      <NavOverlay />
    </>
  );
}
