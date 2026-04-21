"use client";

import Image, { type StaticImageData } from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export type ProjectCarouselSlide = {
  src: StaticImageData;
  alt: string;
};

type ProjectImageCarouselProps = {
  slides: ProjectCarouselSlide[];
  priority?: boolean;
};

const btnClass =
  "absolute top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border/90 bg-surface-1/95 text-accent shadow-sm backdrop-blur-sm opacity-0 pointer-events-none transition-[opacity,background-color,color] duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100 hover:bg-surface-2 hover:text-fg";

export function ProjectImageCarousel({
  slides,
  priority = false,
}: ProjectImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const count = slides.length;
  const showNav = count > 1;
  const pauseAutoplayRef = useRef(false);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % count);
  }, [count]);

  useEffect(() => {
    if (!showNav) return undefined;
    const id = window.setInterval(() => {
      if (!pauseAutoplayRef.current) {
        setIndex((i) => (i + 1) % count);
      }
    }, 5000);
    return () => window.clearInterval(id);
  }, [count, showNav]);

  const safeCount = Math.max(count, 1);
  const slidePercent = 100 / safeCount;

  return (
    <div
      tabIndex={showNav ? 0 : undefined}
      className="group relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border/60 bg-surface-1 outline-none focus-visible:ring-2 focus-visible:ring-accent"
      onMouseEnter={() => {
        pauseAutoplayRef.current = true;
      }}
      onMouseLeave={() => {
        pauseAutoplayRef.current = false;
      }}
      onKeyDown={(e) => {
        if (!showNav) return;
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          goPrev();
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          goNext();
        }
      }}
      role={showNav ? "region" : undefined}
      aria-label={showNav ? "Slideshow" : undefined}
    >
      <div
        className="flex h-full transition-transform duration-700 ease-in-out motion-reduce:transition-none"
        style={{
          width: `${count * 100}%`,
          transform: `translateX(-${slidePercent * index}%)`,
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="relative h-full shrink-0 overflow-hidden"
            style={{ width: `${slidePercent}%` }}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={priority && i === 0}
              sizes="(max-width: 639px) 100vw, 360px"
              className="object-cover object-top"
            />
          </div>
        ))}
      </div>

      {showNav && (
        <>
          <button
            type="button"
            className={`${btnClass} left-1.5 sm:left-2`}
            onClick={goPrev}
            aria-label="Previous slide"
          >
            <FaChevronLeft className="text-sm" aria-hidden />
          </button>
          <button
            type="button"
            className={`${btnClass} right-1.5 sm:right-2`}
            onClick={goNext}
            aria-label="Next slide"
          >
            <FaChevronRight className="text-sm" aria-hidden />
          </button>
        </>
      )}
    </div>
  );
}
