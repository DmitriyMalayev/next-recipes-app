import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMealDetails } from "@/lib/meals";
import { Suspense } from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meal = getMealDetails(slug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default function MealDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MealDetails params={params} />
    </Suspense>
  );
}

async function MealDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const meal = getMealDetails(slug);

  if (!meal) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-3xl px-6 pt-10 pb-20">
      <article className="overflow-hidden rounded bg-linear-to-r from-[#2c1e19] to-[#25200f] text-[#ddd6cb] shadow-[0_0_12px_rgba(0,0,0,0.3)]">
        <div className="relative h-80">
          <Image
            src={meal.image}
            alt={meal.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>
        <header className="px-6 pt-6">
          <h1 className="m-0 font-display text-4xl font-bold text-white">
            {meal.title}
          </h1>
          <p className="mt-1 text-sm text-[#cfa69b] italic">
            by {meal.creator}
          </p>
          <p className="m-0 mt-1 text-sm">
            <a
              href={`mailto:${meal.creator_email}`}
              className="text-[#ffc905] no-underline hover:text-[#f9572a]"
            >
              {meal.creator_email}
            </a>
          </p>
        </header>
        <p className="m-0 px-6 pt-6">{meal.summary}</p>
        <h2 className="m-0 px-6 pt-6 font-display text-2xl font-bold text-white">
          Instructions
        </h2>
        <p className="m-0 px-6 pt-2 pb-6 whitespace-pre-line">
          {meal.instructions}
        </p>
      </article>
      <Link
        href="/meals"
        className="mt-8 inline-block font-semibold text-[#ffc905] no-underline hover:text-[#f9572a]"
      >
        Back to Meals
      </Link>
    </main>
  );
}
