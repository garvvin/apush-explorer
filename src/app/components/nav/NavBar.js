import Link from "next/link";

export default function NavBar({ navOpen }) {
  return (
    <div className={"navbar nav-" + (navOpen ? "open" : "close")}>
      <Link href="/">
        <button className="nav-content-btn">Timeline</button>
      </Link>
      <Link href="/compare">
        <button className="nav-content-btn">Compare Contrasts</button>
      </Link>
      <Link href="/cause-effect">
        <button className="nav-content-btn">Causes & Effects</button>
      </Link>
      <Link href="/court-cases">
        <button className="nav-content-btn">Court Cases</button>
      </Link>
      <Link href="/quizzler">
        <button className="nav-content-btn">Quizzler</button>
      </Link>
    </div>
  );
}
