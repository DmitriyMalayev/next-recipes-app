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
    <main className="mx-auto my-0 w-full max-w-6xl px-6 text-center">
      <section className="flex flex-col items-center gap-10 py-12 md:flex-row md:gap-16 md:py-16">
        <div className="w-full md:w-1/2">
          <ImageSlideshow />
        </div>
        <div className="w-full text-center md:w-1/2 md:text-left">
          <h1 className="mb-4 font-display text-4xl leading-tight font-bold text-white">
            Food from every table, for every taste
          </h1>
          <p className="mb-6 text-[1.15rem] leading-[1.6] text-[#ddd6cb]">
            Taste and share food from all over the world.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <Link
              href="/community"
              className="mx-auto my-3 block w-fit rounded-full bg-[#f9572a] px-5 py-2.5 font-semibold text-[#ffc905] no-underline transition hover:bg-[#fd4715] hover:text-[#f9572a] focus-visible:text-[#f9572a]"
            >
              Join the Community
            </Link>
            <Link
              href="/meals"
              className="mx-auto my-3 block w-fit rounded-full px-5 py-2.5 font-semibold text-[#ffc905] no-underline ring-1 ring-[#ffc905] transition hover:bg-[#ffc905] hover:text-[#f9572a] focus-visible:text-[#f9572a]"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16">
        <h2 className="mb-14 text-center font-display text-2xl font-bold text-white">
          How it works
        </h2>
        <ol className="grid gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <li key={step.title} className="text-center">
              <span className="mb-4 block font-display text-3xl leading-none font-bold text-[#ffc905]">
                {index + 1}
              </span>
              <h3 className="mb-2 font-display text-lg font-bold text-white">
                {step.title}
              </h3>
              <p className="mx-auto mb-0 max-w-72 text-sm leading-relaxed text-[#c9c2b8]">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="pb-20 text-center">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">
          Why World Table?
        </h2>
        <p className="mx-auto mb-6 max-w-2xl text-[1.15rem] leading-[1.6] text-[#ddd6cb]">
          These recipes come from home cooks. You get dishes you will actually
          make, and a community ready to cook them with you.
        </p>
      </section>
    </main>
  );
}
