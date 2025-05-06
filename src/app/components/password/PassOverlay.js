"use client";
import { useState } from "react";
import styles from "./password.module.css";

export default function PassOverlay({ setPassed }) {
  const [input, setInput] = useState("");
  const superSecretKey = "100menwouldbeatagorilla";

  const onEnter = (e) => {
    if (e.key == "Enter") {
      if (input == superSecretKey) {
        setPassed(true);
      }
    }
  };

  return (
    <div className={styles["main-container"]}>
      <input
        type="password"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        onKeyDown={onEnter}
      ></input>
    </div>
  );
}
