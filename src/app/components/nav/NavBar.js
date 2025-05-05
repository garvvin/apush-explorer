import Link from "next/link";

export default function NavBar({ navOpen }) {
  console.log(navOpen);
  return (
    <div className={"navbar nav-" + (navOpen ? "open" : "close")}>
      <Link href="/">
        <button className="nav-content-btn">Timeline</button>
      </Link>
      <Link href="/compare">
        <button className="nav-content-btn">Compare Contrasts</button>
      </Link>
      <Link href="/cause">
        <button className="nav-content-btn">Causes & Effects</button>
      </Link>
    </div>
  );
}
