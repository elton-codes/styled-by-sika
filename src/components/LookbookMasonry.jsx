import React from "react";
import { motion } from "framer-motion";
import { LOOKBOOK_SHOTS } from "../constants/lookbook.js";

const heightClass = (size) => {
  switch (size) {
    case "xl":
      return "h-[34rem]";
    case "tall":
      return "h-[28rem]";
    case "short":
    default:
      return "h-[18rem]";
  }
};

export default function LookbookMasonry() {
  return (
    <section id="lookbook" className="py-16">
      <header className="text-center mb-10">
        <p className="text-xs tracking-[0.25em] uppercase text-neutral-500">Lookbook</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-serif">Editorial Collage</h2>
        <p className="mt-2 text-neutral-700">
          Campaign moments and studio selects — a glimpse into Modern African Luxury.
        </p>
      </header>

      {/* Masonry using CSS columns */}
      <div className="px-1 md:px-0 columns-2 md:columns-3 gap-4 [column-fill:_balance]">
        {LOOKBOOK_SHOTS.map((shot, i) => (
          <motion.figure
            key={shot.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.03 }}
            className="mb-4 break-inside-avoid group relative block"
          >
            {/* Image box with variable height */}
            <div className={`relative w-full ${heightClass(shot.size)} overflow-hidden`}>
              <img
                src={shot.image}
                alt={shot.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Caption overlay (bottom-left) */}
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-3 px-3">
              <div className="translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="inline-block bg-white/90 text-primary text-[11px] tracking-wide px-2.5 py-1 rounded-full">
                  {shot.title}
                </span>
                <p className="mt-1 text-[12px] text-white/95 drop-shadow">
                  {shot.caption}
                </p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
