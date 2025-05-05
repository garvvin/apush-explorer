"use client";
import NavButton from "./NavButton";
import NavBar from "./NavBar";
import { useState } from "react";

export default function NavOverlay({}) {
  const [navOpen, setNavOpen] = useState(true);
  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <div
      className="nav-overlay"
      style={navOpen ? { width: "300px" } : { width: "0px" }}
    >
      <NavButton toggleNav={toggleNav} />
      <NavBar navOpen={navOpen} />
    </div>
  );
}
