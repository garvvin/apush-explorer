"use client";

import styles from "../page.module.css";
import { useState } from "react";

export default function Quizzler() {
  const [promptData, setPromptData] = useState("");
  const [questionData, setQuestionData] = useState({
    question: "",
    choices: [
      { choice: "", reason: "" },
      { choice: "", reason: "" },
      { choice: "", reason: "" },
      { choice: "", reason: "" },
    ],
    correct: "",
  });
  const [feedback, setFeedback] = useState("");

  const generate = async () => {
    console.log(promptData);
    const res = await fetch("/api/generate-question", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic: promptData }),
    });

    const data = await res.json();
    console.log(data.result);
    console.log(JSON.parse(data.result));
    setQuestionData(JSON.parse(data.result));
  };

  const onLoadClick = async () => {
    console.log("load clicked, generating");
    setFeedback("");
    generate();
  };

  const onChoiceClick = (answerChoice) => {
    setFeedback(answerChoice.reason);
  };

  return (
    <div className={styles["main-container"]}>
      <div className={styles["main-card"]}>
        <p className={styles["prompt-label"]}>Question Prompt</p>
        <input
          onChange={(e) => setPromptData(e.target.value)}
          value={promptData}
          type="text"
          className={styles["prompt-input"]}
        ></input>
        <button className={styles["load-btn"]} onClick={onLoadClick}>
          Load
        </button>
        <div className={styles["question"]}>{questionData.question}</div>
        <div className={styles["choices-container"]}>
          {questionData.choices.map((choiceObj, i) => (
            <button
              key={i}
              className={styles["choice-btn"]}
              onClick={() => onChoiceClick(choiceObj)}
            >
              {choiceObj.choice}
            </button>
          ))}
        </div>
        <div className={styles["feedback-container"]}>{feedback}</div>
      </div>
    </div>
  );
}
