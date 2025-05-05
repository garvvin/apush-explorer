"use client";

import styles from "./page.module.css";
import NavOverlay from "../components/nav/NavOverlay";
import Details from "./components/Details";

import { useState } from "react";

export default function Compare() {
  const compareData = require("./compare.json");
  const [details, setDetails] = useState([
    { title: "", notes: [] },
    { title: "Similarities", notes: [] },
    { title: "", notes: [] },
  ]);

  return (
    <>
      <div className={styles["main-container"]}>
        <div className={styles["inner-container"]}>
          <h2 className={styles["topic-title"]}>Choose a topic: </h2>
          <ul className={styles["list"]}>
            {compareData.map((data, ind) => (
              <li
                className={styles["list-link"]}
                key={ind}
                onClick={() => setDetails(data)}
              >
                {data[0].title} vs. {data[2].title}
              </li>
            ))}
          </ul>
        </div>

        <Details details={details} setDetails={setDetails} />
      </div>
      <NavOverlay />
    </>
  );
}
