import Image from "next/image";
import Link from "next/link";

import { getMealImage, getMeals } from "@/lib/meals";
import { getMealTitle } from "@/lib/meals";
import { getMealCreator } from "@/lib/meals";
import { getMealSummary } from "@/lib/meals";

function MealCard({ slug }: { slug: string }) {
  return (
    <article className="flex h-full flex-col justify-between overflow-hidden rounded bg-linear-to-r from-[#2c1e19] to-[#25200f] text-[#ddd6cb] shadow-[0_0_12px_rgba(0,0,0,0.3)]">
      <header>
        <div className="relative h-60">
          <Image
            src={getMealImage(slug)}
            alt={getMealTitle(slug)}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="px-4 pt-2">
          <h2 className="m-0 font-display text-2xl font-bold text-white">
            {getMealTitle(slug)}
          </h2>
          <p className="m-0 text-xs text-[#cfa69b] italic">
            by {getMealCreator(slug)}
          </p>
        </div>
      </header>
      <div className="flex h-full flex-col justify-between">
        <p className="m-0 px-4 pt-4">{getMealSummary(slug)}</p>
        <div className="p-4 text-right">
          <Link
            href={`/meals/${slug}`}
            className="inline-block rounded-lg bg-linear-to-r from-[#f9572a] to-[#ff9b05] px-4 py-2 font-bold text-white no-underline transition hover:from-[#fd4715] hover:to-[#f9b241] hover:shadow-[0_0_12px_rgba(242,100,18,0.8)]"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function MealsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-20">
      <header className="mx-auto max-w-3xl pt-10 pb-12 text-center">
        <h1 className="mb-4 font-display text-4xl leading-normal font-bold text-white">
          Delicious meals, created{" "}
          <span className="bg-linear-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            by you
          </span>
        </h1>
        <p className="mb-6 text-[1.15rem] leading-[1.6] text-[#ddd6cb]">
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <Link
          href="/meals/share"
          className="inline-block rounded-full bg-[#f9572a] px-5 py-2.5 font-semibold text-[#ffc905] no-underline transition hover:bg-[#fd4715] hover:text-white focus-visible:text-white"
        >
          Share Your Favorite Recipe
        </Link>
      </header>
      <ul className="m-0 grid list-none grid-cols-1 gap-8 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {getMeals().map((meal) => (
          <li key={meal.slug} className="h-full">
            <MealCard slug={meal.slug} />
          </li>
        ))}
      </ul>
    </main>
  );
}
