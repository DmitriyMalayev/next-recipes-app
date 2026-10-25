import Link from "next/link";

export default function Home() {
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to my recipes website!</h1>
      <Link href="/about">About</Link>
    </main>
  );
}
