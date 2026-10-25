import Link from "next/link";

export default async function MealPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log("slug", slug);
  return (
    <main>
      <h1>Meal: {slug} </h1>
      <p>This is a meal page.</p>
      <Link href="/meals">Back to Meals</Link>
      <Link href="/">Back to Home Page</Link>
    </main>
  );
}
