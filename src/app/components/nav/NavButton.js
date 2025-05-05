import { GiHamburgerMenu } from "react-icons/gi";

export default function NavButton({ toggleNav }) {
  return (
    <button onClick={toggleNav} className="nav-btn">
      <GiHamburgerMenu />
    </button>
  );
}
