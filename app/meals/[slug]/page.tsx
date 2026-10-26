import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getMealDetails,
  getMealImage,
  getMealTitle,
  getMealCreator,
  getMealSummary,
} from "@/lib/meals";

export default async function MealDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
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
            src={getMealImage(slug)}
            alt={getMealTitle(slug)}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>
        <header className="px-6 pt-6">
          <h1 className="m-0 font-display text-4xl font-bold text-white">
            {getMealTitle(slug)}
          </h1>
          <p className="mt-1 text-sm text-[#cfa69b] italic">
            by {getMealCreator(slug)}
          </p>
        </header>
        <p className="m-0 px-6 py-6">{getMealSummary(slug)}</p>
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
