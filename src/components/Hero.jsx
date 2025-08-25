import React from "react";
import { motion } from "framer-motion";
import { BRAND } from "../constants/brand.js";

const bg =
  "https://images.squarespace-cdn.com/content/v1/5b2244fefcf7fd5428816fc7/1580992697674-TMFJ4SXYUWMR3TBM8Z5D/KC+DRESS+4+CLOSER+HIGH.jpg?format=1500w"; // placeholder

export default function Hero() {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      {/* Background image */}
      <div
        className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden"
        style={{
          backgroundImage: `url('${bg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Soft vignette / overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Copy block */}
        <div className="absolute inset-0 grid place-items-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl text-white"
          >
            <p className="text-xs tracking-[0.35em] uppercase/relaxed">
              {BRAND.TAGLINE}
            </p>
            <h1 className="mt-3 font-serif text-5xl md:text-6xl leading-[1.05]">
              {BRAND.NAME}
            </h1>
            <p className="mt-4 text-white/85">
              Refined silhouettes. Modern craftsmanship. Editorial elegance.
            </p>

            <div className="mt-8 inline-flex items-center gap-4">
              <a
                href="#lookbook"
                className="px-6 py-3 rounded-full bg-accent text-white text-sm tracking-wide"
              >
                Explore Lookbook
              </a>
              <a
                href="#story"
                className="px-6 py-3 rounded-full ring-1 ring-white/40 text-sm tracking-wide text-white"
              >
                Our Story
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
