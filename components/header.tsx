import Image from "next/image";
import Link from "next/link";
import logoImage from "@/assets/logo.png";
import mealsImage from "@/assets/icons/meal.svg";
import shareImage from "@/assets/icons/events.svg";
import communityImage from "@/assets/icons/community.svg";
export default function Header() {
  return (
    <>
      <div className="header-background">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
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
      <header className="mx-auto w-full max-w-6xl">
        <Link className="brand" href="/">
          <Image
            src={logoImage}
            alt="Logo"
            width={68}
            height={68}
            loading="eager"
          />
          Homepage
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/meals">
                <Image src={mealsImage.src} alt="" width={28} height={28} />
                Meals
              </Link>
            </li>
            <li>
              <Link href="/meals/share">
                <Image src={shareImage.src} alt="" width={28} height={28} />
                Share Meal
              </Link>
            </li>
            <li>
              <Link href="/community">
                <Image src={communityImage.src} alt="" width={28} height={28} />
                Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
