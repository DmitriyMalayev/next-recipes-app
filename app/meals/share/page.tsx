import Link from "next/link";

export default function ShareMealPage() {
  return (
    <main className="mx-auto my-16 max-w-160 px-6 text-center">
      <h1 className="mb-4 font-display text-4xl leading-normal font-bold text-white">
        Share Meal
      </h1>
      <p className="mb-6 text-[1.15rem] leading-[1.6]">
        This is a share meal page.
      </p>
      <Link
        href="/meals"
        className="mx-auto my-3 block w-fit font-semibold text-[#ffc905] no-underline hover:text-[#f9572a] focus-visible:text-[#f9572a]"
      >
        Back to Meals
      </Link>
      <Link
        href="/"
        className="mx-auto my-3 block w-fit font-semibold text-[#ffc905] no-underline hover:text-[#f9572a] focus-visible:text-[#f9572a]"
      >
        Back to Home Page
      </Link>
    </main>
  );
}
