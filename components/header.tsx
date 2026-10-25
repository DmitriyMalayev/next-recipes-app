import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>Welcome to my recipes website!</h1>
      <Link href="/about">About</Link>
    </header>
  );
}
