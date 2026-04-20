"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function HeroCarousel({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true }),
    Fade(),
  ]);

  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const goTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi],
  );

  return (
    <div className="relative h-full w-full">
      <div
        className="h-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5"
        ref={emblaRef}
      >
        <div className="flex h-full">
          {images.map((src, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0 relative">
              <Image
                src={src}
                alt={`${alt} — foto ${i + 1}`}
                fill
                priority={i === 0}
                sizes="(max-width: 768px) 90vw, 45vw"
                className="object-cover object-top"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        aria-label="Foto anterior"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-background/70 text-brand backdrop-blur-sm hover:bg-background transition-colors opacity-0 group-hover/hero:opacity-100"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        aria-label="Próxima foto"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-background/70 text-brand backdrop-blur-sm hover:bg-background transition-colors opacity-0 group-hover/hero:opacity-100"
      >
        <ChevronRight size={18} />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ir para foto ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === selected ? "w-6 bg-background" : "w-1.5 bg-background/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
