import Image from "next/image";

import mealIcon from "@/assets/icons/meal.svg";
import communityIcon from "@/assets/icons/community.svg";
import eventsIcon from "@/assets/icons/events.svg";

const perks = [
  {
    icon: mealIcon,
    alt: "A delicious meal",
    text: "Share & discover food from all over the world",
  },
  {
    icon: communityIcon,
    alt: "A crowd of people, cooking",
    text: "Meet people who are chasing the same flavors",
  },
  {
    icon: eventsIcon,
    alt: "A crowd of people at a cooking event",
    text: "Participate in exclusive cooking events",
  },
];

export default function CommunityPage() {
  return (
    <main className="mx-auto my-0 w-full max-w-5xl px-6 text-center">
      <header className="mx-auto max-w-2xl pt-10 pb-16 text-center">
        <h1 className="mb-4 font-display text-4xl leading-normal font-bold text-white">
          One shared passion: <span className="text-[#f9572a]">Food</span>
        </h1>
        <p className="mb-0 text-[1.15rem] leading-[1.6] text-[#ddd6cb]">
          Let&apos;s connect and share our favorite recipes!
        </p>
      </header>
      <ul className="m-0 grid list-none grid-cols-1 gap-12 p-0 sm:grid-cols-3 sm:gap-8">
        {perks.map((perk) => (
          <li key={perk.alt} className="flex flex-col items-center text-center">
            <Image
              src={perk.icon}
              alt={perk.alt}
              className="mb-5 h-28 w-28 object-contain"
            />
            <p className="mb-0 max-w-56 text-base leading-snug font-semibold text-white">
              {perk.text}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
