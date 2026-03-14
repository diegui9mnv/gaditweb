"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type FieldWorkImage = {
  src: string;
  alt: string;
};

type FieldWorkCarouselProps = {
  images: FieldWorkImage[];
  intervalMs?: number;
};

function getItemsPerView(viewportWidth: number) {
  if (viewportWidth < 640) return 1;
  if (viewportWidth < 1024) return 2;
  return 4;
}

export default function FieldWorkCarousel({
  images,
  intervalMs = 4200,
}: FieldWorkCarouselProps) {
  const [itemsPerView, setItemsPerView] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView(window.innerWidth));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = useMemo(
    () => Math.max(0, images.length - itemsPerView),
    [images.length, itemsPerView],
  );

  useEffect(() => {
    if (images.length <= itemsPerView) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [images.length, itemsPerView, maxIndex, intervalMs]);

  const canSlide = images.length > itemsPerView;
  const slideWidth = 100 / itemsPerView;
  const visibleIndex = activeIndex > maxIndex ? 0 : activeIndex;

  const goPrev = () => {
    setActiveIndex(visibleIndex <= 0 ? maxIndex : visibleIndex - 1);
  };

  const goNext = () => {
    setActiveIndex(visibleIndex >= maxIndex ? 0 : visibleIndex + 1);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out -mx-1.5"
          style={{ transform: `translateX(-${visibleIndex * slideWidth}%)` }}
        >
          {images.map((image) => (
            <div
              key={image.src}
              className="shrink-0 px-1.5"
              style={{ width: `${slideWidth}%` }}
            >
              <div className="relative h-64 rounded-xl overflow-hidden shadow-md group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 object-center"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {canSlide && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Imagen anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-900/65 hover:bg-slate-900/85 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors"
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
            onClick={goNext}
            aria-label="Imagen siguiente"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900/65 hover:bg-slate-900/85 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors"
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

          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={`field-work-dot-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Ir al grupo ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  index === visibleIndex ? "w-6 bg-blue-600" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
