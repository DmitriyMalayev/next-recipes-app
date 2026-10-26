"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import burgerImg from "@/assets/burger.jpg";
import curryImg from "@/assets/curry.jpg";
import macncheeseImg from "@/assets/macncheese.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import schnitzelImg from "@/assets/schnitzel.jpg";
import tomatoSaladImg from "@/assets/tomato-salad.jpg";

const images = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: macncheeseImg, alt: "Mac and cheese" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: schnitzelImg, alt: "A delicious schnitzel" },
  { image: tomatoSaladImg, alt: "A delicious tomato salad" },
];

const slideClassName =
  "absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-in-out";

const buttonClassName =
  "absolute top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-[#282c34]/75 text-[#ffc905] shadow-md transition hover:bg-[#f9572a] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc905]";

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, currentImageIndex]);

  function showPrevious() {
    console.log("showPrevious");
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  }

  function showNext() {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  return (
    <div
      className="relative h-100 w-full overflow-hidden rounded-lg shadow-[0_0_0.5rem_rgba(0,0,0,0.5)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Food slideshow"
      role="region"
    >
      {images.map((image, index) => (
        <Image
          key={image.alt}
          src={image.image}
          className={
            index === currentImageIndex
              ? `${slideClassName} z-1 scale-100 translate-x-0 rotate-0 opacity-100`
              : `${slideClassName} scale-110 -translate-x-4 -rotate-5 opacity-0`
          }
          alt={image.alt}
          priority={index === 0}
        />
      ))}
      <button
        type="button"
        className={`${buttonClassName} left-3`}
        onClick={showPrevious}
        aria-label="Previous image"
      >
        <svg
          viewBox="0 0 20 20"
          className="h-5 w-5"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M12 4 L6 10 L12 16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        type="button"
        className={`${buttonClassName} right-3`}
        onClick={showNext}
        aria-label="Next image"
      >
        <svg
          viewBox="0 0 20 20"
          className="h-5 w-5"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M8 4 L14 10 L8 16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
