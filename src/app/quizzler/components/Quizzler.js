"use client";

import styles from "../page.module.css";
import { useState } from "react";

export default function Quizzler({ setLoading }) {
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
  const [prevQuestions, setPrevQuestions] = useState([]);
  const [feedback, setFeedback] = useState("");

  const getChoiceIndex = (choiceText, choices) => {
    for (let i = 0; i < choices.length; i++) {
      if (choices[i].choice == choiceText) {
        return i;
      }
    }
  };

  const generate = async () => {
    console.log(promptData);
    const res = await fetch("/api/generate-question", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prevQuestions: prevQuestions, topic: promptData }),
    });

    const data = await res.json();

    console.log(data);
    const parsedData = JSON.parse(data.result);

    setQuestionData(parsedData);
    setPrevQuestions((prevPrevQ) => [
      ...prevPrevQ,
      `${parsedData.question} - Correct Choice Index: ${getChoiceIndex(
        parsedData.correct,
        parsedData.choices
      )}`,
    ]);
    setLoading(false);
  };

  const onLoadClick = async () => {
    console.log("load clicked, generating");
    setLoading(true);
    setFeedback("");
    generate();
  };

  const onChoiceClick = (answerChoice) => {
    let fb = answerChoice.reason;
    setFeedback(
      (answerChoice.choice == questionData.correct
        ? "Correct - "
        : "Incorrect - ") + fb
    );
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
