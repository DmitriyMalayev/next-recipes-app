"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import manifest from "@/public/food-images/commercial-free/manifest.json";

const images = manifest.images.map((image) => ({
  src: `/food-images/commercial-free/${image.file}`,
  alt: image.alt,
  file: image.file,
}));

const slideClassName =
  "absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-in-out";

const buttonClassName =
  "absolute top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-[#282c34]/75 text-[#ffc905] shadow-md transition hover:bg-[#f9572a] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc905]";

function neighboringIndexes(currentIndex: number, count: number) {
  if (count === 0) {
    return [];
  }

  const previousIndex = (currentIndex - 1 + count) % count;
  const nextIndex = (currentIndex + 1) % count;

  return [previousIndex, currentIndex, nextIndex].filter(
    (index, position, list) => list.indexOf(index) === position,
  );
}

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
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  }

  function showNext() {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  const visibleIndexes = neighboringIndexes(currentImageIndex, images.length);

  return (
    <div
      className="relative h-100 w-full overflow-hidden rounded-lg shadow-[0_0_0.5rem_rgba(0,0,0,0.5)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Food slideshow"
      role="region"
    >
      {visibleIndexes.map((index) => {
        const image = images[index];
        const isCurrent = index === currentImageIndex;

        return (
          <Image
            key={image.file}
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 768px) 36rem, 100vw"
            className={
              isCurrent
                ? `${slideClassName} z-1 scale-100 translate-x-0 rotate-0 opacity-100`
                : `${slideClassName} scale-110 -translate-x-4 -rotate-5 opacity-0`
            }
            priority={index === 0}
          />
        );
      })}
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
