import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <h1>Meals</h1>
      <p>This is a meals page.</p>
      <Link href="/meals/share">Share a Meal</Link>
      <Link href="/">Back to Home Page</Link>
      <Link href="/community">Community</Link>
    </main>
  );
}
