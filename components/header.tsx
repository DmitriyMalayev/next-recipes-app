"use client";
import Image from "next/image";
import Link from "next/link";
import logoImage from "@/assets/logo.png";
import mealsImage from "@/assets/icons/meal.svg";
import shareImage from "@/assets/icons/events.svg";
import communityImage from "@/assets/icons/community.svg";
import { usePathname } from "next/navigation";

const navLinkClassName =
  "inline-flex items-center gap-[0.45rem] rounded-full px-3 py-[0.4rem] font-bold whitespace-nowrap text-[#ffc905] no-underline hover:bg-[#f9572a] hover:text-white focus-visible:bg-[#f9572a] focus-visible:text-white aria-[current=page]:bg-[#f9572a] aria-[current=page]:text-white max-[720px]:gap-[0.35rem] max-[720px]:px-2 max-[720px]:py-[0.35rem] max-[720px]:text-[0.95rem]";

const navIconClassName =
  "h-7 w-7 object-contain max-[720px]:h-6 max-[720px]:w-6";

export default function Header() {
  const pathname = usePathname();
  const isMeals = pathname === "/meals";
  const isShare = pathname === "/meals/share";
  const isCommunity = pathname === "/community";

  return (
    <>
      <div className="absolute top-0 left-0 z-[-1] h-[320px] w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="block h-auto w-full"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#59453c", stopOpacity: "1" }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#8f3a09", stopOpacity: "1" }}
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#gradient)"
            d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,181.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      <header className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-4 px-6 pt-5 pb-2 max-[720px]:flex-col max-[720px]:items-center max-[720px]:px-4">
        <Link
          className="flex items-center gap-3 font-display text-[1.05rem] font-bold tracking-[0.12em] text-[#ddd6cb] uppercase no-underline hover:text-[#ffc905] focus-visible:text-[#ffc905]"
          href="/"
        >
          <Image
            src={logoImage}
            alt="Logo"
            width={68}
            height={68}
            loading="eager"
            className="h-[4.25rem] w-[4.25rem] object-contain drop-shadow-[0_0.35rem_0.6rem_rgba(0,0,0,0.4)]"
          />
          Homepage
        </Link>
        <nav className="ml-auto max-[720px]:ml-0 max-[720px]:w-full">
          <ul className="m-0 flex list-none flex-wrap items-center justify-end gap-1 p-0 max-[720px]:justify-center">
            <li>
              <Link
                href="/meals"
                aria-current={isMeals ? "page" : undefined}
                className={navLinkClassName}
              >
                <Image
                  src={mealsImage.src}
                  alt=""
                  width={28}
                  height={28}
                  className={navIconClassName}
                />
                Meals
              </Link>
            </li>
            <li>
              <Link
                href="/meals/share"
                aria-current={isShare ? "page" : undefined}
                className={navLinkClassName}
              >
                <Image
                  src={shareImage.src}
                  alt=""
                  width={28}
                  height={28}
                  className={navIconClassName}
                />
                Share Meal
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                aria-current={isCommunity ? "page" : undefined}
                className={navLinkClassName}
              >
                <Image
                  src={communityImage.src}
                  alt=""
                  width={28}
                  height={28}
                  className={navIconClassName}
                />
                Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
