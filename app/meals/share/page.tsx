import Link from "next/link";

export default function ShareMealPage() {
  return (
    <main>
      <h1>Share Meal</h1>
      <p>This is a share meal page.</p>
      <Link href="/meals">Back to Meals</Link>
      <Link href="/">Back to Home Page</Link>
    </main>
  );
}
