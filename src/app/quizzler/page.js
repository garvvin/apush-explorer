"use client";
import styles from "./page.module.css";
import { useState } from "react";

//components
import PassOverlay from "../components/password/PassOverlay";
import NavOverlay from "../components/nav/NavOverlay";
import Quizzler from "./components/Quizzler";

export default function QuizzlerPage() {
  const [passed, setPassed] = useState(false);

  return (
    <>
      {passed ? <Quizzler /> : <PassOverlay setPassed={setPassed} />}

      <NavOverlay />
    </>
  );
}
