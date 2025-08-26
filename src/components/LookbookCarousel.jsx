import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LOOKBOOK_SHOTS } from "../constants/lookbook.js";

export default function LookbookCarousel() {
  const scrollerRef = useRef(null);

  const scrollByAmount = (delta) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  // Scroll ~2 slides depending on screen size
  const scrollPrev = () => {
    const w = window.innerWidth;
    const step =
      w >= 1280 ? w * 0.40 : // xl
      w >= 1024 ? w * 0.44 : // lg
      w >= 768  ? w * 0.66 : // md (≈ two of 33vw)
                  w * 0.52;  // mobile (≈ two of 50vw)
    scrollByAmount(-step);
  };
  const scrollNext = () => {
    const w = window.innerWidth;
    const step =
      w >= 1280 ? w * 0.40 :
      w >= 1024 ? w * 0.44 :
      w >= 768  ? w * 0.66 :
                  w * 0.52;
    scrollByAmount(step);
  };

  return (
    <section id="lookbook" className="py-16">
      <header className="text-center mb-6">
        <p className="text-xs tracking-[0.25em] uppercase text-neutral-500">Lookbook</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-serif">Campaign Carousel</h2>
        <p className="mt-2 text-neutral-700">Browse our editorial picks.</p>
      </header>

      {/* FULL-BLEED WRAPPER */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        {/* Arrows (desktop only) */}
        <div className="pointer-events-none absolute inset-0 hidden md:flex items-center justify-between px-4 z-10">
          <button
            onClick={scrollPrev}
            className="pointer-events-auto p-2 rounded-full bg-white/90 hover:bg-white shadow"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 text-primary" />
          </button>
          <button
            onClick={scrollNext}
            className="pointer-events-auto p-2 rounded-full bg-white/90 hover:bg-white shadow"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 text-primary" />
          </button>
        </div>

        {/* Scroller */}
        <div
          ref={scrollerRef}
          className="overflow-x-auto no-scrollbar scroll-smooth"
          style={{ scrollSnapType: "x mandatory" }}
        >
          <div className="flex gap-3 sm:gap-4 px-3 sm:px-4 md:px-6">
            {LOOKBOOK_SHOTS.map((shot, i) => (
              <motion.figure
                key={shot.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.03 }}
                className="relative shrink-0 snap-start group"
              >
                {/* Responsive height + min width per breakpoint */}
                <div className="
                  relative overflow-hidden rounded-lg
                  h-[14rem] sm:h-[16rem] md:h-[18rem] lg:h-[20rem] xl:h-[22rem]
                  min-w-[50vw] sm:min-w-[45vw] md:min-w-[33vw] lg:min-w-[22vw] xl:min-w-[20vw]
                ">
                  <img
                    src={shot.image}
                    alt={shot.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                  <figcaption className="absolute left-3 bottom-3 text-white max-w-[90%]">
                    <span className="inline-block bg-white/90 text-primary text-[10px] px-2 py-0.5 rounded-full">
                      {shot.title}
                    </span>
                    <p className="mt-1 text-[12px] text-white/90 hidden md:block">
                      {shot.caption}
                    </p>
                  </figcaption>
                </div>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>

      {/* Dots (static placeholders) */}
      <div className="mt-4 flex justify-center gap-1.5">
        {LOOKBOOK_SHOTS.map((_, idx) => (
          <span key={idx} className="h-1.5 w-1.5 rounded-full bg-primary/20" />
        ))}
      </div>
    </section>
  );
}
