"use client";
import styles from "./page.module.css";
import { useState } from "react";

//components
import PassOverlay from "../components/password/PassOverlay";
import NavOverlay from "../components/nav/NavOverlay";
import Quizzler from "./components/Quizzler";
import LoadingOverlay from "../components/LoadingOverlay";

export default function QuizzlerPage() {
  const [passed, setPassed] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <LoadingOverlay loading={loading} />
      {passed ? (
        <Quizzler setLoading={setLoading} />
      ) : (
        <PassOverlay setPassed={setPassed} />
      )}

      <NavOverlay />
    </>
  );
}
