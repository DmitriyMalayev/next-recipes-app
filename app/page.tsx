import ImageSlideshow from "@/components/image-slideshow";
import Link from "next/link";

const steps = [
  {
    title: "Discover",
    text: "Browse meals shared by cooks from around the world.",
  },
  {
    title: "Share",
    text: "Post a recipe you love so others can cook it too.",
  },
  {
    title: "Connect",
    text: "Meet people who are chasing the same flavors.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto my-0! w-full max-w-6xl! px-6">
      <section className="flex flex-col items-center gap-10 py-12 md:flex-row md:gap-16 md:py-16">
        <div className="w-full md:w-1/2">
          <ImageSlideshow />
        </div>
        <div className="w-full text-center md:w-1/2 md:text-left">
          <h1 className="text-4xl leading-tight md:text-5xl">
            Food from every table, for every taste
          </h1>
          <p className="text-lg text-[#ddd6cb]">
            Taste and share food from all over the world.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <Link
              href="/community"
              className="rounded-full bg-[#f9572a] px-5 py-2.5 font-semibold text-white no-underline transition hover:bg-[#fd4715]"
            >
              Join the Community
            </Link>
            <Link
              href="/meals"
              className="rounded-full px-5 py-2.5 font-semibold text-[#ffc905] no-underline ring-1 ring-[#ffc905] transition hover:bg-[#ffc905] hover:text-[#282c34]"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16">
        <h2 className="mb-14 text-center font-[Montserrat,sans-serif] text-2xl font-bold text-white">
          How it works
        </h2>
        <ol className="grid gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <li key={step.title} className="text-center">
              <span className="mb-4 block font-[Montserrat,sans-serif] text-3xl font-bold leading-none text-[#ffc905]">
                {index + 1}
              </span>
              <h3 className="mb-2 font-[Montserrat,sans-serif] text-lg font-bold text-white">
                {step.title}
              </h3>
              <p className="mx-auto! mb-0! max-w-72 text-sm! leading-relaxed text-[#c9c2b8]">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="pb-20 text-center">
        <h2 className="mb-4 font-[Montserrat,sans-serif] text-2xl font-bold text-white">
          Why World Table?
        </h2>
        <p className="mx-auto! max-w-2xl text-[#ddd6cb]">
          These recipes come from home cooks. You get dishes you will actually
          make, and a community ready to cook them with you.
        </p>
      </section>
    </main>
  );
}
