"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type CarouselImage = {
  src: string;
  alt: string;
};

type ServiceImageCarouselProps = {
  images: CarouselImage[];
  className?: string;
  intervalMs?: number;
};

export default function ServiceImageCarousel({
  images,
  className = "relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100",
  intervalMs = 4200,
}: ServiceImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [images.length, intervalMs]);

  if (images.length === 0) return null;

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  return (
    <div className={className}>
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== activeIndex}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Imagen anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-slate-900/60 hover:bg-slate-900/80 text-white w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Imagen siguiente"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-slate-900/60 hover:bg-slate-900/80 text-white w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
            {images.map((image, index) => (
              <button
                key={`${image.src}-dot`}
                type="button"
                aria-label={`Ir a imagen ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex ? "bg-white" : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
