"use client";
import styles from "./page.module.css";
import NavOverlay from "../components/nav/NavOverlay";
import CasesList from "./components/CasesList";
import CaseDetails from "./components/CaseDetails";
import { useState } from "react";

export default function CourtCases() {
  const courtcaseData = require("./courtcases.json");
  const [details, setDetails] = useState("Select a case to learn more.");

  return (
    <>
      <div className={styles["main-container"]}>
        <div className={styles["inner-container"]}>
          <h2 className={styles["topic-title"]}>Key Court Cases </h2>
          <div className={styles["list-detail-box"]}>
            <CasesList courtcaseData={courtcaseData} setDetails={setDetails} />
            <CaseDetails details={details} />
          </div>
        </div>
      </div>
      <NavOverlay />
    </>
  );
}
